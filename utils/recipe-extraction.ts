export function splitUpRecipes(gptResponse: string): string[] {
    //regex to find a single digit followed by a period
    const regex = /\d\./g;
    const recipes = gptResponse.split(regex);
    // remove first element, which usually only includes additional ingredients
    recipes.shift();
    return recipes;
}

export function extraceRecipeName(recipe: string): string {
    const indexOfEnd = recipe.indexOf("Ingredients");
    const name = recipe.substring(0, indexOfEnd).trim().replace(":", "");
    return name;
}
export function extractIngredients(recipeString: string): string[] {
    const startIndex = recipeString.indexOf("Ingredients:") + "Ingredients:".length;
    const ingredientsString = recipeString.substring(startIndex + 1);
    const ingredients = ingredientsString.split(",").map(i => i.replace(".", "").trim());
    return ingredients;
}