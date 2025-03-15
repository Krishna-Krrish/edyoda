// console.log(document);
// console.log(document.body);
// console.log(document.head)

// document.getElementById();

let firstPara = document.getElementById("p1")

let secondPara = document.getElementById("p2")

console.log(firstPara.innerText);
console.log(secondPara.innerText);

firstPara.innerHTML="<p> krishnaaaa </p>"
// firstPara.innerText="<p> krishnaaaa </p>"


// document.getElementsByClassName()

let headers=document.getElementsByClassName("header")
headers[0].innerText = "Ak";


// document.getElementsByTagName()

let buttons = document.getElementsByTagName("button")

console.log(buttons);
console.log(buttons.length)
console.log(buttons[buttons.length-2])