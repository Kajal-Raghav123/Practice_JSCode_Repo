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

// const fruits = ['apple', 'banana', 'apple'];

// const count = fruits.reduce((acc, curr) => {
//   acc[curr] = (acc[curr] || 0) + 1;
//   return acc;
// }, {});
// console.log(count)
// const users = [
//   { name: "Alice", age: 20 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 20 },
// ];
// const age = users.reduce((acc, curr) => {
//   if (!acc[curr.age]) {
//     acc[curr.age] = [];
//   }
//   acc[curr.age].push(curr.name);
//   return acc;
// }, {});
// console.log(age);

// ------day2

// const words = ["apple", "banana", "apple","orange","banana","apple"];
// const obj = words.reduce((acc,cur)=>{
//   acc[cur] = (acc[cur]|| 0) + 1;
//   return acc
// },{})

// console.log(obj)
// const users = [
//   {name: "Alice", age: 25},
//   {name: "Bob", age: 30},
//   {name: "Charlie", age:25}
// ];
// const group = users.reduce((acc, curr)=>{
// if(!acc[curr.age]){
//   acc[curr.age] = [];
// }
// acc[curr.age].push(curr.name)
// return acc

// },{})
// console.log(group)

// const students = [
//   { name: 'A', score: 78 },
//   { name: 'B', score: 92 },
//   { name: 'C', score: 89 }
// ];
// const highScore = students.reduce((max,curr)=>{
// if(curr.score > max.score){
//   max = curr
// }
// return max
// },students[0])

// console.log(highScore)

// const people = [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' }
// ];
// const id = people.reduce((acc,curr)=>{
//   acc[curr.id] = curr.name
//   return acc
// },{})
// console.log(id)
// const nested = [[1, 2], [3, 4], [5]];
// const flattned = nested.reduce((acc,curr)=>{
//   return acc.concat(curr)
// },[])

// console.log(flattned)
const data = [
  { name: 'Pen', tags: ['stationery', 'writing'] },
  { name: 'Eraser', tags: ['stationery'] }
];
// const tagsOut = data.reduce((acc,curr)=>{
// if(!acc[curr.tags]){
// acc.push(curr.tags)
// }
// return acc
// },[])
// console.log(tagsOut)
// const uniqueTag = data.reduce((acc,curr)=>{
// curr.tags.forEach(tag=>{
//   if(!acc.includes(tag)){
//     acc.push(tag)
//   }
  
// })
// return acc
// },[])
// console.log(uniqueTag)


// const age = users.reduce((acc,curr)=>{
//   if(!acc[curr.age]){
//     acc[curr.age]= []
//   }
//   acc[curr.age].push(curr.name)
//   return acc
// },new Map())
// console.log(age)
// const users = [
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 25 },
//   { name: 'Charlie', age: 30 },
//   { name: 'David', age: 25 },
// ];
// const age = users.reduce((acc,curr)=>{
//   if(!acc.has(curr.age)){
//     acc.set(curr.age,[])
//   }
//   acc.get(curr.age).push(curr.name)
//   return acc

// } ,new Map())
// const agegroup = Object.fromEntries(age)
// console.log(agegroup)
// const cartItems = [
//   { name: "Laptop", price: 50000, quantity: 1 },
//   { name: "Mouse", price: 1000, quantity: 2 },
//   { name: "Keyboard", price: 3000, quantity: 1 }
// ];
// const totalPrice = cartItems.reduce((acc,curr)=>{
// acc = acc + curr.price * curr.quantity
// return acc
// },0)

// console.log(totalPrice * 1.10) 
// const transactions = [
//   { type: "credit", amount: 5000 },
//   { type: "debit", amount: 1200 },
//   { type: "credit", amount: 2200 },
//   { type: "debit", amount: 800 }
// ];
// const netBalance = transactions.reduce((acc,curr)=>{
// if(curr.type === "credit" ){
//   acc = acc + curr.amount
// }else{
//   acc = acc - curr.amount
// }

// return acc
// },0)

// console.log(netBalance)
// const posts = [
//   { user: "alice", post: "Hello" },
//   { user: "bob", post: "Hi" },
//   { user: "alice", post: "Another one" },
//   { user: "alice", post: "Again" },
//   { user: "bob", post: "Cool!" }
// ];
// const countPost = posts.reduce((acc,curr)=>{
  
// if(!acc[curr.user]){
//  acc[curr.user] = 1;
// }else{
//   acc[curr.user]++
// }
// return acc
// },{})
// console.log(countPost)
// const movies = [
//   { title: "Inception", rating: 8.8 },
//   { title: "Interstellar", rating: 8.6 },
//   { title: "Dunkirk", rating: 7.9 }
// ];

