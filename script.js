// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

/*
il prezzo del biglietto è definito in base ai km (0.21 € al km)


va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/


/*MACRO TASK N.1
    - chiedere l'età 
    - chiedere i kilometri
*/

//Prompt x l'età
 const ages = Number(prompt('inserisci la tua vecchittudine'))
 console.log(ages);

//Prompt x i kilometri
const kilometers = Number(prompt('Quanta strada percorrerai'))
console.log(kilometers);


/*MACRO TASK N.2 
    - calcolare il prezzo in base ai kilometri
*/

const price = kilometers * 0.21 
console.log(price);


/*MACRO TASK N.3 
    - calcolare eventuali sconti sul prezzo del biglietto in base all'età
        - Variabili degli sconti 
        - condizioni in cui gli sconti si applicano
*/

const sconto_minori = 20
const sconto_anziani = 40
let final_price 

if (ages < 18) {
    //calcolo prezzo per mocciosi
    price_kid = (price / 100) * sconto_minori;
    final_price = (price - price_kid).toFixed(2);
    console.log(final_price);  
}

else if (ages > 65) {
    //calcolo prezzo per nonnetti
    price_old = (price / 100) * sconto_anziani;
    final_price = (price - price_old).toFixed(2);
    console.log(final_price);  
}

else {
    //prezzo pieno
    final_price = price
    final_price = final_price.toFixed(2)
    console.log(final_price);
}


//prezzo finale che appare in pagina
    
alert(final_price + ' €')



