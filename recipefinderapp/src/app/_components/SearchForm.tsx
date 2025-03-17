"use client";

import { useRouter } from "next/navigation";
import { parseAsInteger, useQueryState } from "nuqs";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const cuisines = [
  "African",
  "Asian",
  "American",
  "British",
  "Cajun",
  "Caribbean",
  "Chinese",
  "Eastern European",
  "European",
];

export const SearchForm = () => {
  const router = useRouter();
  const [query, setQuery] = useQueryState("query", { defaultValue: "" });
  const [cuisine, setCuisine] = useQueryState("cuisine", { defaultValue: "" });
  const [maxTime, setMaxTime] = useQueryState(
    "maxTime",
    parseAsInteger.withDefault(0)
  );

  const isButtonEnabled = query || cuisine || maxTime;

  const handleNext = () => {
    const params = new URLSearchParams();
    if (query) params.append("query", query);
    if (cuisine) params.append("cuisine", cuisine);
    if (maxTime) params.append("maxTime", maxTime.toString());
    router.push(`/recipes?${params.toString()}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-lg p-6 bg-white shadow-lg rounded-2xl">
        <CardContent>
          <h1 className="text-2xl font-bold mb-4">Search for Recipes</h1>

          <Input
            placeholder="Enter recipe name..."
            value={query}
            onChange={(e) => setQuery(e.target.value || null)}
            className="mb-4"
          />

          <DropdownMenu>
            <DropdownMenuTrigger className="w-full p-2 border rounded-md bg-gray-100 text-left">
              {cuisine || "Select Cuisine"}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              <DropdownMenuItem onClick={() => setCuisine("")}>
                None
              </DropdownMenuItem>
              {cuisines.map((c, index) => (
                <DropdownMenuItem key={index} onClick={() => setCuisine(c)}>
                  {c}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Input
            type="number"
            placeholder="Max preparation time (min)"
            value={maxTime}
            onChange={(e) => setMaxTime(parseInt(e.target.value) || null)}
            className="my-4"
          />

          <Button
            onClick={handleNext}
            disabled={!isButtonEnabled}
            className={`w-full ${
              isButtonEnabled
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            } text-white`}
          >
            Next
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
