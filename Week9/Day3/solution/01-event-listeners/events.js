// Your code here
window.addEventListener("DOMContentLoaded", () => {
  //   alert("the DOM has loaded");
  const redInput = document.getElementById("red-input");

  const changeRed = () => {
    const value = redInput.value;

    if (value === "red") redInput.style.backgroundColor = "red";
    else redInput.style.backgroundColor = "";
  };

  redInput.addEventListener("input", changeRed);

  /*
    When #add-item is pressed, a new <li> element with the value from 
    #list-add is created and appended to the <ul>.
  */
  // get input field element
  const addButton = document.getElementById("add-item");
  // listen for click submit

  const createListItem = () => {
    let input = document.getElementById("list-add");

    const inputValue = input.value;

    // create li for input field value
    const li = document.createElement("li");
    li.innerText = inputValue;

    console.log("list item with value ", li);

    // select ul to append li to
    const ul = document.querySelector("ul");

    console.log("ul container for li ", ul);

    ul.appendChild(li);

    input.value = "";
  };

  addButton.addEventListener("click", createListItem);

  const colorInput = document.getElementById("color-select");

  const colorChange = () => {
    const colorSection = document.getElementById("section-3");
    const value = colorInput.value;
    colorSection.style.backgroundColor = value;
  };

  colorInput.addEventListener("change", colorChange);

  const removeListenerButton = document.getElementById("remove-listeners");

  removeListenerButton.addEventListener("click", () => {
    redInput.removeEventListener("input", changeRed);
    addButton.removeEventListener("click", createListItem);
    colorInput.removeEventListener("change", colorChange);
  });
});
