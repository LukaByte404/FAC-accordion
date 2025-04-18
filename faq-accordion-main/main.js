// 2. მე მინდა რომ, როდესაც დავაჭერ icon-ს კითხვის ქვემოთ გამოჩნდეს ტექსი

const plusBtn = document.querySelectorAll(".plus-btn");
const text = document.querySelectorAll(".answer");

plusBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.querySelector(".plus-img");
    const answer = button.closest(".faq-item").querySelector("p");

    if (img.src.includes("icon-plus.svg")) {
      img.src = "assets/images/icon-minus.svg";
      answer.classList.add("answer-show");
    } else if (img.src.includes("icon-minus.svg")) {
      img.src = "assets/images/icon-plus.svg";
      answer.classList.remove("answer-show");
    }
  });
});
