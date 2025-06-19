async function getPost(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/3')
        const data = await response.json();
        console.log('title:',data.title);
        console.log('body:',data.body);
    }
    catch(error){
        console.error(error);
    }
}
getPost();

fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    headers:{
    'Content-Type': 'application/json'
    },
    body:JSON.stringify({
        title:'Hello',
        body:'This is test post',
        userID: 1
    })
})
.then(response=>response.json())
then(data=>console.log(data));