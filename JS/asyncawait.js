function wait(ms){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve()
        },ms)
    })
}
async function delayMessage(){
    await wait(2000);
    console.log('hello after 2 seconds')
}
delayMessage();