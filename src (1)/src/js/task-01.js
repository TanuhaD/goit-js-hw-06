// Get node ul#categories
const categoriesList = document.querySelector("#categories");

const categoriesItems = categoriesList.querySelectorAll(".item");

const numberOfCategories = categoriesItems.length;
console.log(`Number of categories: ${numberOfCategories}`);
console.log("");

for (const item of categoriesItems) {
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`);
    console.log("");
}