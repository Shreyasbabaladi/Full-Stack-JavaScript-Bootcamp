let cards = document.querySelectorAll(".clash-card__unit-stats");
let text = document.querySelectorAll(".no-border ");
let colors = ["#ec9b3b", "#ee5487", "#f6901a", "#82bb30", "#4facff"];

cards.forEach((card, index) => {
  card.style.backgroundColor = colors[index];
  card.style.color = "#fff";
});

text.forEach((card) => {
  card.style.color = "#fff";
});
