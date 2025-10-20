// function greet(name , lastName) {
//    console.log('hello' + name + '' + lastName) 
// }
// greet('freedom', 'smith');
// greet('gabriel');

// array------

// let selectColors = ['red','blue'];
// selectColors[2]= 3
// console.log(selectColors.length);

// string primitive

// const message = 'this is my first message';

// //  string object

// const another = new String('hi');



// condition statement

// let hour = 16;

// if (hour >= 6 && hour < 12) {
//     console.log('good morning');
// }
// else if(hour >= 12 && hour < 18){
//     console.log('good afternoon');
// }
// else {
//     console.log('good evening')
// }


// LOOPs
// var ourArray = [10,4,24,55]
// for (let i = 0; i < ourArray.length; i++){
//     // console.log('i am here', i);
//     // ourArray.push(i);
//     console.log(ourArray[i])
// }
// document.getElementById('show').innerHTML = displayContent('say hi');
// function displayContent(textarea ) {
//     return textarea
// }

// let login = function(password) {
//     if (password === 'text1234') {
//         return 'password successful';
//     }
//     else{
//        return 'password incorrect';
//     }
// };
// console.log(login('text1234'));
 


//  arrow function Js
// const hello = (name , age) => {console.log(`hello ${name}`)
//                                 console.log(`you are ${age}years old`)};
// hello('freedom', 34);

// set time-out function

// setTimeout( hello , 6000);

// function hello() {
//     console.log('we are here');
// }

//  rewritten in arrow function method 

// setTimeout(() => console.log('We coming'),5000)

// arrow function redefining an object

// const fastFood = {
//     resturant :['sweet-sensation', 'mr biggs'],
//     types: 'fast food',
//     foodSummary: function (){
//         return this.resturant.map((resturant) =>{
//             return `${resturant} is a ${this.type} resturant`
//         })
//     }
// }
// console.log(fastFood.foodSummary());


// function scope chain

// var x = 'hello!';
// first();


//  function first() {
//     var y = 'hi!';
//     second();

//     function second() {
//        var z = 'freedom';
       
//        third();
//     }
    
//  }
//  function third() {
//     var d = 'moruf'

//     console.log(x  + d );
//  };

// higher order functions


// Object creation 

// function Person(name , age, eyeColor) {
//     this.name = name ;
//     this.age = age;
//     this.eyeColor = eyeColor;

//     this.updateAge = function() {
//         return ++this.age;
//     };
// }

// let person01 = new Person('mike', 23, 'yellow');
// console.log(person01);


// var age = 32;
// var info = 
// "my name is freedom and i am "+ age +" old";

// console.log(info)

//  const showGreeting = function(a) {
//     let greeting = "hi! my name is " + a;
//     return greeting
// }
// let name = "daniel";
// console.log(showGreeting(name))



//  class work ------ calculator exercise


// function calc(){
//     var a = parseInt(document.querySelector("#value1").value);
//      var b = parseInt(document.querySelector("#value2").value);
//       var opp = document.querySelector("#operator").value;

//       var calculate;

//       if (opp == "add") {
//         calculate = a + b;
//       } else if(opp == "min"){
// calculate = a - b;
//       }
//        else if(opp == "div"){
// calculate = a / b;
//       }
//        else if(opp == "mul"){
// calculate = a * b;
//       }

//     document.querySelector("#result").innerHTML= calculate;
// };



// TEMPLATE LITERAL -------
// let a = 5, b = 6;
// console.log(`sum of 5+6 is ${a + b} not ${a + b + 2}`);

// let world = "world";

// let string = "hello"  + world + "am here again" ;
// let template = `hello! ${world} am here again`
// // string.split;
// console.log(template, string)


// const user = {
//       name : "micheal",
//       age : 24,
// };
// document.write( `
// <div class ="user-card">
// <h2>${user.name}</h2>
// <p>age:  ${user.age}</p>
// </div>`);
// // console.log(userCard);


// const cake = {
//       type : "Sponge",
//       icing : false,
// };
// const message = `this is a ${cake.type}.. it has ${cake.icing ? 'some' : "no"} icing`;
// console.log(message)

// CREATING ELEMENT .....


// const p = document.createElement('p');
// p.textContent = "some text";
// p.setAttribute('id', 'element-insert');
// p.setAttribute('class','inner-paragraph');

// document.getElementById("result").append(p);

// function elementFromHtml(html){
//     const template = document.createElement('template')

//     template.innerHTML = html.trim();
// }


// const x = 'hello world';
// const capital = x.toUpperCase();
// document.write(capital);

let laptop = {
    cpu : '19',
    rat : 16,
    brand : 'hp',

    greet : function (){
        console.log('hello world')
    }
}

laptop.greet();


// some array methods....

const names = ['hassan', 'michael','joshua', 'bishop', 'gabriel'];
const containingH = names.some( names => {
    return names.includes('z')
});
console.log(containingH)
