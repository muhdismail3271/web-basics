const readline = require("readline-sync")
// //1. Create a variable using var, and store your name and print it on the console. 
console.log(`1: \n`)
{
   var nam = "ismail"
   console.log(nam)
}

// /* I didnt do 2,3 beacuse if the error is happening the code wont run*/

// //4.take two numbers and find the sum of them
console.log(`4: \n`)
{
let x=5, y=6
console.log(x+y)
 }
// //5. Create two variables, firstName and lastName. Join them together (with a space in 
// //between) to make a new variable called fullName. Print the full name in the console.
console.log(`5: \n`)
{
let firstname = "muahmmed", lastname = "ismail"
let fullName = firstname + " " + lastname
console.log(fullName)
}

// // 6. Declare two number variables, num1 and num2. Perform and print the following 
// // operations: 
// // a. Addition 
// // b. Subtraction 
// // c. Multiplication 
// // d. Division 
// // e. Remainder (modulus)
console.log(`6: \n`)
{
let num1 = 10,num2 = 9
let add = num1 + num2 + "\n"
let subtract = num1 - num2 + "\n"
let multiply = num1 * num2 + "\n"
let divide = num1 / num2 + "\n"
let remainder = num1 % num2 + "\n"
console.log(add,subtract,multiply,divide,remainder)
}

// // 7. Write a program where points = 100. 
// // a. Add 50 bonus points using an assignment operator. 
// // b. Then subtract 30 penalty points. 
// // c. Print the final score.
console.log(`7: \n`)
{
let points = 100
points += 50
let final_score = points - 30
console.log("the final score is " + final_score)
}

// // 8. Write a program with two numbers a = 10 and b = "10". Compare them using == and 
// // ===. Print the results and observe the difference.
console.log(`8: \n`)
{
let a = 10, b = "10"
let c = a === b + "\n"
let d = a == b + "\n"
console.log(c,d)
}

// // 9. What is the results of the following inputs: 
// // a. 10 > 5 
// // b. "bridgeon" === "Bridgeon" 
// // c. (5 > 3) && (2 > 1) 
// // d. (10 < 5) || (3 === 3) 
console.log(`9: \n`)
let q = 5, w = 10,str1 = 'bridgeon',r = 3,u = 2,i = 1,o = 3,str2 = 'Bridgeon'
let fi = (q > r) && (u > i) 
let di = (w < q) || (r === o)
let qi = w > q
let si = str1 === str2
console.log(qi,si,fi,di)

// // 10. Find the length of a given string. 
// // a. str = “bridgeon” ➞ 8 
console.log(`10: \n`)
console.log(str1.length)

// // 11. Write a JavaScript program to print the first and last character of a string. 
// // a. str = “bridgeon” ➞ “b” and “n” 
console.log(`11: \n`)
console.log(str1.charAt(0) + ",",str1.at(-1))

// // 12. Find the sum of first and last elements of an array. 
// // a. arr = [5, 10, 15, 20] ➞ 25 
console.log(`12: \n`)
{
   let arr = [5,10,15,20]
   let sum = arr[0] + arr[arr.length-1]
   console.log(sum)
}

// // 13. Write a JavaScript program to add a new element to the end of an array. 
// // a. arr = [1, 2, 3, 4] ➞ [1, 2, 3, 4, 5] 
console.log(`13: \n`)
{
let newarr = [1,2,3,4]
newarr.push(5)
console.log(newarr)
}

// // 14. Create an object with properties name and age. 
// // a. Print the object 
// // b. Access and print the name property 
// // c. Update the value of age 
// // d. Add a new property named city, and print the object
console.log(`14: \n`)
{
const obj = {name:"Nirupama", age:18}
console.log(obj , obj.name)
obj["age"] = 19
obj.city = "thiruvananthapuram"
console.log(obj)
}

// // 15. You are given the following JavaScript object: 
// // let student = { 
// // name: "Hudaif", 
// // courses: ["HTML", "CSS", "JavaScript"]  
// // }; 
// // a. Print the last course the student has studied. 
// // b. Add a new course "React" to the courses array. 
// // c. Print the total number of courses the student has. 
console.log(`15: \n`)
{
let student = { 
   name: "Hudaifa", 
   courses: ["HTML", "CSS", "JavaScript"]  
}; 
console.log(student.courses[student.courses.length -1])
console.log(student.courses.push("React"))
console.log("total number of courses the student has are " + student.courses.length + " which are the following: \n" + student.courses)
}

