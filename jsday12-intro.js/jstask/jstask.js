
let y = 5,z = y + "5"
console.log(z)
let x = 5
if (x > 0){
   console.log(x + " is a positive number")
}else if (x < 0){
   console.log(x + " is a negative number")
}else{
   console.log(x + " is neither pos nor neg number")
}
let q = 5
if(q % 2 == 1){
   console.log(q + " is an odd number")
}else if(q % 2 == 0){
   console.log(q + " is an even number")
}else if(q == 0){
   console.log(q + " is neither odd nor even number")
}
let r = 2, e = 3
if(e>r){
   console.log(e + " is" + " greater than " + r)
}else{
   console.log(r + " is" + " greater than " + e)
}
let grade = 10
if(grade == 10){
   console.log("This student's Grade is A")
}else if(grade >= 7 && grade < 10){
   console.log("This student's Grade is B")
}else if(grade >= 5 && grade < 10){
   console.log("This student's Grade is C")
}else if(grade >= 3 && grade < 10){
   console.log("This student's Grade is D")
}else if(grade >= 1 && grade < 10){
   console.log("This student's Grade is E")
}else if(grade = 0 ){
   console.log("This student's Grade is F")
}else if(grade < 0){
   console.log("This student Don't have to study")
}else{
   console.log("not a value")
}
let age
age = window.prompt("what's your age:")
if(age < 12){
   console.log("You have to pay $5")
}else if(age < 18){
   console.log("You have to pay $10")
}else if(age <= 60){
   console.log("You have to pay $20")
}else if(age > 60){
   console.log("You have to pay $15")
}
let year
year = window.prompt("enter year: ")
if(year % 4 == 0, year % 400 == 0 && year % 100 ==0){
   console.log(year + " is a leap year")
}
else {
   console.log(year + " is not a leap year")
}
let price, discount
price = window.prompt("enter price: ")
if(price >= 100){
   discount = price * 20/100
   console.log("total price is " + (price - discount))
}else if(price >= 50 ){
   discount = price * 10/100
   console.log("total price is " + (price - discount))
}else{
   console.log("total price is " + price)
}
let greeting,hour
hour = window.prompt("enter the hour rn:")
if(hour < 12 && hour > 0 ){
   greeting = "good morning"
   console.log(greeting)
}else if(hour < 16){
   greeting = "good afternoon"
   console.log(greeting)
}else if(hour < 19){
   greeting = "good evening"
   console.log(greeting)
}else if(hour <=24){
   greeting = "good night"
   console.log(greeting)
}else{
   console.log("not a value")
}


let w = window.prompt("enter weight:")
let h = window.prompt("enter height:")
let BMI = w /((h/100)*(h/100))


if(BMI >0 && BMI < 18.5){
   console.log("you are Underweight")
}else if(BMI >= 18.5 && BMI < 24.9){
   console.log("you are Normal/Healthy weighted")
}else if(BMI >= 24.9 && BMI < 29.9){
   console.log("you are Overweight")
}else{
   console.log("you are Obese")
}
let secretnumber = 69 , guessnumber
guessnumber = window.prompt("guess a number:")
if(guessnumber == secretnumber){
   console.log("you have guessed the correct number")
}else if(guessnumber - secretnumber >= 0 && guessnumber - secretnumber < 5){
   console.log("you guessed slightly higher")
}else if(secretnumber - guessnumber >= 0 && secretnumber - guessnumber < 5){
   console.log("you guessed slightly lower")
}else if(guessnumber > secretnumber){
   console.log("you guessed higher")
}else if(guessnumber < secretnumber){
   console.log("you guessed lower")
}  