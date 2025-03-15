let b="krishna";

function outerFunction(){
    console.log("outer function")

    var a="krishna"



    innerFunction();

    function innerFunction(){
        console.log("inner function")

        function f1(){
            console.log(b)
        }

        f1();
    }

    console.log(a)
}

outerFunction();