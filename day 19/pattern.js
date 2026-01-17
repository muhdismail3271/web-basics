const readline = require(`readline-sync`)
// 1. . Write a program to print the following star pattern 
 
//          *  
//        * * *  
//      * * * * *  
//    * * * * * * * 
//  * * * * * * * * *

// {
//    let n= readline.question(`Enter Limit: `)
//    for(row = 0; row < n; row++){
//       let i = ``
//       for(let space = 0; space< n- row; space++){
//          i += ` `
//       }
//       for(let value = 0; value < row*2+1 ; value++){
//          i += `+`
//       }
//       console.log(i)
//    }
// }


// 2. Write a program to print the following star pattern  
 
//   * * * * * * * * * * * *
//     *                 *  
//        *           *  
//           *    *  
//              *

// {
//    let n= readline.question(`Enter Limit: `)
//    for(let row = 0; row<n; row++){
//       let i = ``
//       for(let space=n ; space>n-row; space--){
//          i += `  `
//       }
//       for(let value=n*2-1; value>=row*2+1; value--){
//          if(row==0||value==9||row*2+1==value){
//             i += `* `
//          }
//          else{
//             i+=`  `
//          }
//       }
//       console.log(i)
//    }
// }

// 3. Print the following pattern. 
// A 
// A B 
// A B C 
// A B C D 
// A B C D E 

// {
//    let n=5
//    for(let row=0; row<n; row++){
//       let i = ``
//       for(let col=0; col<row+1; col++){
//          i += String.fromCharCode(65+col)+` `
//       }
//       console.log(i)
//    }
// }

// 5. Print the following pattern. 
// 1 
// 123 
// 12345 
// 1234567 
// 123456789

// {
//    let n=6
//    for(let row=0; row<n; row++){
//       let i = ``
//       for(let space=0; space<n-row; space++){
//          i+=` `
//       }for(let value=1; value<(row*2+1)-1; value++){
//          i+=value
//       }
//       console.log(i)
//    }
// }

// 4. Print the following pattern. 
// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10

// {
//    let n=4
//    let f=1
//    for(let row=0;row<n;row++){
//       let st = ``
      
//       for(let col=0;col<=row;col++){
//          st+= f + ` `
//          f++;
//       }
      
//       console.log(st)
//    }
   
// }