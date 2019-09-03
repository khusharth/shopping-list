var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
// var li = document.querySelector("li");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    var button = document.createElement("button");
    li.appendChild(document.createTextNode(input.value));
    button.appendChild(document.createTextNode("X"));
    ul.appendChild(li);
    li.appendChild(button);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
        }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click",function(e) {
   if (event.target.matches("li")) 
    event.target.classList.toggle("done");
  });

ul.addEventListener("click",function(e) {
    if (event.target.matches("button")) 
        event.target.parentNode.classList.toggle("remove");
    });
  
