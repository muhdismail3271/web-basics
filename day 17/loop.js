const readline = require(`readline-sync`)

// 1. Print numbers from 1 to 5
// Instructions: Write a program that uses a for loop to print the numbers 1, 2, 3, 4, and 5 on
// separate lines.
// Input: None
// Output:
// 1
// 2
// 3
// 4
// 5

console.log("1: for loops")
{
   for(let i=1 ; i<=5 ; i++){
      console.log(i)
   }
}

// 2. Print your name 3 times
// Instructions: Write a program that uses a for loop to print your name three times on separate
// lines.
// Input: None (your name is "Alex" for this example)
// Output:
// alex
// alex
// alex
// alex

console.log("2: for loops")
{
   
   for(let i=1 ; i<=3 ; i++){
      console.log("alex")
   }
}

// 3.Print each color in a list
// Instructions: Create a list of colors ["Red", "Blue", "Green"]. Use a for loop to print each color on a
// separate line.
// Input: ["Red", "Blue", "Green"]
// Output:

console.log("3: for loops")
{
   arr = [
         "Red"
         ,`Green`
         ,`Blue`]
   for(let i = 0; i< arr.length ;i++){
      console.log(arr[i])
   }
}

// 4. Add up five numbers
// Instructions: Use a for loop to add the numbers 1, 2, 3, 4, and 5 together, then print the total.
// Input: None
// Output: 15 (which is 1+2+3+4+5)
// Note: Start with a variable called sum that equals 0, then add each number to it in the loop.

console.log("4: for loops")
{
   let sum = 0
   for(let i = 1; i < 6; i++){
      sum = sum+i
      
   }
   console.log(sum)
} 

// 5.Print every other number
// Instructions: Use a for loop to print only the even numbers from 2 to 10.
// Input: None
// Output: 
// 2 4 6 8 10
// Note: You can count by 2s to get every other number.

console.log("5: for loops")
{
   num = Number(readline.question(`Enter Number : `))
   for(let i = 0; i<= num ; i += 2){
      console.log(i)
   }
}

// 1. Count from 1 to 5
// Instructions: Use a while loop to print the numbers 1 through 5.
// Input: None
// Output: 
// 1 2 3 4 5
// Note: Start with a counter variable set to 1, and stop when it's greater than 5

console.log("1: while loops")
{
   let num = 1
   while(num <= 5){
      console.log(num)
      num++;
   }
}

// 2. Count backwards from 5 to 1
// Instructions: Use a while loop to print the numbers 5, 4, 3, 2, and 1 in that order.
// Input: None
// Output: 
// 5 4 3 2 1
// Note: Start with a counter variable set to 5, and stop when it reaches 0.

console.log("2: while loops")
{
   let num = 5
   while(num > 0){
      console.log(num)
      num--;
   }
}

// 3. Print "Hello" 3 times
// Instructions: Use a while loop to print the word "Hello" exactly 3 times.
// Input: None
// Output:

console.log("3: while loops")
{
   let num = 0
   while(num < 3){
      console.log("Hello")
      num++;
   }
}

// 4. Add numbers from 1 to 5
// Instructions: Use a while loop to calculate the sum of numbers from 1 to 5.
// Input: None
// Output: 
// 15 (which is 1+2+3+4+5)
// Note: Create two variables - one for the running total (starting at 0) and one counter (starting at
// 1).

console.log("4: while loops")
{
   sum = 0
   num = 1
   while(num < 6){
      sum = sum + num
      num++;
   }
   console.log(sum)
}

// 5. Print numbers in a list
// Instructions: Create a list of numbers [10, 20, 30]. Use a while loop with a counter to print each
// number.
// Input: [10, 20, 30]
// Output:
// Note: Your counter should start at 0 and increase by 1 each time through the loop.

console.log("5: while loops")
{
   list = [10,20,30]
   num = 0
   while(num < list.length){
      console.log(list[num])
      num++;
   }
}

// 1.  Print numbers from 1 to 5
// Instructions: Use a do-while loop to print the numbers 1 through 5.
// Input: None
// Output: 1 2 3 4 5
// Note: A do-while loop always runs at least once before checking the condition.

console.log("1: do-while loops")
{
   let num = 1
   do{
      console.log(num)
      num++;
   }while(num < 6)
}

