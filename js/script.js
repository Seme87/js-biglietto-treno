// CHIEDERE ALL'UTENTE ETA'
const age = Number( prompt("inserisci la tua età") );
// CHIEDERE ALL'UTENTE LA DISTANZA IN KM'
const chilometers = Number( prompt("inserisci la distanza in km") );
//PREZZO DEL BIGLIETTO
let price = (chilometers * 0.21);
console.log(price);21

//PREZZO DEL BIGLIETTO SE L'ETA' DELL'UTENTE E MINORE O UGUALE A 18 ANNI O MAGGIORE UGUALE DI 65
if( age <= 18 ) {
    price = ( chilometers * 0.21 ) * 0.20 ;
    console.log( price );
}