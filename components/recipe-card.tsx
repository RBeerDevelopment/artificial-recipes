import React from "react";

interface Props {
    recipe: Recipe
}

export interface Recipe {
    title: string
    ingredients: string[]
}

export function RecipeCard(props: Props): React.ReactElement {

    const { recipe } = props;

    return (
        <div className="w-11/12 md:w-2/3 h-fit p-4 m-4 bg-gray-900 rounded-md shadow-sm shadow-gray-800">
           <h2 className="text-xl pb-4">{recipe.title}</h2>
           <ul className="list-disc px-8">
                {recipe.ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                ))}

           </ul>
        </ div>
    );
}
