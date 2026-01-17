// W4 B36 //

{
   // 1. //
   t_f({name: "Benny", phone: "9853759720", email: "jason@edabit.com"},
      {name: "Benny", phone: "9853759720", email: "Benny"} 
   )
   function t_f(obj,obj1){
      for(let v in obj){
         for(let val in obj1){
            var k = (obj[v] === obj1[val]) ? `true` : `false`;
         }
      }
      console.log(k);
   }
}

{
   // 2. //
   function doubleChar(str){
   let string = ``
   for(let values of str){
      string += values.repeat(2);
   }
   return console.log(string);
   }
   doubleChar(`String`);
   doubleChar("HelloWorld!");
}

{
   // 3. //
   specialReverse("peter piper picked pickled peppers", "p")
   specialReverse("first man to walk on the moon", "m")
   specialReverse("word searches are super fun", "s")
   function specialReverse(str,input){
      let x = str.split(' ');
      let y = ``;
      for(let values of x){
         let c = values.startsWith(input);
         (c === true) ?
         y += values.split('').slice().reverse().join('') + ' ' :
         y += values +' ';
      }
      console.log(y);
   }
}

{
   // 4. //
   function pattern(){
      for(let row = 0; row<5; row++){
         let str = ``;
         for(let col = 0; col<5; col++){
            (row == col || col == 0 || row == 4) ? str += `x `: str+= `  `
         }
         console.log(str)
      }
   }
   pattern()
}
