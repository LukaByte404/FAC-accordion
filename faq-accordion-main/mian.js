// 2. მე მინდა რომ, როდესაც დავაჭერ icon-ს კითხვის ქვემოთ გამოჩნდეს ტექსი

const plusBtn = document.querySelectorAll(".plus-btn");

plusBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.querySelector(".plus-img");

    if (img.src.includes("icon-minus.svg")) {
      img.src = "assets/images/icon-plus.svg";
    } else if (img.src.includes("icon-plus.svg")) {
      img.src = "assets/images/icon-minus.svg";
    }
  });
});
