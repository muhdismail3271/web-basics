// 10.js //

{
    // 1. //
    //Create a function that takes a string and returns a string in which each character is repeated once. //
    function doubleChar(str){
      string = ``
      for(let values of str){
         string += values.repeat(2);
      }
      return console.log(string);
    }
    doubleChar(`String`);
    doubleChar("HelloWorld!");
    doubleChar("1234!_");
}

{
   // 2. //
   function input(str){
      let x = str.split("");
      let y = x.slice().reverse();
      let z = y.join("");
      return console.log(z);
   }
   input(`You are smart!`)
}

{
   // 3. //
   bridgeonswitch(["bridge","bridgeon","on"])
   bridgeonswitch(["bridgeon",10101,3.14,53,"bridgeon",45])
   bridgeonswitch([false, false,"bridgeon", true])
   function bridgeonswitch(arr){
      let ar = [];
      let f = true;
      for(let i = 0; i<arr.length; i++){
         if(arr[i] === 'bridgeon'){
            f = !f;
         }
         ar.push(f);
      }
      console.log(ar);
   }
}

{
   // 4. //
   function pattern(n){
      for(let i=0; i<n; i++){
         let str = ``;
         for(let j = 5; j>i ; j--){
            str += j;
         }
         let x = console.log(str);
      }
   }
   pattern(5)
}

{
   // 5. //
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

{
   // 6. //
   findLargest([[4,2,7,1], [20,70,40,90], [1,2,0]]);
   findLargest([[-34,-54,-74], [-32,-2,-65], [-54,7,-43]]);
   findLargest([[0.4321,0.7634,0.652], [1.324,9.32,2.5423,6.4314], [9,3,6,3]]);
   function findLargest(arr){
      let large =[];
      for(let values of arr){
         large.push(Math.max(...values));
      }
      return console.log(large);
   }
}

{
   // 7. //
   function pattern(){
      for(let row = 5; row>0; row--){
         let str = ``;
         for(let col = row; col>0; col--){
            str += col;
         }
         console.log(str);
      }
   }
   pattern();
}

{
   // 8. //
   function pattern(n){
      for(let row = 0; row < n; row++){
         let str = ``;
         for(let col = 0; col<=row ; col++){
            if(row == col || col == 0 || row == n-1){
               str += `+ `;
            }else{
               str +=`  `;
            }
         }
         console.log(str);
      }
   }
   pattern(5)
}

{
   // 9. //
   ageMembers([
   {name:"John",age:15},
   {name:"Steve",age:50}
   ])
   ageMembers([
   {name:"Mark",age:38},
   {name:"Charlie",age:10},
   {name:"Anna",age:25}
   ])
   function ageMembers(arr){
      let members = [];
      let arr1 =[];
      let big = -9999
      let small = 9999
      for(let i=0; i<arr.length ; i++){arr1.push(arr[i].age)}
      for(let j=0; j<arr1.length; j++){if(arr1[j]<small){small = arr1[j]}}
      for(let k=0; k<arr1.length; k++){if(arr1[k]>big){big = arr1[k]}}
      let diff = big - small
      members.unshift(small);
      members.push(big)
      members.push(diff)
      return console.log(members);
   }
}

{
   // 10. //
   function totalPrice(arr){
      let x = 0 
      for(let val of arr){x += val.quantity * val.price}
      return console.log(x);
   }
   totalPrice([
   { product: "Milk", quantity: 1, price: 10 }
   ])
   totalPrice([
   { product: "Milk", quantity: 1, price: 10 },
   { product: "Eggs", quantity: 12, price: 5 },
   { product: "Bread", quantity: 2, price: 20 },
   { product: "Cheese", quantity: 1, price: 30 }
   ])
}

