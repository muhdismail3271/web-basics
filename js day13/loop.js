let loggedin = false
let username = ""
let password = ""

do{
   username = window.prompt("enter your username:")
   password = window.prompt("enter your password:")

   if(username ==  "ismail" && password == "ismailikka") {
      loggedin = true
      console.log("You have logged in!")
   }else{
      loggedin = false
      console.log("incorrect credentials! Try again")
   }
}
while(!loggedin){}

for(let i = 30; i <= 30; i -= 3){
   if(i == 15){
      continue;
   }else if(i == 6){
      break
   }else{
      console.log(i)
   }
}
let object = {name:"ismail",age: 17,condition: true}
let array = ["ismail",17]
let x = object+ array
console.log(x)
let y = 5, z = 6
console.log(z == y)
console.log(object.condition)
document.getElementById("h1").innerText = object.name