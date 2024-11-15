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
    recipeList.appendChild(recipeItem);
  });
}

// Function to show meal options
function showMealOptions(mealType) {
  let options;
  switch (mealType) {
    case "desayuno":
      options = [
        "Opción 1: Panqueques",
        "Opción 2: Huevos revueltos",
        "Opción 3: Avena",
      ];
      break;
    case "almuerzo":
      options = ["Opción 1: Ensalada", "Opción 2: Sándwich", "Opción 3: Pasta"];
      break;
    case "merienda":
      options = ["Opción 1: Fruta", "Opción 2: Yogur", "Opción 3: Galletas"];
      break;
    case "cena":
      options = [
        "Opción 1: Pollo asado",
        "Opción 2: Sopa",
        "Opción 3: Pescado",
      ];
      break;
  }
  alert(`Opciones para ${mealType}:\n${options.join("\n")}`);
}

// Add event listeners to buttons
document
  .getElementById("desayunoBtn")
  .addEventListener("click", () => showMealOptions("desayuno"));
document
  .getElementById("almuerzoBtn")
  .addEventListener("click", () => showMealOptions("almuerzo"));
document
  .getElementById("meriendaBtn")
  .addEventListener("click", () => showMealOptions("merienda"));
document
  .getElementById("cenaBtn")
  .addEventListener("click", () => showMealOptions("cena"));
