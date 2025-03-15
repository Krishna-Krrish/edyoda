function outerFunction(){

    let a=10;

    let name="krishna"

    function innerFunction(){
        console.log(a);
        console.log(name);
    }

    return innerFunction;
}

let x=outerFunction();
x();