const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

function getClass(e) {
  console.log(this.classList.value);
  e.stopPropagation();
}

divs.forEach((div) =>
  div.addEventListener("click", getClass, { propagation: false, once: true })
);

button.addEventListener(
  "click",
  () => {
    console.log("Click!!!");
  },
  { once: true }
);
