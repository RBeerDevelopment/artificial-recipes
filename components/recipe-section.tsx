import { extraceRecipeName, extractIngredients, splitUpRecipes } from "#/utils/recipe-extraction";
import React from "react";
import { Recipe, RecipeCard } from "./recipe-card";

interface Props {
    gptResponse: string
}

export function RecipeSection(props: Props): React.ReactElement {

    const { gptResponse } = props;

    if(gptResponse === "") {
        return <></>
    }

    const recipeStrings = splitUpRecipes(gptResponse);
    const recipes: Recipe[] = recipeStrings.map((recipeString) => {
        const title = extraceRecipeName(recipeString);
        const ingredients = extractIngredients(recipeString);
        return {
            title,
            ingredients
        }
    });

    return (
        <div className="flex flex-col gap-y-4 w-full lg:w-1/3 mx-4 justify-center items-center">
           {recipes.map((recipe) => <RecipeCard key={recipe.title} recipe={recipe} />)}
        </ div>
    );
}