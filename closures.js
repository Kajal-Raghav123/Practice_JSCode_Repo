// function outer(){
//     let name ='Kajal'
//     function details(){
//         console.log(name)
//     }
//     return details
// }
// const fun = outer()
// fun()
// function createCounter()
// {
//      let count = 0
//     return function increase(){
//         count++
//         console.log(count)
//     }
// }
// const fun = createCounter()
// fun()
// function makeCounter() {
//   let count = 0;
//   return function() {
//     return count++;
//   };
// }

// const counter = makeCounter();
// console.log(counter()); // ?
// console.log(counter()); // ?

// let count = 0;
// function mul() {
//     return count++;
//   };

//   console.log(mul())
// let count = 0;
// let result = count++;
// console.log(result); // 0
// console.log(count); 
// function outer(){
//     let name = "JavaScript"
//     function inner(){
//         console.log(name);
//     }
//     return inner;
// }
// const funcCall = outer();
// funcCall();