// 2. Print "Welcome" 3 times
// Instructions: Use a do-while loop to print the word "Welcome" exactly 3 times.
// Input: None
// Output:
// Note: Use a counter that starts at 0 and stops when it reaches 3.

console.log("2: do-while loops")
{
   let num = 0
   do{
      console.log(`welcome`)
      num++;
   }while(num < 3)
}

// 3. Count backwards from 5 to 1
// Instructions: Use a do-while loop to print the numbers 5, 4, 3, 2, and 1.
// Input: None
// Output: 5 4 3 2 1
// Note: Start with a counter variable set to 5, and stop when it reaches 0.

console.log("3: do-while loops")
{
   let num = 5
   do{
      console.log(num)
      num--;
   }while(num > 0)
}

// 4. Add numbers from 1 to 5
// Instructions: Use a do-while loop to calculate the sum of numbers from 1 to 5.
// Input: None
// Output: 15 (which is 1+2+3+4+5)
// Note: Create two variables - one for the sum (starting at 0) and one counter (starting at 1).

console.log("4: do-while loops")
{
   let num = 1
   sum = 0
   do{
      sum = sum + num
      num++;
   }while(num < 6);
   console.log(sum)
}

// 5. Print each item in a shopping list
// Instructions: Create a shopping list ["Apples", "Milk", "Bread"]. Use a do-while loop to print each
// item.
// Input: ["Apples", "Milk", "Bread"]
// Output:
// Note: You'll need a counter to keep track of which item you're on.

console.log("5: do-while loops")
{
   let arr = [`Apples`,`Milk`,`Bread`]
   let num = 0
   do{
      console.log(arr[num])
      num++;
   }while(num < arr.length)
}

// 1. Print a simple countdown
// Instructions: Write a for loop that counts down from 10 to 1, then prints "Blastoff!"
// Input: None
// Output:
// Note: The loop should count backwards from 10 to 1.

console.log("1: for loop : eq")
{
   for(let num = 10; num > -1; num--){
      if(num == 0){
         console.log(`Bomboclat !!`)
      }else{
         console.log(num)
      }
   }
}

// 2. Print the multiplication table for 5
// Instructions: Use a for loop to print the multiplication table for 5, from 1x5 to 10x5.
// Input: None
// Output:
// Note: The loop counter represents the first number in each multiplication.

console.log("2: for loop : eq")
{
   let mul = 5
   for(num = 1; num <= 10; num++){
      let mult = mul * num
      console.log(`${num} x ${mul} = ${mult}`)
   }
}

// 3. Find the total cost of items
// Instructions: You have a list of prices [2.50, 3.00, 1.75, 4.25]. Use a for loop to calculate the total
// cost.
// Input: [2.50, 3.00, 1.75, 4.25]
// Output: Total cost: $11.50
// Note: Start with a total of 0, then add each price to it.

console.log("3: for loop : eq")
{
   let prices = [2.80,3.20,1.00,4.55]
   let total_price = 0
   for(num = 0; num < prices.length; num++){
      total_price = total_price + prices[num]
   }
   console.log(`Total price is : ${total_price}`)
}

// 4. Print a rectangle of stars
// Instructions: Use nested for loops to print a rectangle of stars that is 3 stars high and 5 stars wide.
// Input: None
// Output:
// Note: You'll need one loop for rows and one loop for columns.

console.log("4: for loop : eq")
{
   let num3
   for(let num1 = 1;num1 < 4; num1++){
      num3 = ``
      for(let num = 1; num < 6; num++){
         num3 += `* `
      }
      console.log(num3)
   }
}

// 5. Count the number of vowels in a word
// Instructions: Use a for loop to count how many vowels (a, e, i, o, u) are in the word "beautiful".
// Input: "beautiful"
// Output: Number of vowels: 5
// Note: Check each letter to see if it's a vowel, and keep a running count.

console.log("5: for loop : eq")
{
   let str = `beautiful`
   let vowels = `aeiou`
   let vownum = 0
   for(let i = 0; i < str.length; i++){
      for(let j = 0; j < vowels.length; j++){
         if(str[i] === vowels[j]){
            vownum += 1
         }
      }
   }
   console.log(`Number of Vowels are : ${vownum}`)
}

// 1. Validate a number is between 1 and 10
// Instructions: Write a while loop that asks the user to enter a number between 1 and 10. Keep
// asking until they enter a valid number.
// Input: User enters 15, then 0, then 7
// Enter a number between 1 and 10: 15
// Invalid! Try again.
// Enter a number between 1 and 10: 0
// Invalid! Try again.
// Enter a number between 1 and 10: 7
// Valid number: 7
// Note: The loop continues until a valid number is entered.

