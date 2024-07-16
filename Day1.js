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
function checkP(num){
    let numStr = num.toString() ; 

    return numStr.split("").reverse().join("")
}
console.log(checkP(123));