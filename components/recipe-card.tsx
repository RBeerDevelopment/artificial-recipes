import React from "react";

interface Props {
  recipe: Recipe;
}

export interface Recipe {
  title: string;
  ingredients: string[];
}

export function RecipeCard(props: Props): React.ReactElement {
  const { recipe } = props;

  return (
    <div className="m-4 h-fit w-11/12 rounded-md bg-gray-900 p-4 shadow-sm shadow-gray-800 md:w-2/3">
      <h2 className="pb-4 text-xl">{recipe.title}</h2>
      <ul className="list-disc px-8">
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}
