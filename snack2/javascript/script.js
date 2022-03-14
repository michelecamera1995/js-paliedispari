console.log("js-ok")

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


let pari = false;
let dispari = false;

// l'utente inserisce un numero
let userOddEven = prompt("scegli pari o dispari!");

if (userOddEven === pari) {
    pari = true;
} if (userOddEven === dispari) {
    dispari = true;
}

console.log('User choice: ' + userOddEven);

// l'utente inserisce un numero
let usernumber = parseInt(prompt("inserici un numero!"));

// controllo che il numero immesso dall'utente sia da 1 a 5
if (usernumber <= 5 && usernumber >= 1) {
    console.log("Your number (" + usernumber + ")  matches requirements");
    if (usernumber % 2 === 0 && pari === true) {
        let numeroDispari
        console.log("User selected even number!");
    }
    else if (dispari === true) {
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