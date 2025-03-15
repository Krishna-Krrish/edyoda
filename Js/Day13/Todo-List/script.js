let btn=document.getElementById("add-btn")

btn.addEventListener("click",function(){

    let input=document.getElementById("item")

    if(input.value){
        let l1=document.getElementsByTagName("li");
        console.log(l1)
        
        for(let i=0;i<l1.length;i++){
            if(item.value == l1[i].innerText){
                alert(`${item.value} is already added`);
                return;
            }
        }

        let list=document.getElementById("list")
    
        let li=document.createElement("li")
        li.classList.add("l")
        li.innerText=input.value;
        list.appendChild(li)

        // let update=document.createElement("button")
        // update.innerText="Update";

        // li.appendChild(update)

        // update.addEventListener("click",function(){
        //     input.value="";

        // })
    }

    else{
        alert("empty item cant be added")
    }

})


/////////////////////////////////////////////////////

let clear=document.getElementById("clear");
clear.addEventListener("click",function(){
    let input=document.getElementById("item");
    input.value="";
})

////////////////////////////////////////////////////

let deleteAll = document.getElementById("deleteAll");
deleteAll.addEventListener("click", function () {
  let list = document.getElementById("list");
  list.innerHTML = "";
});


/////////////////////////////////////////////////////////////

let deleteFirst = document.getElementById("deleteFirst");
deleteFirst.addEventListener("click", function () {
  let list = document.getElementById("list");
  let firstChild = list.firstElementChild;
  list.removeChild(firstChild);
});

/////////////////////////////////////////////////////////////

let deleteLast = document.getElementById("deleteLast");
deleteLast.addEventListener("click", function () {
  let list = document.getElementById("list");
  let lastChild = list.lastElementChild;
  list.removeChild(lastChild);
});


////////////////////////////////////////////////////////////



