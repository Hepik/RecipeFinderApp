import { SearchForm } from "./_components/SearchForm";

export default function Home() {
  return (
    <div className="w-full">
      <h1 className="font-bold text-2xl pt-2 pl-2">Reciepe Finder</h1>
      <div className="flex justify-center">
        <SearchForm></SearchForm>
      </div>
    </div>
  );
}
