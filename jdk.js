const stars = document.querySelectorAll(".star");
const ratingValue = document.getElementById("rating-value");

stars.forEach(star => {
  star.addEventListener("click", () => {
    resetStars();
    highlightStars(star.dataset.value);
    ratingValue.textContent = `You rated this ${star.dataset.value} out of 5 stars.`;
  });

  star.addEventListener("mouseover", () => {
    resetStars();
    highlightStars(star.dataset.value);
  });

  star.addEventListener("mouseout", () => {
    resetStars();
  });
});

function highlightStars(value) {
  for (let i = 0; i < value; i++) {
    stars[i].classList.add("selected");
  }
}

function resetStars() {
  stars.forEach(star => star.classList.remove("selected"));
}
