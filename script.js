var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// To check length of input
function inputLength() {
    return input.value.length;
}

// To Create a new li and button element
function createListElement() {
    var li = document.createElement("li");
    var button = document.createElement("button");
    li.appendChild(document.createTextNode(input.value));
    button.appendChild(document.createTextNode("X"));
    ul.appendChild(li);
    li.appendChild(button);
    input.value = "";
}

// Check for input greater than 0 and then add li on click 
function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
        }
}

// To add li after Enter key is pressed
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

// To toogle between done and not done class
function toggleDone() {
    if (event.target.matches("li")) {
        event.target.classList.toggle("done");
    }
}

// To add Remove Class
function removeElement() {
    if (event.target.matches("button")) { 
        event.target.parentNode.classList.add("remove");
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleDone);
ul.addEventListener("click", removeElement);

