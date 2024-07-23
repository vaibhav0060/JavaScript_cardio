// 1  reverse the Strings 
// function reverseStr(str) {
    // let revStr= str.split("").reverse().join("")
    // return revStr ; 
// let element = "";
//     for (let i = str.length; i >= 0; i--) {
//         element = element + str[i];
//     }
//     return element

// let revStr = "";
// for(let char of str){
//     revStr = char + revStr;

// }
// return revStr

// }
// console.log(reverseStr("reverse"));

// check palindrome 
// function checkP(num){
//     let numStr = num.toString() ; 

//     return numStr.split("").reverse().join("")
// }
// console.log(checkP(123));

// 
// use of for loops 
// let str = "vaibhav"; 
// let element = "";
// for (let i = str.length; i >=0 ; i--) {
//     element =  str[i] + element;
    
// }
// console.log(element);

// Capatalize a first  char of sentense 

let sentense  = "the world is so big" ; 
function capitalize(str){
    let strArr = str.split(" ");
    for (let i = 0; i < strArr.length; i++) {
        strArr[i] =  strArr[i].slice(0,1).toUpperCase() + strArr[i].slice(1) ; 
        
    }
    return strArr ; 

}
console.log(capitalize(sentense))
