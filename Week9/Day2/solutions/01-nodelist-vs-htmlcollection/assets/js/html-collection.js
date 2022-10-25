export default () => {
  const bodyChildElements = document.body.children; // HTMLCollection [div]
  console.log(bodyChildElements);

  const div = bodyChildElements[0];
  console.log("div parent ", div);
  const divChildElements = Array.from(div.children); // HTMLCollection [span]

  // without Array.from will cause stack overflow
  // for(let i = 0; i < divChildElements.length; i++){
  //   // create element and add to parent
  //   const element = document.createElement("span");
  //   div.appendChild(element);
  // }

  console.log("div length", divChildElements.length);
  console.log("div children ", divChildElements);
  // creating an element

  console.log("div length after adding", divChildElements.length);

  console.log("div children ", divChildElements);
  const helloWorld = div.innerText; // Hello World! Yes!    <-- NOT Hello World!
  console.log("inner text ", helloWorld);
  const span = divChildElements[0]; // <span>Yes!</span>
  // debugger;
};
