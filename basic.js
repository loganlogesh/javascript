console.log("Hello, World!");
// variable
var Name = "raja"
console.log(Name)
// funciton
function welcome(name){
  console.log("hi " + name + " welcome to our website");
}
welcome("loki")

// Object
var person = {
  name : "logan",
  age : 21,
  hight : 6,
  address : {
    doorno : 731,
    village : "okkur",
    distic : "sivagangai"
  },
  world(){
    console.log("hello world")
  }
}
console.log(person.name)
console.log(person.address.distic)
console.log(person.world())

// array 
var bike = ["duke" , "kTM" , "hero"]

var transport = [
     {name : "KTM" ,color : "orange" ,price : 100000},
     {name : "duke" , color : "white" , price : 50000}
  ]
console.log(transport[0].price);
console.log(transport[1].name);
console.log(bike);

//default object method
bike.sort()
console.log(bike);
bike.reverse()
console.log(bike);
bike.push("passion pro")
console.log(bike);

// condition
var rajaAge = 16
if (rajaAge >= 18){
  console.log("u are eligible to vote this election");
}
else{
  console.log("u are not eligible to vote this election");
 }

// ternary operator
var checking = rajaAge >= 18 ? console.log("u are eligible to vote this election") :
      console.log("u are not eligible to vote this election");
      
// loop consept (iteration statement)

for (i = 0 ; i<=5 ; i++){
  console.log("welcome")
}

counts = 0
while (counts <= 5){
  console.log("emoclew")
  counts++
}

// Arrow function

welcome = (age) => {
  console.log("u r age is " + age + " welcome to owr training")
}
welcome(21)

sub = () => {
  return(2-6)
}

add = () => (2+3)
console.log(add())
console.log(sub())

// arrow function passing the value

var number = 590
div = (number) =>{
  return(number / 10)
}
console.log(div(number))

// higher order function

function multi(number){
  return function (X){
    return X * number
  }
}
var value = multi(25)
console.log(value(2))

// high oreder function indulit (forEach)

let pg = ["blue","white","pink"]

pg.forEach(availability)
function availability(pg){
  console.log("this "+ pg + " pg rooms are available")
}

//higher order function (map()) --> we need the colomn of data

let pgs = [
   {Name :"bluebell",color :"blue",prices:6000},
   {Name:"whitebell",color:"red",prices:5500},
   {Name:"pinkbell",color:"red",prices:5000},
   {Name : "rebbell",color:"red",prices : 5500}
  ]
function avail(PGS){
  return PGS.prices
}
var finalDetail = pgs.map(avail)
console.log(finalDetail)

AVAIL = (ROOM) => {
  console.log(ROOM.color)}      // why it happen this code not comes array formate
var roc = pgs.map(AVAIL)

Avail = (Room) => (Room.color)
var roc = pgs.map(Avail)      // why this code comes array formate
console.log(roc) 

//highetr order function (filter()) --> we need the particular data

var fruit =[
     {name : "amla",color:"green",price:10},
     {name : "apple",color:"red",price:120},
     {name:"bananna",color:"yellow",price:5}
     
  ]
food = (juice) => juice.price <= 120
doof =(juice) => juice.color == 'red'

console.log(fruit)

var health = fruit.filter(food).filter(doof)
console.log(health)

// Scope concept->let   var = golbal and let = private

let material = "plastic" // golbal variable
function search(){
  var material = 'ghaphate' // block specified
  if (true){
    let material = "carbon" // block specified
    console.log(material + " is the most good minier in whole world")
  }
  console.log(material + " is the most strong material in whole world")
}
console.log(material + " is the most dangous material in whole world")

search()

// context concept - object - this
var obj = {
  Name : "jhon",
  job : "writer",
  slary : "5000",
  personalDetails(){
    console.log(this.Name +" is a good worker in our company");
  }
}
obj.personalDetails() 
/*
otherDetails= () =>{
  console.log(this.Name + " is a nice guy")// why arrow fuction don't wrk in "context in object"
} */

function otherDetails(){
  console.log (this.Name + " is a nice guy")
}
otherDetails.call(obj)

                    // pactise ( short cuts)

// below variable every number add 1 ? and comes the out put in array
var num = [10,20,30,40]

add1 = (x) =>{console.log(x+ 1) }
num.forEach(add1)

add2 = (y) => y + 1               // see below one line code
var mun = num.map(add2)

var munn = num.map((z) => z + 1) // efficient code by using anonymous function

console.log(mun)
console.log(munn)

// data => return

var pers = 'raj'                      // see below one line code
console.log("hi frnds i am " + pers + ", i am good in coding" )

console.log(`hi frnds i am ${pers}, i am good in coding`)   // more efficient code 
