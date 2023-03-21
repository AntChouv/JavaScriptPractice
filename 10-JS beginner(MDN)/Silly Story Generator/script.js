const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}
//const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//console.log(randomValueFromArray(array));

let array;

//READ FROM JSON
// create a new instance of the XMLHttpRequest object
const xhr = new XMLHttpRequest();
//specify the file path
const file = "data.json";
//use the XMLHttpRequest object to get the file
xhr.open("GET", file, true);
//set the response type to json
xhr.responseType = "json";
//define a callback function to handle the file content
xhr.onload = function () {
  if (xhr.readyState === xhr.DONE && xhr.status === 200) {
    //
    //This line of code checks whether the XMLHttpRequest (XHR) object has completed its request and received a response from the server,
    //and whether the server has returned a successful status code (HTTP status code 200 OK) indicating that the request was successful.

    //The readyState property of the XHR object represents the current state of the request, and has the following possible values:

    /*0 (UNSENT): The XHR object has been created, but open() has not yet been called.
    1 (OPENED): open() has been called, but send() has not yet been called.
    2 (HEADERS_RECEIVED): send() has been called, and headers and status are available.
    3 (LOADING): The response data is being downloaded, and responseText contains partial data.
    4 (DONE): The entire request has completed and the response is available.
    The status property of the XHR object represents the HTTP status code returned by the server in response to the request. HTTP status codes are 
    three-digit numbers that indicate the outcome of the request, such as success, redirection, client errors, and server errors.

    Therefore, the condition xhr.readyState === xhr.DONE && xhr.status === 200 checks whether the request has completed and the status code is 200, 
    which indicates a successful response from the server. If this condition is true, it means that the response from the server is available and 
    the request was successful, so any data that was received can be processed or displayed.
    */
    const jsonData = xhr.response;
    console.log(jsonData);
    localStorage.setItem("jsonData", JSON.stringify(jsonData)); //In the browser's storage: If the data needs to be persisted across page reloads or if
    //it is too large to be stored in memory, you can store it in the browser's storage. There are two types of storage in the browser: localStorage and
    //sessionStorage. localStorage stores data permanently until it is cleared by the user or the application, while sessionStorage stores data for the
    //duration of the browser session. Here's an example of using localStorage:
  }
};
//Note that the send() method is an asynchronous method, which means that it does not block the execution of the rest of the code while waiting for
//the response from the server. Instead, the response is handled by the onload event handler when it is received. Therefore, any code that depends
//on the response from the server should be placed inside the onload event handler, or in a separate function that is called from the onload event handler.
const arr1 = xhr.send();
console.log(arr1);
const jsonData = JSON.parse(localStorage.getItem("jsonData"));
console.log(jsonData);

randomize.addEventListener("click", result);
function changeUnits(weight) {
  if (document.getElementById("uk").checked) {
    weight = Math.round(300 * 0.4543);
    console.log(weight);
  }
  return weight;
}
function result() {
  let nameR;
  let weight = 300;
  if (customName.value !== "") {
    nameR = customName.value;
  }
  document.getElementById("uk").checked
    ? (weight = changeUnits(weight)) //;
    : console.log(weight);
  const str = `It was 94 fahrenheit outside, so ${nameR} went for a walk. When they got to ${randomValueFromArray(
    jsonData.randomObj
  )}, 
    they stared in horror for a few moments, then ${randomValueFromArray(
      jsonData.randomDeeds
    )}. Bob saw the whole thing, but was not surprised — ${randomValueFromArray(
    jsonData.randomNames
  )} weighs ${weight} , 
    and it was a hot day.`;
  console.log(str);
  story.textContent;
  story.textContent = str;
  story.style.visibility = "visible";
}
