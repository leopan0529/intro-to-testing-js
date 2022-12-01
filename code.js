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



function isFive(input){
    if (input ==5){
        return true
    }
    else {
        return false
    }
}


function isEven(input){
    if (input %2 === 0){
        return true
    }
    else {
        return  false
    }
}

function isVowel(input){

    if(typeof input === "string" && input.length===1){
        return true
    }
    else {
        return false
    }

}


function add(a,b){
    if(parseFloat(typeof a) && parseFloat(typeof b)  === "number"){
        return parseFloat(a)+parseFloat(b)
    }
    else {
        return NaN
    }


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

isFive(5);
isFive(7)
isFive("8")
console.log(isFive("5"))


isEven(2);

isEven(-4);
isEven(3);
isEven("banana");
isEven("8");
isEven(Infinity);
isEven(true);
isEven(false);
isEven()


isVowel("a");
isVowel("A");
isVowel("y");
isVowel(4);
isVowel(true);
isVowel(false)
isVowel("banana");
isVowel()

console.log(isVowel("banana"),'banana');


add(2, 3);
add(-3, -9);
add("5", 6);
add("-4", "10")
console.log(add("banana", "split"));
console.log(add(2, "apples"));
console.log(add(),2222)