console.log("1: while loop : eq")
{
   let Input = Number(readline.question(`Enter the number B/W <1-10> : `))
   while(Input > 10 || Input < 1){
      console.log(`Invalid!! Try Again....`)
      Input = Number(readline.question(`Enter the number B/W <1-10> : `))
   }
   console.log(`Valid number : ${Input}`)
}

// 2. Print every third number
// Instructions: Use a while loop to print every third number starting from 3 up to 30.
// Input: None
// Output: 
// 3 6 9 12 15 18 21 24 27 30
// Note: Start with 3 and add 3 each time through the loop.

console.log("2: while loop : eq")
{
   let num = 0
   while(num <= 27){
      num += 3
      console.log(num)
   }
}

// 3. Fill an empty list with numbers
// Instructions: Start with an empty list. Use a while loop to fill it with the numbers 1 through 5, then
// print the list.
// Input: Empty list []
// Output: 
// [1, 2, 3, 4, 5]
// Note: Add one number to the list each time through the loop.

console.log("4: while loop : eq")
{
   let list = []
   let i = 0
   while(i < 5){
      i++;
      list.push(i)
      
   }
   console.log(list)
}

// 4. Print a countdown timer
// Instructions: Write a while loop that simulates a countdown timer from 10 seconds, printing one
// number per second.
// Input: None
// Output:
// 10... (wait 1 second)
// 9... (wait 1 second)
// 8... (wait 1 second
// ...
// 1... (wait 1 second)
// Time's up!
// Note: You may need to use a delay function to wait between numbers.

console.log("4: while loop : eq")
{
   let timer = Number(readline.question(`enter the timer <0-20>: `))
   let num = 0
   while(num < timer){
      console.log(`${timer} ... (wait one second)`)
      timer--;
   }
   console.log(`Time's Up!!`)
}

// 5. Double a number until it exceeds 100
// Instructions: Start with the number 2. Use a while loop to keep doubling it until it exceeds 100,
// printing each value.
// Input: None
// Output:
// Note: The loop stops after 128 because it's greater than 100.

console.log("5: while loop : eq")
{
   let sum = 1
   while(sum < 100){
      sum *= 2;
      console.log(sum)
   }
}

// 1. Create a simple menu
// Instructions: Create a do-while loop that displays a menu with 3 options and asks the user to
// select one. Keep showing the menu until they select option 3 (Exit).
// Input: User selects option 1, then 2, then 3
// Output:
// Note: The loop continues until option 3 is selected.

console.log("1: do-while loop : eq")
{
   let Input
   do{
      console.log(`Menu: \n 1. Say Hello \n 2. Tell a Joke \n 3. Exit`)
      Input= Number(readline.question(`Select an Option <1-3> : `))
      if(Input == 1){
         console.log(`Hello There!`)
      }
      else if(Input == 2){
      console.log(`Why did the chicken cross the road ? \nTo get to the other side!!`)
      }else if(Input == 3){
      console.log(`GoodBye 👋`);
      }else{
      console.log(`Wrong Input`)
      }
   }while(Input !== 3);
}

// 2. Generate random numbers until you get a specific one
// Instructions: Use a do-while loop to generate random numbers between 1 and 6 (like rolling a
// die) until you roll a 6.
// Input: None
// Output:
// Roll: 2
// Roll: 4
// Roll: 3
// Roll: 6
// You rolled a 6!
// Note: The number of rolls will vary each time you run the program

console.log("2: do-while loop : eq")
{
   let Input
   do{
      Input = Number(readline.question(`Roll a Dice <1-6> :`))
      
      if(Input == 6){
         console.log(`You rolled a 6 !!`)
         break;
      }else{
         console.log(`Roll Again`)
      }
   }while(Input !== 6)
}

// 3. Ensure positive number input
// Instructions: Use a do-while loop to ask the user for a positive number. Keep asking until they
// enter a number greater than 0.
// Input: User enters -5, then 0, then 7
// Output:
// Enter a positive number: -5
// That's not positive! Try again.
// Enter a positive number: 0
// That's not positive! Try again.
// Enter a positive number: 7
// Thank you! You entered: 7
// Note: The loop continues until a positive number is entered.

