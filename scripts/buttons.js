const btnCategories = document.querySelectorAll(".btn-categories");
const newBtnCategories = [...btnCategories];

btnCategories.forEach(e => {
  e.addEventListener("click", event => {
    const eventTarget = event.target.innerText;
    const newFilter = products.filter(element => {
      if (eventTarget == "Todos") {
        return element;
      } else {
        return element.category === eventTarget;
      }
    });
    createElements(newFilter)
  });
});


