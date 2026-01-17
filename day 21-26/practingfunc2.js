// week 3 B26 //

{
   // 1. //

   getAverage({name: "John", marks: [25, 45, 10, 30] })
   getAverage({name: "Kevin", marks: [50, 45, 40, 40, 25] })
   function getAverage(obj){
      let sum = 0;
      for(let values of obj.marks){
         sum += values;
      }
      return console.log(sum / obj.marks.length)
   }
}

{
   // 2. //
   oddEven([0, 1, 4])
   oddEven([0,-1,-5]) 
   oddEven([0])
   function oddEven(arr){
      let sum = 0;
      for(let values of arr){
         sum += values
      }
      return sum %2 === 0 ? console.log(`even`) : sum %2 === 1 ? console.log(`odd`) : console.log(`neither`);
   }
}

{
   // 3. //
   Input('Web Development Tutorial')
   Input('We are Bridgeon')
   function Input(str){
      let x = str.split(" ")
      let big = 0;
      for(let i = 0; i<x.length; i++){
         (x[i].length > big) ? big = x[i].length : ``;
      }
      for(let values of x){
         (values.length == big) ? console.log(values) : ``;
      }
   }
}

{
   // 4. //
   function arrayOfMultiples(n,length){
      let arr = [];
      for(i = 1 ; i<= length; i++){
         arr.push(n*i)
      }
      console.log(arr)
   }
   arrayOfMultiples(7,5);
   arrayOfMultiples(12,10);
   arrayOfMultiples(17,6);
}