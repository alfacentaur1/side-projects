const display = document.getElementById("display");
const range_display = document.getElementById("range_display");
const range_value = document.getElementById("myRange");

//returns on/off
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const include_numbers = document.getElementById("include");
const include_symbols = document.getElementById("includes");


range_value.addEventListener("input", ()=> {
    range_display.textContent = range_value.value; 
});

const lowercaseAlphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];


const uppercaseAlphabet = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", 
    "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

const digits = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

const symbols = [
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "[", "]", "{", "}", "|", ";", ":", ",", ".", "<", ">", "/", "?", "~", "`"
];

console.log(uppercase.checked);
console.log(lowercase.checked);
console.log(include_numbers.checked);
console.log(include_symbols.checked);





document.getElementById("generate").addEventListener("click",()=>{
    
    let len = range_value.value;
    let password = "";
    let used_letters = [];
    if(!uppercase.checked){
        for(let j = 0;j<uppercaseAlphabet.length;j++){
            used_letters.push(uppercaseAlphabet[j])
        }
    }
    if(!lowercase.checked){
        for(let j = 0;j<lowercaseAlphabet.length;j++){
            used_letters.push(lowercaseAlphabet[j])
        }
    }
    if(!include_numbers.checked){
        for(let j = 0;j<digits.length;j++){
            used_letters.push(digits[j])
        }
    }
    if(!include_symbols.checked){
        for(let j = 0;j<symbols.length;j++){
            used_letters.push(symbols[j])
        }
    }

    for(let i = 0;i<len;i++){
        password += used_letters[Math.floor(Math.random()*used_letters.length)];
    }
    display.innerText = password;
    console.log(used_letters);
    used_letters = [];

})
