const mas = [true,"string",89]
let ins = {name:"object",id:22,age:mas}
console.log(mas)
let x = NaN
console.log(x.constructor)
console.log("array: " + Array.isArray(mas))
console.log(typeof ins)
y = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]) 
console.log(typeof y)
let time = new Date()
console.log(typeof time)
const fruits = {man:"a",women:"b",men:"c"}
let tost = fruits.toString()
console.log(typeof tost)
const fruit = ["iogbg",56]
let test1 = fruit.toString()
console.log( test1)
let z = "" + 4
console.log(typeof z)
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
console.log(cars.join(" "))
let tox = new Date()
let tos = tox.toDateString()
console.log(tox)