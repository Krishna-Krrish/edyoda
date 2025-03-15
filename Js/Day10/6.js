console.log(myname); //undefined

var myname="krishna";

console.log(myname); //krishna

function f1(){
    console.log(myname); //krishna
    address="india";
    console.log(address); //india
}

f1();

console.log(address); //india