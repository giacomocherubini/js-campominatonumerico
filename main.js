// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> da 1 a 100, con difficoltà 1 => da 1 a 80 con difficoltà 2=> da 1 a 50

// creo un array di numeri vietati
var mine = [];

// creo un ciclo for che generi 16 numeri casuali inserendoli nell'array mine solo se sono diversi dagli altri
for (var i = 0; i < 16; i++) {
  var random_number = Math.floor(Math.random() * 100) +1;
if (random_number != mine[i]) {
  mine.push(random_number);
 }
}

var number100 = [];
Array.prototype.push.apply(number100, mine);
console.log(number100);
console.log(mine);

var   prova_numero = prompt("prova un numero");
