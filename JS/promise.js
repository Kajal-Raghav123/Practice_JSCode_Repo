// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Inside timeout");
//   }, 1000);
// });

// promise.then((res) => {
//   console.log(res);
// });

// Promise.resolve("Start")
//   .then((res) => {
//     throw new Error("Something bad");
//   })
//   .catch((err) => {
//     console.log("Caught:", err.message);
//   });

// Promise.resolve(5)
//   .then((value) => {
//     return value * 2;
//   })
//   .then((value) => {
//     return value + 3;
//   })
//   .then((value) => {
//     console.log(value);
//   });

// const promise = new Promise((resolve, reject) => {
//   resolve("First");
//   reject("Second");
//   resolve("Third");
// });

// promise.then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Done after 2s");
//   }, 2000);
// });

// console.log("Start");

// promise.then((res) => {
//   console.log(res);
// });

// console.log("End");

// const rejectPromise = new Promise((resolve,reject)=>{
//     reject("Error occured")
// })
// rejectPromise.then((data)=>{
//     console.log(data)
// })

// const promise = new Promise((resolve,reject)=>{
//     resolve("Success")
// })
// promise.then((result)=>{
//     console.log(result)
// })
// const myPromise = new Promise((resolve,reject)=>{
//     const success = true;
//     if(success){
//         setTimeout(()=>{
//          resolve('Success!');
//         },3000)
//     }
//     else{
//         reject('Something went wrong....')
//     }
    
// })
// myPromise.then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.error(error)
// }   )
// const promise = new Promise((resolve,reject)=>{
//     const data = true;
//     if(data){
//         setTimeout(()=>{
//             resolve("Data received")
//         },1000)
//     }
//     else{
//         reject("Something went wrong")
//     }
// })
// promise.then((result)=>{
//     console.log(result)
// })
// .catch((err)=>{
//     console.error(err);
// })


// const mypromise = function getPromiseData(){
//     return new Promise((resolve,reject)=>{
//      const data = true;
//      if(data){
//       setTimeout(()=>{
//         resolve("Data received")
//       },1000)
//      }
//      else{
//      reject("Something went wrong!")
//      }
//     })
// }

// mypromise().then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.error(error)
// })

function step1(){
    return new Promise((resolve)=>{
        resolve("Step 1 compelete");
    })
}
function step2(prevres){
   return new Promise((resolve)=>{
    resolve("Step 2 got:"+ prevres)
   })
}
function step3(prevres){
    return new Promise((resolve)=>{
        resolve("Step 3 got:"+ prevres)
    })
}
step1().then((res1)=>{
    return step2(res1)
})
.then((res2)=>{
    return step3(res2)
})
.then((finalResult)=>{
    console.log(finalResult)
})