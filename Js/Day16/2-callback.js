function f1(callback){
    callback("india",22,function f3(y){
        console.log("inside f3()");
        console.log("line 4==>",y)
        y();
    });    
}

f1(function f2(country,age,x){
    console.log(country);
    console.log(age);
    
    x(function f4(){
        console.log("inside f4()");
    })
})


// function f1(name){
// console.log(name)
// }

// f1(function f2(age){
//     console.log(age)
// })