/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();

    console.log("data ", data);
    const url = data.message; // URL of new dog image

    console.log("url ", url);
    const urlParts = url.split("/");

    console.log("url parts", urlParts);

    const dogBreed = urlParts[4];

    console.log("dog breed ", dogBreed);
    /*
    <li>
        <figure>
            <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg" />
            <figcaption>hound-afghan</figcaption>
        </figure>
    </li>

    */

    //1. get a live element from the body to append children to.
    const ul = document.querySelector("ul");
    console.log("ul ", ul);

    //2. create elements to append to ul

    const li = document.createElement("li");
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figCaption = document.createElement("figcaption");

    //3. add styles, attributes, or values to created elements

    // remove attribute demo
    // const section = document.getElementById("demo");
    // console.log("section ", section);
    // section.removeAttribute("id");
    // console.log("section", section);
    img.setAttribute("src", url);
    img.id = "dog-image";

    li.style.border = "4px solid red";

    figCaption.innerText = dogBreed;

    //4. append the elements to associated parents
    figure.append(img, figCaption);
    li.appendChild(figure);
    ul.appendChild(li);

    /*--------------- Get breed (Hint: Parse from URL) ---------------- */
    // Your code here

    /*------------ Create new dog card with the url above ------------- */
    /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
    // Your code here

    /* Add the new dog card as a child to the ul in the .gallery element */
    // Your code here
  } catch (e) {
    console.log("Couldn't fetch dog :(");
  }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
  /*-------------------- Select the first dog card --------------------- */
  // Your code here
  const firstDog = document.querySelector("li");
  console.log("first dog ", firstDog);

  firstDog.remove();
  /*-------------------- Remove the first dog card --------------------- */
  // Your code here
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
  /*-------------------- Select the last dog card ----------------------- */
  // Your code here
  /*-------------------- Remove the last dog card ----------------------- */
  // Your code here
  const lastDog = document.querySelectorAll("li");
  console.log("last dog ", lastDog);

  lastDog[lastDog.length - 1].remove();
});
