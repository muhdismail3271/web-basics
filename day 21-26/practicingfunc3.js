// week 3 B36 //

{
   // 1. //

   getSum([2,-1, 4, 8, 10])
   getSum([-3,-4,-10,-2,-3])
   getSum([2, 4, 6, 8, 10])
   function getSum(arr){
      sum = 0
      for(let values of arr){
         if(values < 0) {values *= -1}
         sum += values;
      }
      return console.log(sum);
   }
}

{
   // 2. //

   highLow("1 2 3 4 5") 
   highLow("1 2 -3 4 5") 
   highLow("1 9 3 4 -5")
   highLow("13") 
   function highLow(str){
      let arr = str.split(` `);
      let string;
      let max = Math.max(...arr);
      let min = Math.min(...arr);
      return console.log(string = `${max} ${min}`)
   }
}

{
   // 3. //

   getScore([
      { name: "Henry", score: 59 },
      { name: "Jack", score: 41 },
      { name: "Maria", score: 88 }
   ]) 
   getScore([
      { name: "Alex", score: 90 },
      { name: "Megan", score: 32 }
   ])

   function getScore(arr){
      let score = 0;
      for(let values of arr){
         score += values.score
      }
      return console.log(score)
   }
}

{
   // 4. //

   maxWords(["Welcome To Bridgeon", "Hello World", "Code Your Future With Bridgeon"])
   maxWords(["please wait", "continue to fight", "continue to win"])
   maxWords(["hello world"]) 
   function maxWords(arr){
      let m = []
      let count = 0
      for(let values of arr){
         let x = values.split(" ");
         count = x.length;
         m.push(count);
      }
      let max = Math.max(...m);
      return console.log(max);
   }
}