console.log("3: do-while loop : eq")
{
   let Input
   do{
      Input = Number(readline.question(`Enter a Positive Number <1-Infinity> : `))
      if(Input < 1){
         console.log(`That's not a Positive Number ! Try Again.`)
      }else{
         console.log(`That's Positive! You Entered : ${Input}`)
      }
   }while(Input < 1)
}

// 4. Print increasing rows of stars
// Instructions: Use a do-while loop to print an increasing pattern of stars, starting with 1 star and
// ending with 5 stars.
// Input: None
// Output:
// *
// **
// ***
// ****
// *****
// Note: You'll need a nested loop inside the do-while loop to print the stars on each line.

console.log("4: do-while loop : eq")
{
   let limit = 0
   do {
   let row = ""
   for (let j = 0; j <= limit; j++) {
      row += "*"
   }
   console.log(row)
   limit++;
   } while (limit < 6);
}

// 5. Add numbers until reaching a target sum
// Instructions: Use a do-while loop to keep adding numbers from 1 onwards until the sum is at
// least 50.
// Input: None
// Output:
// Note: Keep track of both the current number and the running sum.

console.log("5: do-while loop : eq")
{
   let added = 0
   let sum = 0
   do{
      added++;
      sum = added + sum
      console.log(`Added is ${added} & Sum is ${sum}.`)

   }while(sum < 51)
}

// Question 1: Insert Dashes Between Digits
// Instructions: Write a program that takes a number and puts a dash (-) between each digit.
// Input: 
// 12345
// Output: 
// "1-2-3-4-5"
// Constraints:
// The input will be a whole number (no decimals)
// If the input is a single digit, just return that digit as a string (no dashes needed)
// Hints:
// Convert the number to a string first
// Loop through each character and add a dash after it (except for the last digit)

{
   let text = readline.question(`Enter Number <1-Infinity> : `)
   let str = ""
   for(let i = 0; i < text.length; i++){
   str += text[i]
   if(i < text.length-1){
    str += "-"
   }
   }
   console.log(str)
}

// Question 2: Repeat All Vowels in a String
// Instructions: Write a program that doubles every vowel in a string. Vowels are 'a', 'e', 'i', 'o', 'u' (both
// lowercase and uppercase).
// Input: 
// "Hello World"
// Output: 
// "Heelloo Woorld"
// Constraints:
// Treat both lowercase and uppercase vowels the same way
// The input will only contain letters and spaces
// Hints:
// Create a list of vowels to check against
// Build a new string by examining each character

{
   let Input = readline.question(`Enter some words or word: `)
   let vowels = [`a`,`e`,`i`,`o`,`u`,`A`,`E`,`O`,`I`,`U`]
   let str = ``
   for(i = 0; i < Input.length; i++){
      str += Input[i]
         for(k = 0; k < vowels.length; k++){
            if(Input[i] === vowels[k]){
               str += vowels[k]
            }
      }
   }console.log(str)
   
}

// Question 3: Capitalize the Second Letter of Each Word
// Instructions: Write a program that makes the second letter of each word uppercase, without
// changing any other letters.
// Input: 
// "this is a test"
// Output: 
// "tHis iS a tEst"
// Constraints:
// Words are separated by spaces
// If a word has only one letter, leave it as is
// Keep the case of other letters unchanged
// Hints:
// Split the sentence into words
// For each word, check if it has at least 2 letters

{
   let input = readline.question(`Enter Any Sentence : `)
   let arr = input.split(` `)
   let str = ``
   for(i = 0; i < arr.length; i++){
      str += arr[i][0]
      if(arr[i].length>1){
         str += arr[i][1].toUpperCase() + arr[i].slice(2)
      }
      str += ` `
   }
   console.log(str)
}

// Question 4: Print a Right-Angled Triangle of Asterisks
// Instructions: Write a program that prints a right-angled triangle of asterisks (*) with 5 rows, with the
// longest row at the top.
// Input: None
// Output:
// * * * * *
// * * * *
// * * *
// * *
// *
// Constraints:
// Use exactly 5 rows
// Start with 5 stars and end with 1 star
// Hints:
// Use a loop that counts down from 5 to 1
// Use a nested loop to print the asterisks for each row

{
   
   for(let i = 5; i > 0; i--){
      let str = ``
      for(let j = 0 ; j < i; j++){
         str +="* "
      }
      console.log(str)
      
   }
}
