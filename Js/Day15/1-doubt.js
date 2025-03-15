var a=10;

function f1(){
    console.log("inside f1()");

    function f2(){
        console.log("inside f2()")
    }

    f2();

    // return f2;
}

f1();

// let x= f1();

// x();