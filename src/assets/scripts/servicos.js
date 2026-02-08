const container = document.getElementById("carousel");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

next.addEventListener("click", () => {
  container.scrollBy({ left: 260, behavior: "smooth" });
});

prev.addEventListener("click", () => {
  container.scrollBy({ left: -260, behavior: "smooth" });
});
