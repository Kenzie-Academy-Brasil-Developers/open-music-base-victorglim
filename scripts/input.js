const input = document.querySelector(".estilo");
const changeValue = document.querySelector(".title-price");
const h3Value = document.createElement("h3");
h3Value.innerText = `R$ ${input.value},00`;
changeValue.appendChild(h3Value);

input.addEventListener("input", event => {
  let eventValue = event.target.value;

  h3Value.innerHTML = "";
  if (eventValue == 0) {
    h3Value.innerText = "R$ 0,00";
  } else if (eventValue > 0) {
    h3Value.innerText = `Até R$ ${eventValue},00`;
  }

  const filterValue = products.filter(e => {
    if (eventValue == 0) {
      return e;
    } else if (eventValue >= e.price) {
      return e;
    }
  });
  createElements(filterValue);
});

const inputRange = document.querySelector(".estilo");

const changeInput = element => {
  let inputMin = element.target.min;
  let inputMax = element.target.max;
  let inputRes = element.target.value;

  element.target.style.backgroundSize =
    ((inputRes - inputMin) * 100) / (inputMax - inputMin) + "% 100%";
};

inputRange.addEventListener("input", changeInput);
