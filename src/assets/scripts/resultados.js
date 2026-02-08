const container = document.querySelector(".imagens");
const prev = document.querySelector(".arrow.left");
const next = document.querySelector(".arrow.next");

next.addEventListener("click", () => {
  container.scrollBy({ left: 260, behavior: "smooth" });
});

prev.addEventListener("click", () => {
  container.scrollBy({ left: -260, behavior: "smooth" });
});
