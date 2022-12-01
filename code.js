// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}




function sayHello(input){

    if(typeof input ==="string"){
        return `Hello,${input}!`
    } else if(input == true){
        return "Hello, World"
    }
    else if(input === false){
        return "Hello, World"
    }
    else {
        return "Hello, World"
    }
    // if(input === "Pat"){
    //     return `Hello,${input}!`
    // }else if(input === "Alex"){
    //     return `Hello,${input}!`
    // }

}


sayHello("Alex")
sayHello("Pat")
sayHello("Jane")
sayHello(true)
sayHello(null)
sayHello(2.3)
sayHello("")
sayHello("5")
sayHello([1,2,3,4])
