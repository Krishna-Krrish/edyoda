let info={
    name:"krishna",
    age:23,
    address:"Tamilnadu",
    salary:1000
}

console.log(info)

Object.seal(info)

info.address="india"

info.country="USA"

info.age=30
console.log(info)