//variables
const mainImage = document.querySelector(".image");
const modal = document.querySelector(".modal-container");
const submitBtn = document.querySelector("#sub");
const container = document.querySelector(".container");
const dismissBtn = document.querySelector("#dismiss");
//events
submitBtn.addEventListener("click", () => {
  modal.style.display = "block";
  container.style.display = "none";
  document.body.style.background = "hsl(235, 18%, 26%)";
});
dismissBtn.addEventListener("click", () => {
  modal.style.display = "none";
  container.style.display = "flex";
  document.body.style.background = "#fff";
});
