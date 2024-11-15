// Array to store recipes
let recipes = [];

// Function to add a recipe
function addRecipe(name, ingredients) {
  const recipe = {
    name: name,
    ingredients: ingredients,
  };
  recipes.push(recipe);
  displayRecipes();
}

// Function to display recipes
function displayRecipes() {
  const recipeList = document.getElementById("recipeList");
  recipeList.innerHTML = "";
  recipes.forEach((recipe, index) => {
    const recipeItem = document.createElement("li");
    recipeItem.textContent = `${recipe.name}: ${recipe.ingredients.join(", ")}`;