"use client";

import { GenerateRecipeButton } from "#/components/generate-recipe-button";
import { IngredientList } from "#/components/ingredient-list";
import { RecipeSection } from "#/components/recipe-section";
import { useState } from "react";

export default function Page() {
  const [loading, setIsLoading] = useState(false);
  const [generatedResponse, setGeneratedResponse] = useState("");

  const [ingredients, setIngredients] = useState([""]);

  const ingredientCount = ingredients.filter((i) => i !== "").length;

  async function testApi() {
    setIsLoading(true);
    const response = await fetch("/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredients: ingredients.filter((i) => i !== ""),
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunk = decoder.decode(value);
      setGeneratedResponse((prev) => prev + chunk);
    }

    setIsLoading(false);
  }

  return (
    <div className="w-full space-y-8">
      <p className="text-md">
        Enter a list of (at least 3) ingredients you have at home and let GPT-3
        generate some recipes for you.
      </p>

      <div className="flex w-full flex-col items-center justify-center space-y-10 text-white">
        <IngredientList
          ingredients={ingredients}
          setIngredients={setIngredients}
        />

        <GenerateRecipeButton
          onClick={testApi}
          isDisabled={ingredientCount <= 2}
          isLoading={loading}
        />
        <RecipeSection gptResponse={generatedResponse} />
      </div>
    </div>
  );
}
