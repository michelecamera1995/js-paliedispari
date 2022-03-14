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



