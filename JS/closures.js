function outer(){
    let name ='Kajal'
    function details(){
        console.log(name)
    }
    return details
}
const fun = outer()
fun()
