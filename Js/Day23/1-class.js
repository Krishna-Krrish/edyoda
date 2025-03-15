class product{
    constructor(name,price,desc,company){
        this.name=name;
        this.price=price;
        this.desc=desc;
        this.company=company;
    }

    printProductName(){   //method
        console.log(this.name)
    }

    printProductInfo(){
        console.log("Product Name => ", this.name);
        console.log("Product Price => ", this.price);
        console.log("Product desc => ", this.desc);
        console.log("Product Company => ", this.company);
    }

    printRandomMessage(greet){
        console.log("happy",greet)
    }
}


const obj1=new product("iphone",80000,"apple product","apple")
const obj2=new product("galaxy",50000,"smasung product","samsung")
const obj3=new product()

console.log(obj1)
console.log(obj2)

obj1.printProductName()
obj2.printProductInfo()

obj3.printRandomMessage("diwali")