// // 16.Check which number is greater between two numbers. 
// // a. a = 10, b = 20 ➞ 20 is greater 
console.log(`16: \n`)
{
let p = 10
let w = 9
if(p > w){
   console.log(`${p} is the greatest number`)
}else if(p < w){
   console.log(`${w} is the greatest number`)
}else{
   console.log(`both are equal`)
}
}
// 17. Check whether a number is even or odd. 
// a. num = 7 ➞ Odd number 
// b. num = 10 ➞ Even number
console.log(`17: \n`)
{
let num = 10
if(num % 2 == 0){
   console.log(`${num} is an even number`)
}else{
   console.log(`${num} is an odd number`)
}
}



// // 18.Check if a person is eligible to vote (age ≥ 18). 
// // a. age = 18 ➞ Eligible to vote 
// // b. age = 15 ➞ Not eligible to vote 
console.log(`18: \n`)
{
let age = Number(readline.question(`Enter your Age <0-120> : `))
if(age >=18){
   console.log(`this person is eligible to vote`)
}else if(age < 18 && age >= 0){
   console.log(`this person is not eligible to vote`)
}else{
   console.log(`invalid input`)
}
}
// // 19.Check whether a student passed (pass mark ≥ 40). 
// // a. marks = 38 ➞ Failed 
console.log(`19: \n`)
{
   let marks = readline.question("enter the marks: ")
   if(marks == 100){
      console.log("this is an outstanding student")
   }else if(marks >= 80 && marks < 100){
      console.log("student is above average")
   }else if(marks >=60 && marks < 100){
      console.log("student is average")
   }else if(marks >=40 && marks < 100){
      console.log("student is below average")
   }else if(marks >=0 && marks < 40){
      console.log("this student is a failure")
   }else{
      console.log("invalid input")
   }
}

// // 20. Identify whether a number is positive, negative, or zero. 
// // a. num = 1 ➞ Positive 
// // b. num = -7 ➞ Negative 
// // c. num = 0 ➞ Zero 
console.log(`20: \n`)
{
   let num = 1
   if(num > 0){
      console.log(`${num} is a positive number`)
   }else if(num < 0){
      console.log(`${num} is a negative number`)
   }else{
      console.log(`${num} is zero`)
   }
}

// 21.Find the largest number among three numbers. 
// a. a = 10, b = 25, c = 15 ➞ 25 is the largest 
console.log(`21: \n`)
{
   let a = Number(readline.question("enter the number: "))
   let b = Number(readline.question("enter the number: "))
   let c = Number(readline.question("enter the number: "))
   if(c > a && c > b){
      console.log(`${c} is greater than ${a} and ${b}`)
   }else if(b > a && b > c){
      console.log(`${b} is greater than ${a} and ${c}`)
   }else if(a > b && a > c){
      console.log(`${a} is greater than ${b} and ${c}`)
   }else if(a === b && a > c || a === c && a > b || b === c && b > a){
      console.log(`Two numbers are equal and that is the greatest`)
      switch(true){
         case a === b && a > c :
            console.log(`${a} is the greater number`)
            break;
         case a === c && a > b :
            console.log(`${a} is the greater number`)
            break;
         case b === c && b > a :
            console.log(`${b} is the greater number`)
            break;
         default :
            break;
         }
   }else{
      console.log(`three values are equal`)
   }
}   
// // 22.Write a JavaScript program to print true if a number lies between 10 and 50 
// // (inclusive).Otherwise, print false. 
// // a. num = 30 ➞ true 
// // b. num = 5 ➞ false 
console.log(`22: \n`)
{
   let num = readline.question("enter the number: ")
   if(num < 50 && num > 10){
      console.log(`true`)
   }else{
      console.log(`false`)
   }
}

// // 23.Check whether a number is divisible by 5. 
// // a. num = 25 ➞ Divisible by 5 
// // b. num = 12 ➞ Not divisible by 5
console.log(`23: \n`)
{
   let num = readline.question("enter the number: ")
   if(num % 5 == 0){
      console.log(`${num} is divisible by 5`)
   }else{
      console.log(`${num} is not divisible by 5`)
   }
}

