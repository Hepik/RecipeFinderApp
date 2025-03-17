import Image from "next/image";
import Link from "next/link";

const KEY = process.env.NEXT_PUBLIC_API_KEY;

interface Recipe {
  id: number;
  title: string;
  description?: string;
  image: string;
}

interface ApiResponse {
  results: Recipe[];
}

async function fetchRecipes(queryParams: URLSearchParams): Promise<Recipe[]> {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?${queryParams.toString()}&apiKey=${KEY}`,
    { next: { revalidate: 60 } }
  );
  const data: ApiResponse = await response.json();
  return data.results || [];
}

export default async function RecipesPage({
  searchParams,
}: {
  searchParams: { query?: string; cuisine?: string; maxTime?: string };
}) {
  const queryParams = new URLSearchParams();
  const aSearchParams = await searchParams;
  if (aSearchParams.query) queryParams.append("query", aSearchParams.query);
  if (aSearchParams.cuisine)
    queryParams.append("cuisine", aSearchParams.cuisine);
  if (aSearchParams.maxTime)
    queryParams.append("maxTime", aSearchParams.maxTime);

  const recipes = await fetchRecipes(queryParams);

  return (
    <div className="pt-2 pl-2 pb-2">
      <h1 className="text-xl font-bold">Results:</h1>
      <ul className="space-y-4 pl-4 pt-2">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <li
              key={recipe.id}
              className="border border-black rounded-md p-4 bg-gray-200 w-[90%]"
            >
              <h2 className="text-lg font-semibold">
                <Link href={`/recipes/${recipe.id}`}>{recipe.title}</Link>
              </h2>
              <div className="relative h-[200px] w-[170px] min-[350px]:w-[200px] bg-white text-black rounded-lg overflow-hidden">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  priority
                  fill={true}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </li>
          ))
        ) : (
          <li>No results</li>
        )}
      </ul>
    </div>
  );
}
