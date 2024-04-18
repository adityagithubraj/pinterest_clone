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

// let one = new Promise(function(res){})

//.....forloop, whileloop, dowhile loop, for of loop, for in loop, 
//map, this key, async and await , promisses, new key , ........//


   let arr = [1,2,3,4,5]
// for(let i=0; i<=arr.length-1; i++){
//     console.log(arr[i]);
// }

// for (let i=0; i<=arr.length-1; i++){
//     console.log(arr[i])
// }

// let i=0;
// while(i<=arr.length-1){
//     console.log(arr[i]);
//     i++
// }


// let i=0
// do{
//     console.log(arr[i])
//     i++
// }
// while(i<0);

//.............Map or for of loop........//
// let mymap = new Map();
// mymap.set("name","Aditya")
// mymap.set("age",20)

// console.log(mymap);
// for (const [k,v] of mymap) {
//     console.log(k,v);
    
// }

//.........forin loop...........//
// let obj = {name:"aditya","age":20, mob:12574344}

// for (const key in obj) {
//     console.log(key , obj[key]);
// }


//.......HOF...........//

// function aplly(val, opr){
//     return opr(val)
// }

// function dub(x){
//     return x*2
// }

// let res = aplly(5,dub)
// console.log(res);

// arr.forEach((i,el,ar)=>{
// console.log(i,el,ar);
// })

// let one = arr.filter((el)=>el<3)
// console.log(one);

//  let one = arr.map(i=> i+10)
//  console.log(one);

//.......async and sync promise in js .......//
// function one(x, fx){
//     console.log(x);

//     fx()
// }
// function cb(){
//     console.log("i am cb");
// }
// one(2,cb)

//  let flag =false
// let promise = new Promise(function (resolve, reject){
//   if(flag){
//         resolve("resolved.....")
//   }else{
//     reject("rejecteddd...")
//   }
// })

// promise

//   .then((result) => {
//     console.log("resolved....");
//   }).catch((err) => {
//     console.log("err");
//   });

// let promise = new Promise((resolve, reject)=>{
// if(false){
//     resolve("resolved susses.....")
// }else{
//     reject("rejected.....")
// }
// })
// promise
// .then((result) => {
//     console.log(result)

// })
// .catch((err) => {
//     console.log(err);
// });


// a promise
// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//     resolve('Promise resolved')}, 4000); 
// });

// // async function
// async function asyncFunc() {

//     // wait until the promise resolves 
//     let result = await promise; 

//     console.log(result);
//     console.log('hello');
// }

// // calling the async function
// asyncFunc();

// fetch('https://api.example.com/data')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error fetching data:', error));

// setTimeout(()=>{
//     console.log("i am async");
// },4000)

// console.log("nono");


//  function car(name,model,num){
//     this.name = name;
//     this.model =model;
//     this.num  =num
// }

// let car1 = new car("toyota","oldmodel",2345)
// let car2 = new car("maruti","veryoldmodel",45454)
// console.log(car1);
// console.log(car2);