// // 24.Write a JavaScript program to print true if two strings are equal. Otherwise, print false. 
// // a. str1 = "bridgeon", str2 = "bridgeon" ➞ true 
// // b. str1 = "JS", str2 = "js" ➞ false 
console.log(`24: \n`)
{
   let st1 = "eon",st2 = "eon"
   if(st1 === st2){
      console.log(`true`)
   }else{
      console.log(`false`)
   }
}

// // 25. Write a JavaScript program to print true if the first and last elements of an array are 
// // equal. Otherwise, print false. 
// // a. arr = [10, 20, 30, 10] ➞ true 
// // b. arr = [“a”, ”b”, “c”, ”d”] ➞ false 
console.log(`25: \n`)
{
   let arr = ['10',20,30,10]
   if(arr[0] === arr[arr.length - 1]){
      console.log(`true`)
   }else{
      console.log(`false`)
   }
}

// // 26.Assign grade based on mark: 
// // ● ≥ 90 → A 
// // ● ≥ 75 → B 
// // ● ≥ 50 → C 
// // ● < 50 → Fail 
// // a. mark = 82 ➞ Grade B 
// // b. mark = 50 ➞ Grade C 
// // c. mark = 30 ➞ Fail 
console.log(`26: \n`)
{
   const marks = readline.question("enter the mark: ")
   if(marks >=90 && marks <101){
      console.log("A grade")
   }else if(marks >=75 && marks < 100){
      console.log("B grade")
   }else if(marks >=50 && marks < 100){
      console.log("C grade")
   }else if(marks >=0 && marks < 50){
      console.log("F grade failed")
   }else{
      console.log("invalid input")
   }
}

// // 27.Write a JavaScript program to classify a person’s age into one of the following 
// // categories: 
// // ● Child → age less than 13 
// // ● Teen → age between 13 and 19 
// // ● Adult → age between 20 and 59 
// // ● Senior → age 60 or above 
// // Print the appropriate category based on the given age.
console.log(`27: \n`)
{
   const age = readline.question("enter your age: ")
   if(age < 13 && age >= 0){
      console.log(`you are a Child`)
   }else if(age <=19 && age >= 13){
      console.log(`you are a Teen`)
   }else if(age >=20 && age <= 59){
      console.log(`you are an Adult`)
   }else{
      console.log(`you are in senior category`)
   }
}

// // 28.Write a program to calculate the electricity bill based on units consumed: 
// // ● Up to 100 units → ₹2 per unit 
// // ● 101–200 units → ₹3 per unit 
// // ● Above 200 units → ₹5 per unit 
// // a. units = 150 ➞ Total bill: ₹450 
// // b. units = 100 ➞ Total bill: ₹200 
console.log(`28: \n`)
{
   let units = readline.question("enter the untis: ")
   if(units <= 100 && units > 0){
      peru = 2
      total_bill = units * peru
      console.log(`total electricity bill is ` + total_bill)
   }else if(units > 100 && units <= 200){
      peru = 3
      total_bill = units * peru
      console.log(`total electricity bill is ` + total_bill)
   }else{
      peru = 5
      total_bill = units * peru
      console.log(`total electricity bill is ` + total_bill)
   }
}

// // 29.Perform operation based on operator (+, -, *, /) using if–else. 
// // a. a = 10, b = 5, operator = "+" ➞ 15 
// // b. a = 5, b = 5, operator = "-" ➞ 0 
// // c. a = 24, b = 4, operator = "/" ➞ 6 
console.log(`29: \n`)
{
   let a = Number(readline.question("enter the 1st number: "))
   let b = Number(readline.question("enter the 2nd number: "))

   let oper = readline.question("enter the operator <1st `operator` 2nd>: ")

   let result = 0

   if(oper == "+"){
      result = a + b
      console.log(`total ${result}`)
   }else if(oper == "-"){
      result = a - b
      console.log(`total ${result}`)
   }else if(oper == "/"){
      result = a / b
      console.log(`total ${result}`)
   }else if(oper == "*"){
      result = a * b
      console.log(`total ${result}`)
   }
   else{
      console.log(`wrong output`)
   }
}

