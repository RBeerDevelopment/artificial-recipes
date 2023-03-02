import {
  extraceRecipeName,
  extractIngredients,
  splitUpRecipes,
} from "#/utils/recipe-extraction";
import React from "react";
import { Recipe, RecipeCard } from "./recipe-card";

interface Props {
  gptResponse: string;
}

export function RecipeSection(props: Props): React.ReactElement {
  const { gptResponse } = props;

  console.log(gptResponse);

  if (gptResponse === "") {
    return <></>;
  }

  const recipeStrings = splitUpRecipes(gptResponse);
  const recipes: Recipe[] = recipeStrings.map((recipeString) => {
    const title = extraceRecipeName(recipeString);
    const ingredients = extractIngredients(recipeString);
    return {
      title,
      ingredients,
    };
  });

  return (
    <div className="mx-4 flex w-full flex-col items-center justify-center gap-y-4 lg:w-1/3">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.title} recipe={recipe} />
      ))}
    </div>
  );
}
