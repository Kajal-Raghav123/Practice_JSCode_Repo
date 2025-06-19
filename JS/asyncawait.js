// function wait(ms){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve()
//         },ms)
//     })
// }
// async function delayMessage(){
//     await wait(2000);
//     console.log('hello after 2 seconds')
// }
// delayMessage();
// function step1(){
//     return Promise.resolve('step1 is done')
// }
// function step2(){
//     return Promise.resolve('step2 is done')
// }
// function step3(){
//     return Promise.resolve('step3 is done')
// }
//  async function runSteps(){
//      console.log(await step1())
//      console.log(await step2())
//      console.log(await step3())
//  }
//  runSteps()