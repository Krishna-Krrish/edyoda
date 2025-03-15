
function removeHeader(){
    let logo = document.getElementById("logo")
    logo.innerHTML="";
}

function add(){
    let input = document.getElementById("todo")

    // console.log(input.value)

    if(input.value && input.value.length>2){
        let li=document.createElement("li")

        li.innerText=input.value;
    
        let list = document.getElementById("list")
    
        list.appendChild(li)
    
        input.value = "";
    }

    else{

        alert("empty things can't be added")
    }

}

function removeAll(){

    let list = document.getElementById("list")

    list.innerHTML=""

}

function removeFirstChild(){
    let list = document.getElementById("list")
    let firstChild=list.firstElementChild;
    list.removeChild(firstChild)
}

function removeLastChild(){
    let list = document.getElementById("list")
    let lastchild=list.lastElementChild;
    list.removeChild(lastchild);
}