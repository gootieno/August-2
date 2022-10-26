// Your code here
// this is making sure our elements exist in the browser so we can select them
window.addEventListener("DOMContentLoaded", () => {
  //select the add button element to add the click event listener
  const addButton = document.getElementById("add");

  // Create an event listener for the #add button to add items to the list.
  addButton.addEventListener("click", (event) => {
    // log something somehow to show that the event listener is firing
    // alert("add button working");
    event.preventDefault();
    // console.log(event);

    // select the ul that will hold our list items
    const shoppingListContainer = document.getElementById("shopping-list");

    // more logging to check element selection
    console.log("shopping list container ul ", shoppingListContainer);

    // select the elements and/or values that are found in our input fields
    const input = document.getElementById("name");
    const inputTypeValue = document.getElementById("type").value;
    const inputValue = input.value;

    // log them to be sure
    console.log("input field element ", input);
    console.log("input field element value", inputValue);
    console.log("type value ", inputTypeValue);

    // create the li element to append to the ul (shoppingListContainer) element
    const li = document.createElement("li");

    // set any innerText or attributes before appending to the parent element (ul)
    li.innerText = inputValue;
    li.setAttribute("data-type", inputTypeValue);

    // log to ensure values are showing
    console.log("list item ", li);

    // append the li to the ul
    shoppingListContainer.appendChild(li);
    // clear the input field for a clean user experience :) 
    input.value = "";
  });



  // easter egg: first 3 to reach out to me after reading this get an emoji ;) 
});
