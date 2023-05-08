/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

// Chiedere all’utente di inserire una parola

let parolaUser =prompt("inserisci una parola")

console.log(parolaUser);

// Creare una funzione per capire se la parola inserita è palindroma
function parolaPalindroma(parola) { // split la parola inserita e invertiamo la parola  
    if ( parola=== parola.split("").reverse().join("")) {
        return true;
      } else {
        return false;
      }
    
}
if (parolaPalindroma(parolaUser)) {
    console.log("la parola è palindroma");
} else {
    console.log("la parola non è palindroma");
}