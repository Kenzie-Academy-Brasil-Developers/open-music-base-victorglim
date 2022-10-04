const btnDark = document.querySelector(".btn-dark");
const btnSun = document.querySelector(".btn-sun");
const body = document.querySelector("body");

btnDark.addEventListener("click", () => {
  btnSun.classList.remove("hidden");
  btnDark.classList.add("hidden");
  body.classList.add("dark__mode");
  localStorage.setItem("dark-mode", true);
});

btnSun.addEventListener("click", () => {
  btnDark.classList.remove("hidden");
  btnSun.classList.add("hidden");
  body.classList.remove("dark__mode");
  localStorage.removeItem("dark-mode");
});

const captureMode = localStorage.getItem("dark-mode");
if (!captureMode) {
  localStorage.removeItem("dark-mode");
  body.classList.remove("dark__mode");
}

if (captureMode) {
  localStorage.setItem("dark-mode", true);
  body.classList.add("dark__mode");
  btnSun.classList.remove("hidden");
  btnDark.classList.add("hidden");
}
