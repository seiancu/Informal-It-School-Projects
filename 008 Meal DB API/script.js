async function searchRecipes() {
  var ingredient = document.getElementById("searchInput").value;
  var url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

  try {
    var response = await fetch(url);
    var data = await response.json();

    displayRecipes(data.meals);
    console.log(data.meals);
  } catch (error) {
    console.log("Error:", error);
  }
}

function displayRecipes(meals) {
  var resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  if (meals) {
    meals.forEach((meal) => {
      var mealDiv = document.createElement("div");
      mealDiv.innerHTML = `<h3>${meal.strMeal}</h3>`;
      var imageDiv = document.createElement("div");
      imageDiv.innerHTML = `<img src="${meal.strMealThumb}" alt="${meal.strMeal}">`;
      var getRecipeButton = document.createElement("button");
      getRecipeButton.innerText = "Get Recipe";
      getRecipeButton.addEventListener("click", () => {
        getMealDetails(meal.idMeal);
      });
      mealDiv.appendChild(getRecipeButton);
      resultsContainer.appendChild(mealDiv);
      resultsContainer.appendChild(imageDiv);
    });
  } else {
    resultsContainer.innerHTML = "No recipes found.";
  }
}

async function getMealDetails(mealId) {
  var url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

  try {
    var response = await fetch(url);
    var data = await response.json();
    displayMealDetails(data.meals[0]);
  } catch (error) {
    console.log("Error:", error);
  }
}

function displayMealDetails(meal) {
  var resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  var mealDiv = document.createElement("div");
  mealDiv.innerHTML = `
      <h3>${meal.strMeal}</h3>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <p>${meal.strInstructions}</p>
    `;
  resultsContainer.appendChild(mealDiv);
}
