"use strict"

let student={
    name:"Nicolas",
    favoriteFood:"Salad",
    city:"Paris",
}
let value=Object.values(student);
let count=value.reduce((acc,value)=>acc+value.length,0)
console.log(count);