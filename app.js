const buttons = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".paper-card");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;

    cards.forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.type !== filter;
    });
  });
});