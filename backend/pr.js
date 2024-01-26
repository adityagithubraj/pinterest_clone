//create funcrtion 
// function sum(a,b){
//     return a+b
// }
// console.log(sum(2,3))

// let sum = (x,y)=> x+y
// cons
// var y = 
// var x= y
// let opr =x
// console.log( typeof null )
//let person = { name: "Alice", age: 30 };
// person.gender = "Female"; // Adding a new property
// delete person.age; // Removing a property

// let person = {
//     name: "John",
//     age: 25
//   };
  
//   // Adding properties later
//   person.gender = "Male";
//   person["occupation"] = "Engineer";
//   delete  person.name
//console.log(Object.keys(person))


// age =20

// // var age
// console.log(age)

//..Function , object + arr,  scope, 

//obj

// let obj ={
//     name:"aditya",
//     age:20,
//     mob:2436364747,
//     gre:function sum(age2){
//         return age2
//     }
// }


// function nameOffunction(){
//     let a=10;
//     function sum(){
//         var y=20
//         console.log(a) 
//     }
//     sum()
//     return y
// }

// let sum = (x)=>{
//     return x
// }

//console.log(sum(obj))
//console.log(nameOffunction())

///.....destructuring in obj...//
// let obj ={
//     name:"aditya",
//     age:20,
//     mob:2436364747,
//     gre:function sum(age2){
//         return age2
//     }
// }
// const {name:n}=obj
// console.log(n)


//....settimeout function ....//
// function sum(){
// console.log(2)
// }

// let

// // setTimeout(sum,2000)
// setInterval(sum , 2000)
// clearInterval(setInterval)
// console.log("first")

// let i=1
// let x = setInterval(()=>{

// console.log("aii")
// if(i=== 4){  clearInterval(x)}
   
// i++
  
// },2000)


// function
// function greet(name, ()=>{
//     console.log("i am call")
// } {
    
//     console.log('Hi' + ' ' + name);
  
// })

// callback function
// function callMe() {
//     console.log('I am callback function');
// }

// passing function as an argument
//greet('Peter');

// json object
// const jsonData = '{ "name": "John", "age": 22 }';

// // converting to JavaScript object
// const obj = JSON.parse(jsonData);

// // accessing the data
// console.log(obj.name); // John

// JavaScript object
// const jsonData = { "name": "John", "age": 22 };

// // converting to JSON
// const obj = JSON.stringify(jsonData);

// // accessing the data
// console.log(obj); // "{"name":"John","age":22}"

//......closer..................//

// function fun1(){
//     let x="hii";
   

//     function fun2(){
//         let y="byye"

//         console.log(x)
//     }
//     fun2()
// }
// fun1()


//.......callback........//
// setTimeout(function asicfun(callback){

//     console.log("asicfun completed");
//     callback()

// },3000)
// asicfun(()=>{console.log("i am callback function ");})
    //  let num=[175,50,25]
    //  let r   
    //....This key word in js  ..................//

    // let obj ={
    //     name:"Aditya",
    //     price:299,
    //     mob:21425554566,
    //     one:function (){
    //               console.log(`${this.name} , welcoom`)
    //     }
    // }

    // obj.one()
    // console.log(this)

    //
    // function one(){
    //     console.log("i am settime out function ") 
    // }
    // setInterval(one,2000)
    
    // console.log("not settime out functon")


    // function fetchData(callback) {
       
    //     setTimeout(function() {
    //         const data = 'Some data';
    //         callback(data);
    //     }, 1000);
    // }
    
    // fetchData(function(result) {
    //     console.log(result); 
    // });
    
// function
// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }

// // callback function

// function callMe() {
//     console.log('I am callback function');
// }



// // passing function as an argument
// greet('Peter', callMe);



// let one = (name ,cb)=>{
//     console.log("hello wolde")
// cb(name)
// }

// let two =(name)=>{
//     console.log(name)
// }

// // setTimeout(one,2000);
// one("aditya" , two)



// if(true){
// var x=10;
    
// }
// console.log(x);

let one = new Promise(function(res){})