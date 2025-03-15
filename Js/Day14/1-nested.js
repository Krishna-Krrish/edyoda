function outerFunction(){
    console.log("outer function")


    innerFunction()

    function innerFunction(){
        console.log("inner function")
    }

    console.log("at line 8...")
}

outerFunction();