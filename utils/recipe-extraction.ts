export function splitUpRecipes(gptResponse: string): string[] {
  //regex to find a single digit followed by a period
  const regex = /Recipe\s[0-9]:/gm;
  const recipes = gptResponse.split(regex);
  // remove first element, which usually only includes additional ingredients
  recipes.shift();
  return recipes;
}

export function extraceRecipeName(recipe: string): string {
  const indexOfEnd = recipe.indexOf("\n");
  const name = recipe
    .substring(0, indexOfEnd)
    .trim()
    .replace(/[^\w\s]/g, "");
  return name;
}
export function extractIngredients(recipeString: string): string[] {
  const startIndex =
    recipeString.indexOf("Ingredients:") + "Ingredients:".length;
  const ingredientsString = recipeString.substring(startIndex + 1);
  const ingredients = ingredientsString
    .split("\n")
    .map((i) => i.replace(/[^\w\s]/g, "").trim());
  return ingredients.filter((i) => i.length > 0);
}
