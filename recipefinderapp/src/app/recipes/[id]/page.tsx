import Image from "next/image";

const KEY = process.env.NEXT_PUBLIC_API_KEY;

interface Ingredient {
  name: string;
  amount: string;
}

interface RecipeDetail {
  title: string;
  extendedIngredients: Ingredient[];
  readyInMinutes: number;
  servings: number;
  summary: string;
  image: string;
}

async function fetchRecipeDetails(id: string): Promise<RecipeDetail> {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${KEY}`,
    { next: { revalidate: 60 } }
  );
  const data: RecipeDetail = await response.json();
  return data || [];
}

export default async function RecipeDetailsPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const recipeDetails = await fetchRecipeDetails(id);

  return (
    <div className="max-w-4xl mx-auto p-6 my-2 bg-gray-200 rounded-lg shadow-lg border border-black">
      <div className="relative h-64 w-full bg-gray-100 rounded-lg overflow-hidden mb-6">
        <Image
          src={recipeDetails.image}
          alt={recipeDetails.title}
          priority
          fill={true}
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <h1 className="text-3xl font-semibold text-gray-900 mb-2">
        {recipeDetails.title}
      </h1>
      <div className="flex justify-between text-gray-700 mb-4">
        <p className="text-lg">
          Preparation time: {recipeDetails.readyInMinutes} minutes
        </p>
        <p className="text-lg">Servings: {recipeDetails.servings}</p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-medium text-gray-800 mb-2">Ingredients:</h2>
        <ul className="list-inside pl-4">
          {recipeDetails.extendedIngredients?.map((ingredient, index) => (
            <li key={index} className="text-lg text-gray-700 mb-1">
              {ingredient.amount} {ingredient.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-medium text-gray-800 mb-2">Summary:</h2>
        <p
          className="text-gray-700 text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}
        ></p>
      </div>
    </div>
  );
}
