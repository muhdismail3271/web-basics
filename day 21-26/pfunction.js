// EASY //


//Left Shift by Powers of Two//
{
   function shiftToLeft(x, y) {
	   return x*(2**y);
   }
   console.log(shiftToLeft(10,3))
}

//Add up the Numbers from a Single Number//

//method 1//
{
   sum = 0
   function addup(num){
      for(let i = num; i > 0; i--){
         sum += i
      }
   }
   addup(10)
   console.log(sum)
}

//method 2//
{
   sum = 0
   function addup(n){
      if(n === 0){return;}
      sum += n
      addup(n-1)
   }
   addup(5)
   console.log(sum)
}

//Matchstick Houses//

{
   let x = n => {if(n===0) {return n;} else {return n*6 - (n-1)}}
   console.log(x(9))
}

{
   //Which Function Returns the Larger Number?//

   let l = ``;
   function whichIsLarger(f,g) {
     return f() > g() ? l += `f` : g() > f() ? l += `g` : l +=`neither`;
   }
   whichIsLarger(() => 10, () => 10);
   console.log(l)
}

{  
   //Find the Smallest and Biggest Numbers//

   function minMax(arr) {
      let arr1 = []
      arr1.push(Math.min(...arr))
      arr1.push(Math.max(...arr))
      console.log(arr1)
   }
   minMax([1,2,3,4,5]);
}

{
   //Check if One Array can be Nested in Another//
   //they asked true or false , I accidentally printed a multidimensional array//

   let count = 0;
   let nesarr = [];
   function canNest(arr,arr2){
      
      let c = Math.max(...arr);
      let d = Math.min(...arr);
      let y = Math.max(...arr2);
      let z = Math.min(...arr2);
      if(c > y && d > z){
         nesarr.push(arr,arr2);
         count = 1;
      }else{
         count = 2;
      }
   }
   canNest([1,2,3,4,5],[0,4])
   count == 1 ? console.log(nesarr) : count == 2 ? console.log("Array 2 has high values") : console.log(``);
}

{
   //Sum of Resistance in Series Circuits//

   function seriesResistance(arr) {
	let RT = 0; for(let values of arr){ RT += values};
   if(RT < 2){return RT + ` ohm`}; return RT + ` ohms`;}
   console.log(seriesResistance([0.5,0.5]))
}

{
   //Largest Swap//

   function largestSwap(num) {
      let x = num.toString();
      let s = x.split("");
      let rev = s.reverse();
      let j = rev.join("");
      return (j > num) ? false : true;
   }
   console.log(largestSwap(20))
}

{
   //What's Hiding Amongst the Crowd?//

   function detectWord(str) {
      string = ''
      for(let val of str){
         if(val.charCodeAt() >=97 && val.charCodeAt() <=122){
            string += val
         }
      }
      console.log(string)
   }
   detectWord('YFemHUFBbezFBYzFBYLleGBYEFGBMENTment')
}

{
   //Drink Sorting//

   function sortDrinkByPrice(drinks) {
      drinks.sort((a,b) => a.price - b.price);
      return drinks;
   }
   console.log(sortDrinkByPrice(drinks = [
      {name: "lemonade", price: 50},
      {name: "lime", price: 10}
   ]))
}


// MEDIUM //

{
   //How Much is True?//

   function countTRUE(arr){
      let count = 0;
      for(let values of arr){
         if(values) {count += 1}
      }
      return count;
   }
   console.log(countTRUE([true,true,true,false]))
}

{
   //A Redundant Function//
   function redundant(str) {
      return f = () => str ;
   }
   console.log(redundant(`apple`)())
}

{
   //Tile Teamwork Tactics//

   function possibleBonus(a, b) {
	   return (b-a <= 6 && b-a > 0)? true : false;
   }
   console.log(possibleBonus(4,10))
}

{
   // Right Shift by Division//

   function shiftToRight(x, y) {
      return x / 2**y ;
   }
   console.log(shiftToRight(80,3))
}

{
   // Perimeters with a Catch //

   function perimeter(l, num){
      return (l ===`c`) ? 6.28 * num : (l === `s`) ? 4 * num : `error` ;
   }
   console.log(perimeter(`s`,10))
}

{
   // Find Number of Digits in Number //

   function num_of_digits(num) {
      let count = 0;
      while(num){
         num = Math.floor(num/10)
         count += 1;
      }
      console.log(count);
   }
   num_of_digits(1)
}

{
   // Burglary Series (04): Add its Name //

   function addName(obj, name, value) {
      obj[name] = value;
      return obj;
   }
   console.log(addName({ piano: 500 }, "Brutus", 300))
}

{
   // Derivative of a Function //

   function derivative(b, m) {
  	   return f = () =>b*m**(b-1);
   }
   console.log(derivative(4,-2)())
}

{
   //Which Generation Are You?//

   function generation(x, y) {
      switch(x){
         case 1 :
            switch(y){
               case `f`:
                  return console.log(`daughter`);
               case `m`:
                  return console.log(`son`);
            }
         case 2 :
            switch(y){
               case `f`:
                  return console.log(`granddaughter`);
               case `m`:
                  return console.log(`grandson`);
            }
         case 3 :
            switch(y){
               case `f`:
                  return console.log(`great granddaughter`);
               case `m`:
                  return console.log(`great grandson`);
            }
         case -1 :
            switch(y){
               case `f`:
                  return console.log(`mother`);
               case `m`:
                  return console.log(`father`);
            }
         case 0 :
            switch(y){
               case `f`:
                  return console.log(`me!`);
               case `m`:
                  return console.log(`me!`);
            }
         case -2 :
            switch(y){
               case `f`:
                  return console.log(`grandmother`);
               case `m`:
                  return console.log(`grandfather`);
            }
         case -3 :
            switch(y){
               case `f`:
                  return console.log(`great grandmother`);
               case `m`:
                  return console.log(`great grandfather`);
            }
         default :
            console.log(`error`);
      }
   }
   generation(0,'m')
}

{
   //Find the nth Tetrahedral Number//

   function tetra(n) {
	   return n*(n+1)*(n+2)/6 ;
   }
   console.log(tetra(8))
}
