console.log("Hello , this is function inside function")

// Arrow function and function expression
// const functionexpression = function()
// {
//    console.log("expression function is here")
// }


// functionexpression();

// let birthdyboy = function()
// {
//     console.log("happy birthday to you.....")
// }
// birthdyboy();

// const Sum= function(num1 , num2 , num3)
// {
// return(num1+num2+num3);
// }
// var answer = Sum(3,5,4);
// console.log(answer);




//Arrow funcion
// const birthdaygirl =() =>
// {
//     console.log("ladki ka bday hai....")
// }
// birthdaygirl();

// const ArowSum =(num1, num2, num3) =>
// {
//     return(num1+num2+num3);
// }
// const ArrowAdd = ArowSum(10, 20, 30)
// console.log(ArrowAdd);


//Modulusss.... with shortest arrow function 
// const isEven = nuber => nuber%2 ===0
// console.log(isEven(7));

// // hoisting  ---- Advanced javascrirpt
// hello();
// function hello()
// {
//     console.log("Hi")
// }

// console.log(hello)
// var hello = "Hi this type is hoisting";
// console.log(hello);


//function inside function
function app(){
    const myFn = () =>
    {
        console.log("This is myfunction");
    }
//another fun
 const funinsidefun = () =>
 {
console.log("fuction Inside function")
 }

//Inside fun with adding two number
const twoNum =(num1, num2) => num1 + num2;


myFn();
funinsidefun();
console.log(twoNum(4,5));
}
app();

// js also take the value of global declaration like:
//lexical scrope
// const abc= "value1";  // this variable define globally but it will be accessible for myApp fun

// function myApp()
// {
//     function func ()
//     {
//         console.log("inside func" ,abc);
//     }
//     console.log(abc);s
//     func();
// }
// myApp();



// let , const are block scope
// var are function scopre
// {
//     const firstName = "mohit";  
//     console.log(firstName);  
// }
// var firstName =" ram";
// console.log(firstName);

// example
// function store(){
//     if(true){
//         var name = "Devendra singh rathore";
//         console.log(name);
//     }
// console.log(name);
// }
// store();

// Rest Parameter 
// function rest(a,b,...c)
// {
//    console.log(`a is ${a}`)
//    console.log(`b is ${b}`);
//    console.log(`c` , c)
// }
// rest(2,4,5,7,8,8,4,3,);

// function additon(...add)
// {
//     let total = 0;
//     for (let value of add)
//     {
//         total = total + value;
//     }
// return total;
// }
// let plus = additon(874398738,498797497,8984847);
// console.log(plus);

// User every Mehtod in js
const userCart =[
    {productId: 1 , productName:"Debu", price:2000},
    {productId: 1 , productName:"Debu", price:5000},
    {productId: 1 , productName:"Debu", price:10000},
    {productId: 1 , productName:"Debu", price:1000},
]
 const answer= userCart.every((userItem)=>userItem.price < 40000)
 console.log(answer); 




















