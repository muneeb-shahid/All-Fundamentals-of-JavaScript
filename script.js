import { add } from "./utils";

// alert("any message here")  // website popup 

// var arr = [1,2,3,4, true, {},function name(params) {}, []]; 

var arr = [1,2,3,4];
//  foreach map filter find indexOf
arr.forEach(element => {      // ES6 introduced arrow functions, which can use concise syntax for parameter declaration
    console.log(element + " hello world");
});
// arr.forEach(function name(val) {
//     console.log(val + " hello world");
// })

//  Allow Function
var a = (num)=>{
    return num*num;
}
console.log(a(5));


const person= {
test(){

    // es6 arrow function
    setTimeout(() => {
        console.log(this);
    }, 2000);

    // es5 normal function
    var self = this;
    setTimeout(function() {
        console.log(self);
    }, 2000);
}
};

person.test();


const name = `my name is
muneeb
and i
am a developer`;
console.log(` ${name}`);  // use ` ` instead of ""



var details = {
    name :"Muneeb Shahid",
    age: "22",    
}
console.log(`My name is ${details.name}
My age is ${details.age}`);


var list = ["a","B","c",'d'];
console.log(list);
console.log(add(10,20));

// Promise in JS

const myPromise = new Promise((resolved, reject)=>{
    const a=5, b=10;
    const c = a+b;
    
    if (c==10) {
        resolved(`${a} + ${b} == 10`);
    } else {
        reject(`${a} + ${b} != 10`);
    }
    });
    
    myPromise.then((m)=>{
    console.log(m);
    }).catch((e)=>{
    console.log(e);
    });




    const myNewPromise=   new Promise((resolve, reject) => {
         a= 10, b=12;
         c=a+b;
         if (c==10) {
            resolve(`${a} + ${b} ==10`);
         } else {
            reject(`${a} + ${b} !=10`);
         }
    })


    myNewPromise.then((t) => {
        console.log("true");
    }).catch((err) => {
        console.log("false");
        
    });


/// Rest and Spread

///Spread

const arr = [1,2,3,4,5];
const newArr = ["a","b","c",...arr,6,7,8,9];

console.log(arr);
console.log(newArr);


// Rest
// rest parameter syntax allows you to represent an indefinite number of arguments as an array.
const sum = (...number) => {
    let total = 0;

    // number.forEach(element => {
    //   total=  element+total;
    // });
    number.forEach((element)=>{
        total +=  element;
    });
    console.log(total);
}
sum(1,2,3,5);


// Map: The map() method in JavaScript is used to create a new array by transforming each element of an existing array.
// var ans = arr.map(){};
const arr1 = [1,2,3,5]; 

const mapping = arr1.map((m)=>m*5);
console.log(mapping);

/// classes

class Person {
    constructor(name, age) {
        this.name =name;
        this.age =age;
    }

    detail(){
        console.log(`My name is ${this.name} and i am ${this.age} year old.`);
    }
}

var obj = new Person("muneeb","22");
obj.detail();



// let is like dynamic in flutter. any data type is assign and reassign in let
// in const you can not reassign a value


// let x= "abc";
// console.log("let " + x);

// x= true;
// console.log("let " + x);

// const y =10;
// console.log("const "+y);

// y = 20;
// console.log("const "+y);




