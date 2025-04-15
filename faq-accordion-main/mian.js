// 2. მე მინდა რომ, როდესაც დავაჭერ icon-ს კითხვის ქვემოთ გამოჩნდეს ტექსი

const plusBtn = document.querySelectorAll(".plus-btn");
const plusImg = document.querySelector(".plus-img");

function iconChanger() {
  if (plusImg.src.includes("icon-minus.svg")) {
    plusImg.src = "assets/images/icon-plus.svg";
  } else if (plusImg.src.includes("icon-plus.svg")) {
    plusImg.src = "assets/images/icon-minus.svg";
  }
}
