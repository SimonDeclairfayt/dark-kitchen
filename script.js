import { collection } from "./collection.js";

let filterButtonShow = document.querySelector("#filter");
filterButtonShow.addEventListener("click", () => {
  let filtercolor = document.querySelector("#filter-color");
  filtercolor.classList.toggle("filter-active");
  document.querySelector(".filter-container").classList.toggle("none");
});
let cartButtonShow = document.querySelector("#cart");
cartButtonShow.addEventListener("click", () => {
  let filtercolor = document.querySelector("#cart-color");
  filtercolor.classList.toggle("filter-active");
  document.querySelector(".cart-container").classList.toggle("none");
});
let filterButton = document.querySelectorAll("#filter-button");
filterButton.forEach((tag) => {
  tag.addEventListener("click", () => {
    let tagName = event.target.innerText;
    document.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");

    for (let meal of collection) {
      if (meal.tags.includes(tagName)) {
        let id = meal.id;
        if (
          document.getElementById(`${id}`).classList.contains("displayNone")
        ) {
          document.getElementById(`${id}`).classList.remove("displayNone");
        }
      } else {
        let id = meal.id;
        if (
          !document.getElementById(`${id}`).classList.contains("displayNone")
        ) {
          document.getElementById(`${id}`).classList.add("displayNone");
        }
      }
    }
  });
});
// Adding to cart
let totalPrice = 0;
let addToCart = document.querySelectorAll(".btnAdd");
addToCart.forEach((btn) => {
  btn.addEventListener("click", () => {
    let parentId = event.target.parentElement.parentElement.id;
    let cartContainer = document.querySelector(".meal-container");
    let divContainer = document.createElement("div");
    divContainer.classList.add("meal");
    let mealImg = document.createElement("img");
    mealImg.classList.add("card-img");
    mealImg.src = collection[parentId - 1].linkImg;
    divContainer.appendChild(mealImg);
    let divTextContainer = document.createElement("div");
    divTextContainer.classList.add("mealText-container");
    let mealTitle = document.createElement("h3");
    mealTitle.classList.add("meal-title");
    mealTitle.innerText = collection[parentId - 1].name;
    divTextContainer.appendChild(mealTitle);
    let mealPrice = document.createElement("h3");
    mealPrice.classList.add("meal-price");
    mealPrice.innerText = `${collection[parentId - 1].price} €`;
    divTextContainer.appendChild(mealPrice);
    divContainer.appendChild(divTextContainer);
    cartContainer.appendChild(divContainer);
    totalPrice += Number(collection[parentId - 1].price);
    document.querySelector(".total").innerText = `${totalPrice} €`;
  });
});
