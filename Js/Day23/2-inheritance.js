class person {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    parentMethod(){

        console.log("inside parent method")

    }
}

class student extends person{
    constructor(name,age,roll,college,branch){
        super(name,age);  //To call parent constructer
        this.roll=roll;
        this.college=college;
        this.branch=branch;
    }
    childMethod(){

        console.log("inside child method")

    }
}

const s1=new student("krishna",24,205,"LNCT","CSE")

console.log(s1)

s1.parentMethod()
s1.childMethod()


const p1 = new Person("Durga", 23);

p1.parentMethod();
p1.childMethod();