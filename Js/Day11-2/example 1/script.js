// let header = document.getElementById("header");

// console.log(header);
// console.log(header.innerText);
// header.innerText = " <p> New Logo </p>";
// header.innerHTML = "<p> New Logo </p>";
// header.textContent = "New Logo using Text Content";

// header.style.color = "Blue";
// header.style.fontSize = "10px";

function changeRed(){
    let logo = document.getElementById("header")
    logo.style.color="red"
}

function changeBlue(){
    let logo = document.getElementById("header")
    logo.style.color="blue"
}

let para=document.getElementsByClassName("para")

function hide(){
    let para=document.getElementsByClassName("para")
    para[0].style.visibility="hidden"
    para[1].style.visibility="hidden"
}

function show(){
    let para=document.getElementsByClassName("para")
    para[0].style.visibility="visible"
    para[1].style.visibility="visible"
}