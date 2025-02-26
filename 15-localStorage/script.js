const form = document.querySelector(".container__form");
const list = document.querySelector(".container__list");
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("input[type='text']").value;
  const item = {
    text,
    done: false,
  };
  items.push(item);
  populateList(items, list);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      } />
            <label for="item${i}">${plate.text}</label>
        </li>
        `;
    })
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, list);
}

form.addEventListener("submit", addItem);
list.addEventListener("click", toggleDone);

populateList(items, list);
