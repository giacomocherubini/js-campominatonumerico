// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> da 1 a 100, con difficoltà 1 => da 1 a 80 con difficoltà 2=> da 1 a 50

// ottengo numeri random con range
function getRandomNumber(max){
  return Math.floor(Math.random()* max) +1;
}

// creo una lista di 16 numeri generati senza doppioni all'interno
var lista = [];
var numero;
var i = 0;
while(i < 16){
  numero = getRandomNumber(100);
  if(lista.includes(numero) == false){
    lista.push(numero);
    i++;
  }
}

console.log(lista);

// chiedo all'utente l'inserimento dei numeri
// l'utente inserisce i numeri finche non inserisce un numero vietato per un max di 84 inserimenti

var trovato = false;
var j = 0;
var num_utente;
var punteggio = 0;
while(j < 84 && trovato == false){
  num_utente = parseInt(prompt('inserisci un numero da 1 a 100'));
  if (lista.includes(num_utente)){
    trovato = true;
    alert('hai totalizzato ' + punteggio + ' punti');
  }else {
    punteggio += 1;
    alert('ok vai avanti'  + punteggio);

  }
  j++;
}
console.log(trovato);
alert('hai perso');
