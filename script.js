let items = [];

function addItem() {
  const inputBox = document.getElementById("input-box");
  const inputValue = inputBox.value.trim();
  if (inputValue !== "") {
    items.push(inputValue);
    inputBox.value = "";
    displayList();
  }
}

function removeItem(index) {
  items.splice(index, 1);
  displayList();
}

function displayList() {
  const list = document.getElementById("list");
  list.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = item;
    li.appendChild(span);
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", () => removeItem(i));
    li.appendChild(button);
    list.appendChild(li);
  }
}
