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
const list_name_checkbox = [capital_letter, lower_letter, special_character, number];
const list_elements = [capital_letters, lower_letters, special_characters, numbers];

function randomValue(str) {
    return Math.floor(Math.random() * str);
}

function character_generate(checkbox, elements) {
    if (checkbox.checked) {
        return elements.charAt(randomValue(elements.length));
    } else {
        return "";
    }
}
function generate() {

    if (password_length.value < 8 || password_length.value == "") password_length.value = 8;

    if (special_character.checked || capital_letter.checked || lower_letter.checked || number.checked) {
        let password = "";
        while (password.length < password_length.value) {
            let i = randomValue(4);
            password += character_generate(list_name_checkbox[i], list_elements[i]);
        }

        result_field.innerHTML = password;

    } else {
        alert("- Marque pelo menos uma caixa");
    }

}