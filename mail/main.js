// Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;

//
// // messaggio all'utente
// alert("Gentile utente, ricorda di inserire la tua mail per verificare la tua identità");
// // creo variabile e chiedo all'utente di inserire la sua mail
// var mailSocio = prompt("Inserisci qui la tua mail");
//
// console.log("Mail inserita: " + mailSocio);
// // creo il mio array con la lista delle mail
// var array = ["nome1@libero.it","nome2@libero.it","nome3@libero.it","nome4@libero.it","nome5@libero.it","nome6@libero.it","nome7@libero.it"];
//
// console.log("Elementi array: " + array);
// // creo variabile e la setto già falsa
// var copia = false;
// // cerco nell'array la mail inserita
// for (var i = 0; i < array.length; i++) {
//   if (mailSocio === array[i]) {
//     copia = true;
//   }
// }
//
// console.log("Mail inserita nell'array: " + copia);
//
// // stampo il risultato (if else)
// if (copia) {
//   document.getElementById("mail").innerHTML = "Bentornato socio! La sua identità (" + mailSocio + ") è stata verificata.";
// } else {
//   document.getElementById("mail").innerHTML = "Mi dispiace utente, pare che la sua mail (" + mailSocio + ") non sia presente nei nostri archivi.";
// }




// Altra versione
// messaggio all'utente
alert("Gentile utente, ricorda di inserire la tua mail per verificare la tua identità");
// creo variabile e chiedo all'utente di inserire la sua mail
var mailSocio = prompt("Inserisci qui la tua mail");

console.log("Mail inserita: " + mailSocio);
// creo il mio array con la lista delle mail
var array = ["nome1@libero.it","nome2@libero.it","nome3@libero.it","nome4@libero.it","nome5@libero.it","nome6@libero.it","nome7@libero.it"];

console.log("Elementi array: " + array);
// cerco nell'array la mail inserita (if else) e stampo il risultato
for (var i = 0; i < array.length; i++) {
  if (mailSocio === array[i]) {
    document.getElementById("mail").innerHTML = "Bentornato socio! La sua identità (" + mailSocio + ") è stata verificata.";
    break
  } else{
     document.getElementById("mail").innerHTML = "Mi dispiace utente, pare che la sua mail (" + mailSocio + ") non sia presente nei nostri archivi.";
  }
}
