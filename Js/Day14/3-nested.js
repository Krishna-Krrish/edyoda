function outerFunction(){
    let a=10;
    // console.log(a)

    function innerFunction(){
        console.log(a);
    }

    return innerFunction;
}

let x=outerFunction();

// console.log(x)

x();