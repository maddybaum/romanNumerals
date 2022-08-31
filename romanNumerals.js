/*Write a function in romanNumerals.js that converts an integer (<= 1,000) to its Roman numeral equivalent.

For reference, these are the building blocks for how we encode numbers with Roman numerals:*/

function toRomanNumeral(n){
    let number = [];
    let dValue = n % 500;
    let cValue = n % 100;
    let lValue = n % 50

    if(dValue > 0){
    for(let i = 0; i <= dValue; i++){
        number.push('D')
    }
    let newNum = n - 500*dValue;
    let cValue = newNum % 100;

    if(cValue > 0){
    for(let i = 0; i <= cValue; i++){
        number.push('C')
    }}
    newNum = n - 100*cValue;


}