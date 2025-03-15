function f1(num,x,name){
    console.log("inside f1 function...")
    console.log(num)
    console.log(name)
    x("india");
}

f1(10,function f2(country){
    console.log("inside f2 function...")
    console.log(country)
},
"krishna"
)