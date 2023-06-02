let password_length = document.getElementById("password_length");
let special_character = document.getElementById("special_characters");
let capital_letter = document.getElementById("capital_letters");
let lower_letter = document.getElementById("lower_letters");
let number = document.getElementById("numbers");
let result_field = document.getElementById("result_field");

const capital_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower_letters = "abcdefghijkmnopqrstuvwxyz"
const special_characters = "@#$%&*()<>/=+-_.";
const numbers = "0123456789";

function randomValue(str) {
    return Math.floor(Math.random() * str.length);
}

function character_generate(checkbox, elements) {
    if (checkbox.checked) {
        return elements.charAt(randomValue(elements));
    } else {
        return "";
    }
}

password_length.value = 8;

function generate() {

    if ((password_length.value != "" && password_length.value != 0) && (special_character.checked || capital_letter.checked || lower_letter.checked || number.checked)) {
        
        let password = "";

    } else {
        alert("- A quantidade de caracteres deve ser maior ou igual a 8\n- Marque pelo menos uma caixa");
    }

}