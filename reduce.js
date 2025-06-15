// const arr = [1,2,3,4,5];

// const sum = arr.reduce((sum, curr)=>{
//     return sum + curr;
// },0);
//  console.log(sum)

//  const arr2 = [2,3,4]
//   const multiply = arr2.reduce((mul,curr)=> mul*curr,1);
//   console.log(multiply);
//   const arr = [5, 9, 2, 7]
//   const max = arr.reduce((acc, curr)=>{
//     if(curr > acc){
//         acc = curr
// //    return acc;
//     }
//  return acc;
//   },0)
//   console.log(max)

// const arr = [3,5,6];
// const max = arr.reduce((acc,curr)=>curr > acc? curr:acc ,0);
// console.log(max)

// const arr = [1, 2, 4, 5, 6,4,10]
// const evenNum = arr.reduce((acc,curr)=>{
//  if(curr%2 === 0){
//     acc += 1
//  }
//  return acc
// },0)
// console.log(evenNum)

// const str = ['H', 'e', 'l', 'l', 'o']
// const message = str.reduce((acc,curr)=> acc + curr,"")
// console.log(message)

const fruits = ['apple', 'banana', 'apple'];

const count = fruits.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
console.log(count)