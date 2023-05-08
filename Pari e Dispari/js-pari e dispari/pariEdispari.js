/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.*/



// L’utente sceglie pari o dispari 
const sceltaUser=prompt("Scegli tra pari o dispari")


// inserisce un numero da 1 a 5.
const numeroUser =parseInt(prompt("Insercisci un numero da 1 a 5!"))
console.log(numeroUser);

// Generiamo un numero random per il computer usando una funzione
function numRandomPc (min, max) {

   const numeroPc = Math.floor(Math.random() * (max - min) ) + min;
    
   return numeroPc;
}
console.log(numRandomPc(1, 5));
// Sommiamo i due numeri
 let somma = numeroUser + numRandomPc (1, 5);
    console.log(somma);

// Stabiliamo se la somma dei due numeri è pari o dispari 
//    if (numero % 2 === 0 ){
//     return  "pari";
//    } else {
//     return  "dispari";
//    }
// Dichiariamo chi ha vinto.