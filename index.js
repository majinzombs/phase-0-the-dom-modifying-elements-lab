// Write your code here!

/* Enter the code to remove the node element here */
const main = document.querySelector('main#main').remove();

/* Create your new element here and assign it to newHeader */
const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.textContent = "YOUR-NAME is the champion!";
newHeader.className = "victory";
console.log(newHeader)