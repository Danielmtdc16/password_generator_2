let password_length = document.getElementById("password_length");
let special_characters = document.getElementById("special_characters");
let capital_letters = document.getElementById("capital_letters");
let lower_letters = document.getElementById("lower_letters");
let numbers = document.getElementById("numbers");
let result_field = document.getElementById("result_field");

function randomValue(str) {
    return Math.floor(Math.random() * str.length);
}

function generate() {

    if ((password_length.value != "" && password_length.value != 0) && (special_characters.checked || capital_letters.checked || lower_letters.checked || numbers.checked)) {
        
        

    }

}