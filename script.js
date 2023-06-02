let password_length = document.getElementById("password_length");
let special_characters = document.getElementById("special_characters");
let capital_letters = document.getElementById("capital_letters");
let lower_letters = document.getElementById("lower_letters");
let numbers = document.getElementById("numbers");
let result_field = document.getElementById("result_field");

function randomValue(str) {
    return Math.floor(Math.random() * str.length);
}