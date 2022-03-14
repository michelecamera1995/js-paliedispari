console.log("js-ok")

//  Chiedere all’utente di inserire una parola
//  Creare una funzione per capire se la parola inserita è palindroma


// funzione
function checkPalindrome(string) {

    // controllo la lunghezza della stringa.
    const len = string.length;

    // loop fino a metà stringa.
    for (let i = 0; i < len / 2; i++) {

        // controllo se la metà della stringa è uguale all'altra.
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// input dell'utente.
const string = prompt('Enter a string: ');

// valore funzione
const value = checkPalindrome(string);

console.log(value);


// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


let even = false;
let odd = false;

// l'utente inserisce un numero
let userOddEven = parseInt(prompt("scegli pari o dispari!"));

if (userOddEven.value === pari) {
    even = true;
} if (userOddEven.value === dispari) {
    odd = true;
}

// l'utente inserisce un numero
let usernumber = parseInt(prompt("inserici un numero!"));

// controllo che il numero immesso dall'utente sia da 1 a 5
if (usernumber <= 5 && usernumber >= 1) {
    console.log("Your number (" + usernumber + ")  matches requirements");
    if (usernumber % 2 === 0 && even === true) {
        let numeroDispari
        console.log("User selected even number!");
    }
    else if (odd === true) {
        console.log("User selected odd number!");
    }
} else if (isNaN(usernumber)) {
    console.log("It is not a number. Please enter a number from 1 to 5");
} else {
    console.log("Your number (" + usernumber + ") is not between 1 and 5");
}

// controllo che il numero immesso dall'utente sia pari o dispari


//genero il numero random del PC

const pcnumber = generaNumeroRandom(1, 5);

function generaNumeroRandom(min, max) {

    const range = max - min + 1;

    const generatedNumber = Math.floor(Math.random() * range) + min;

    return generatedNumber;

}

//sommo i due numeri

let somma = 0;

somma = pcnumber + usernumber;

//controllo che il risulato sia pari o dispari

function gameResult(number) {
    if (number % 2 === 0) {
        return 'Pari';
    } else {
        return 'Dispari';
    }
}

const evenOdd = gameResult();

console.log("il risultato è:", evenOdd);

//vincitore

if (somma % 2 === 0 && usernumber % 2 === 0) {
    console.log("vince giocatore!")
} else if (somma % 2 === 1 && usernumber % 2 === 1) {
    console.log("vince giocatore!")
} else {
    console.log("vince computer!")
} 