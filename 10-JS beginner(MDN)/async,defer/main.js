const myHeading = document.querySelector("h1");
/*myHeading.textContent = "Hello world!";
document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});
let myButton = document.querySelector("button");
function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName); //localStorage is an API which allows us to store data in the browser
  //and retrieve it later. setIttem() creates and stores a data item called "name".
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name"); //localStorage now retrieves the data item called "name" it stored before
  //even if i reload the page, localStorage keeps it
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
//myButton.onclick = () => {
setUserName();
//};
*/
function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
