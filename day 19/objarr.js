const readline = require(`readline-sync`)
// 5. Createafunctionthat takestwonumbersasarguments(num, length)andreturnsan
// arrayofmultiplesofnumuntil thearraylengthreacheslength.
// Examples
// arrayOfMultiples(7,5)➞[7,14,21,28,35]
// arrayOfMultiples(12,10)➞[12,24,36,48,60,72,84,96,108,120]
// arrayOfMultiples(17,6)➞[17,34,51,68,85,102]

{
   let input = Number(readline.question(`Enter the number: `))
   let input1 = Number(readline.question(`Enter how much multiples you need: `))
   let mult = []
   for(i = 1; i <= input1; i++){
      mult.push(input * i)
   }
   console.log(mult)
}

// 6. Createafunctionthat takesanarrayofarrayswithnumbers.Returnanew(single)
// arraywiththelargestnumbersofeach.
// Examples
// findLargest([[4,2,7,1], [20,70,40,90], [1,2,0]])➞[7,90,2]
// findLargest([[-34,-54,-74], [-32,-2,-65], [-54,7,-43]])➞[-34,-2,7]
// findLargest([[0.4321,0.7634,0.652], [1.324,9.32,2.5423,6.4314], [9,3,6,3]])➞
// [0.7634,9.32,9]

{
   let input = [[4,2,7,1], [20,70,40,90], [1,2,0]]
   
   let arr_new = []
   for(i=0 ; i < input.length; i++){
      let big = -9999
      for(j=0; j< input[i].length; j++){
         if(input[i][j] > big){
            big = input[i][j]
         }
      }
      arr_new.push(big)
   }
   console.log(arr_new)
}
{
   let input2 = [[-34,-54,-74], [-32,-2,-65], [-54,7,-43]]

   let arr_new = []
   for(i=0 ; i < input2.length; i++){
      let big = -9999
      for(j=0; j< input2[i].length; j++){
         if(input2[i][j] > big){
            big = input2[i][j]
         }
      }
      arr_new.push(big)
   }
   console.log(arr_new)
}

// 4. Print thefollowingReverseTrianglepattern.
// 54321
// 5432
// 543
// 54
// 5

{
   let n = 5
   for (let row=0; row<n; row++){
      let i = ``
      for(col=5 ; col>row; col--){
         i += col
      }
      console.log(i)
   }
}

// 7. Print thefollowingReverseTrianglepattern.
// 54321
// 4321
// 321
// 21
// 1

{
   let n = 0
   for (let row=5; row>n; row--){
      let i = ``
      for(col=row ; col>n; col--){
         i += col
      }
      console.log(i)
   }
}

// 8. Writeaprogramtoprint thefollowingHollowTriangleStarPattern.
// *
// **
// * *
// *  *
// *****

{
   let n = readline.question(`Enter limit: `)
   for(let row = 0; row<n; row++){
      let str = ``
      for(let col=0; col<row+1; col++){
         if(row==n-1||col==0||row-col==0){
            str+=`*`
         }
         else{
            str+=` `
         }
      }
      console.log(str)
   }
}

// 9. Afunctionthat takesanarrayofobjectswhichincludesnameandageof family
// members.Findthedifferenceinagebetweentheoldestandyoungest family
// members,andreturntheyoungestmember’sage, theoldestmember’sageandthe
// agedifferencerespectivelyasanarray.
// Examples
// ageMembers([
// {name:"John",age:15},
// {name:"Steve",age:50}
// ])➞[15,50,35]
// ageMembers([
// {name:"Mark",age:38},
// {name:"Charlie",age:10},
// {name:"Anna",age:25}
// ])➞[10,38,28]
// ageMembers([
// { name: "Rachel", age: 20 },
// { name: "Jennifer", age: 45 },
// { name: "Jack", age: 43 },
// { name: "Maria", age: 3 }
// ]) ➞ [3, 45, 42]

{
   const ageMembers = [ 
      {name: "Rachel", age: 20 },
      { name: "Jennifer", age: 45 },
      { name: "Jack", age: 43 },
      { name: "Maria", age: 3 }
   ]

   let arr=[]
   let arr2=[]
   let small = 9999
   let big = -9999
   for(let i=0;i<ageMembers.length;i++){
      arr.push(ageMembers[i].age)
   }
   for(let j=0;j<arr.length;j++){
      if(arr[j] < small){
         small = arr[j]
      }
   }
   for(let k=0;k<arr.length;k++){
      if(arr[k] > big){
         big = arr[k]
      }
   }
   diff = big-small
   arr2.push(big)
   arr2.unshift(small)
   arr2.push(diff)
   console.log(arr2)
}


// 10. Create a function that takes an array of objects (groceries) which calculates the total
// price and returns it as a number. A grocery object has a product, a quantity and a
// price.
// Examples
// totalPrice([
// { product: "Milk", quantity: 1, price: 10 }
// ]) ➞ 10
// totalPrice([
// { product: "Milk", quantity: 3, price: 10 },
// { product: "Biscuit", quantity: 1, price: 20 }
// ]) ➞ 50
// totalPrice([
// { product: "Milk", quantity: 1, price: 10 },
// { product: "Eggs", quantity: 12, price: 5 },
// { product: "Bread", quantity: 2, price: 20 },
// { product: "Cheese", quantity: 1, price: 30 }
// ]) ➞ 140

{
   const totalPrice=([
      { product: "Milk", quantity: 1, price: 10 },
      { product: "Eggs", quantity: 12, price: 5 },
      { product: "Bread", quantity: 2, price: 20 },
      { product: "Cheese", quantity: 1, price: 30 }
   ])
   let arr=[]
   let price= 0
   let sum = 0
   for(let i=0;i<totalPrice.length;i++){
      price=totalPrice[i].quantity * totalPrice[i].price
      arr.push(price)
   }
   for(let j=0;j<arr.length;j++){
      sum += arr[j]
   }
   console.log(sum)
}

// 1. Createafunctionthat takesastringandreturnsastringinwhicheachcharacteris
// repeatedonce.
// Examples
// doubleChar("String")➞"SSttrriinngg"
// doubleChar("HelloWorld!")➞"HHeellllooWWoorrlldd!!"
// doubleChar("1234!_")➞"11223344!!__ "

{
   let str = readline.question(`Enter Something: `)
   let str2 = ``
   for(i=0;i<str.length;i++){
      str2 += str[i].repeat(2)
   }
   console.log(str2)
   
}

// 2. WriteaJavaScriptprogramtoget thefollowingoutput.
// Input:"!tramserauoY"
// Output:“Youaresmart!”

{
   let input = readline.question(`Enter Something in Reverse: `)
   let myarr = Array.from(input)
   let arr = myarr.slice().reverse();
   let str = ''
   for(let i=0; i<arr.length;i++){
      str += arr[i]
   }
   console.log(str)
}

// 3. Createafunctionthatalwaysreturnstrueforeveryiteminagivenarray.However, if
// anelement istheword"bridgeon",switchtoalwaysreturningtheoppositeboolean
// value.
// Examples
// bridgeonSwitch(["bridge","bridgeon","on"])➞[true, false, false]
// bridgeonSwitch(["bridgeon",10101,3.14,53,"bridgeon"])➞[false, false, false, false,
// true]
// bridgeonSwitch([false, false,"bridgeon", true])➞[true, true, false, false]

{
   let input= ["bridge","bridgeon","on"]
   let arr = []
   for(i=0;i<input.length;i++){
      arr.push(input[i].includes(`bridgeon`))
   }
   console.log(arr)
}