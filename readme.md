1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: GetElementById is used to select and Css Id where as getElementsByClassName is used to select all give css classes.

QuerySelector selects the first element which matches with given css selector whereas querySelectorAll selects all elements that matches given css selector.

2. How do you create and insert a new element into the DOM?

Answer: You can create elements using document.createElement and insert them using methods like appendChild, append, prepend, before, or after.

// Create a new div
const newDiv = document.createElement("div");
newDiv.textContent = "Hello, I am a new div!";

// Select a parent element
const wrapper = document.getElementById("wrapper");

// Insert the new div into the wrapper
wrapper.appendChild(newDiv);
