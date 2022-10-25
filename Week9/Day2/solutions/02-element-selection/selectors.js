const select = () => {
  /* Write queries for each of the following */

  /* Section 1 */
  // 1. Get all seeded fruit elements
  // Your code here
  const seededFruit = document.querySelectorAll("li.seed");
  seededFruit.forEach((fruit) => console.log("fruit ", fruit));

  // 2. Get all seedless fruit elements
  // Your code here
  const seedLess = document.getElementsByClassName("seedless");
  console.log("seedless ", seedLess);
  // 3. Get first seedless fruit element

  // Your code here
  console.log("first seedless fruit ", seedLess[0]);
  /* Section 2 */
  // 4. Get inner span with text "you"
  // Your code here
  const innerSpan = document.body.querySelector("span");
  console.log("inner span ", innerSpan);
  // 5. Get all children of element "wrapper"
  // Your code here

  const wrapperChildren = document.getElementById("wrapper");
  // child nodes
  console.log("wrapper children", wrapperChildren.childNodes);

  // children elements
  // console.log("wrapper children", wrapperChildren.children);

  // 6. Get all odd number list items in the list
  // Your code here
  console.log("odd li ", document.getElementsByClassName("odd"));
  // 7. Get all even number list items in the list
  // Your code here
  const evenLi = document.querySelectorAll("ol > li:not(.odd)");
  console.log("even list item", evenLi);

  // using psuedo selector for descendant val
  //   const evenLi = document.querySelectorAll("ol :not(.odd)");
  //   console.log("even list item", evenLi);
  /* Section 3 */
  // 8. Get all tech companies without a class name
  // Your code here
  const techList = document.querySelectorAll("a:not([class])");
  console.log("tech list without class ", techList);
  // 9. Get "Amazon" list element
  // Your code here
  console.log("amazon element ", document.getElementsByClassName("shopping"));
  // 10. Get all unicorn list elements (not the image element)
  // Your code here
  const unicornLi = document.querySelector("#three > ul").children;
  console.log("unicorn li", unicornLi);

  console.log(
    "unicorn list elements image",
    document.querySelectorAll(".unicorn:not(src)")
  );
};

window.onload = select;
