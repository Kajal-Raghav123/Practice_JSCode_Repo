// async function getPost(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/3')
//         const data = await response.json();
//         console.log('title:',data.title);
//         console.log('body:',data.body);
//     }
//     catch(error){
//         console.error(error);
//     }
// }
// getPost();

// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: 'POST',
//     headers:{
//     'Content-Type': 'application/json'
//     },
//     body:JSON.stringify({
//         title:'Hello',
//         body:'This is test post',
//         userID: 1
//     })
// })
// .then(response=>response.json())
// then(data=>console.log(data));

// async function getComments(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
//     const data = await response.json()
//     data.forEach(content=>{
//         console.log(`email:${content.email}`)
//         console.log(`body:${content.body}`)
//     })
//     }
//     catch(error){
//         console.error(error)
//     }
// }
// getComments()

async function getAPI(){
   try{
     const response = await fetch('https://jsonplaceholder.typicode.com/posts/123456')
     if(!response.ok){
         throw new error('Page not found')
     }
    const data = await response.json;
    console.log(data)
   }
   catch(error){
if(error.message === 'Page not found'){
     console.log("Post not found!");
    } else {
      console.log("Network error:", error.message);
    }
}
}
getAPI();