// 30. Write a program to check whether a given year is a leap year or not. 
// ● Divisible by 4 
// ● Not divisible by 100 unless divisible by 400 
// a. year = 2024 ➞ Leap year 
// b. year = 2026 ➞ Not a leap year
console.log(`30: \n`)
{
   let year = Number(readline.question(`enter year: `))

   if(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0 )){
      console.log(`${year} is a leap year`)
   }else{
      console.log(`${year} is not a leap year`)
   }
}

// 31.Write a JavaScript program that takes a number from 1 to 7 and prints the corresponding 
// day of the week using switch case. 
// ● 1 → Monday 
// ● 2 → Tuesday 
// ● 3 → Wednesday 
// ● 4 → Thursday 
// ● 5 → Friday 
// ● 6 → Saturday 
// ● 7 → Sunday 
// If the number is not between 1 and 7, print "Invalid number". 
console.log(`31: \n`)
{
   let day = Number(readline.question("Enter day number <1-7>:"))
   switch(day){
      case 1:
         console.log(`Monday`)
         break;
      case 2:
         console.log(`Tuesday`)
         break;
      case 3:
         console.log(`Wednesday`)
         break;
      case 4:
         console.log(`Thursday`)
         break;
      case 5:
         console.log(`Friday`)
         break;
      case 6:
         console.log(`Saturday`)
         break;
      case 7:
         console.log(`Sunday`)
         break;
      default:
         console.log('Invalid number')
   }
}

// 32. Write a JavaScript program that prints a description based on a given grade using a 
// switch case. 
// ● A → Excellent 
// ● B → Very Good 
// ● C → Good 
// ● D → Average 
// ● E → Fail 
// For any other grade, print "Invalid grade". 
console.log(`32: \n`)
{
   let grade = readline.question(`enter the grade <A-F> : `)
   switch(grade){
      case `A`:
         console.log(`Excellent`)
         break;
      case `B`:
         console.log(`Very Good`)
         break;
      case `C`:
         console.log(`Good`)
         break;
      case `D`:
         console.log(`Average`)
         break;
      case `E`:
         console.log(`Below Average`)
         break;
      case `F`:
         console.log(`Fail`)
         break;
      default:
         console.log(`Invalid Grade`)
         break;
   }
}

// 33.Write a JavaScript program that prints the meaning of a traffic signal color using a switch 
// case. 
// ● Red → Stop 
// ● Yellow → Get Ready 
// ● Green → Go 
console.log(`33: \n`)
{
   let sig_color = readline.question(`enter signal color <red,green,blue> : `)
   switch(sig_color){
      case `red`:
         console.log(`Stop`)
         break;
      case `green`:
         console.log(`Go`)
         break;
      case `yellow`:
         console.log(`Get Ready`)
         break;
      default :
         console.log(`Invalid Color`)
         break;
   }
}

// 34.Write a JavaScript program to check whether a given number is positive, negative, or 
// zero using a switch case.
console.log(`34: \n`)
{
   let num = Number(readline.question (`enter a number <neg,pos,zero> : `))
   switch(true){
      case num > 0:
         console.log(`${num} is positive`)
         break;
      case num < 0:
         console.log(`${num} is negative`)
         break;
      case num == 0:
         console.log(`${num} is zero`)
         break;
      default:
      console.log(`Invalid number`)
      break;
   }
}

// 35. Write a JavaScript program to assign a grade based on a student’s marks using a switch 
// case. 
// ● Marks 90 or above → Grade A 
// ● Marks 75 or above → Grade B 
// ● Marks 50 or above → Grade C 
// ● Marks 35 or above → Grade D 
// ● Marks below 35 → Fail
console.log(`35: \n`)
{
   let marks = Number(readline.question(`Enter your Mark <0-100> : `))
   switch(true){
      case marks >= 90 && marks <= 100 :
         console.log(`You have Grade A`)
         break;
      case marks >= 75 :
         console.log(`You have Grade B`)
         break;
      case marks >= 60 :
         console.log(`You have Grade C`)
         break;
      case marks >= 50 :
         console.log(`You have Grade D`)
         break;
      case marks >= 35 :
         console.log(`You have Grade E`)
         break;
      case marks < 35 && marks >= 0:
         console.log(`You have Grade F \nYou Are A Failure!!!`)
         break;
      default :
      console.log(`Invalid Marks`)
      break;
   }
}

// console.log()
// {
// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let arr3 = [arr1,arr2]
// console.log(arr3[0] + "\n" + arr3[1])}