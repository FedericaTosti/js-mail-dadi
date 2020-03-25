// Gioco dei dadi, chi fa di più vince.


// messaggio all'utente
alert("Benvenuto! Questo è il gioco dei dadi, premi ok per iniziare a giocare.");

// creo variabile numero utente
var dadoUtente = Math.floor(Math.random() * 6) + 1;
// creo variabile numero pc
var dadoPc = Math.floor(Math.random() * 6) + 1;
// mostro in pagina i numeri usciti
alert("Giocatore hai lanciato il dado, il tuo numero è: " + dadoUtente + ", premi ok per continuare.");
alert("Il pc ha lanciato il dado, il numero uscito è: " + dadoPc + ".");
// per capire chi ha vinto (if else) e stampo il risultato
if (dadoUtente > dadoPc) {
  document.getElementById("dado").innerHTML = "Complimenti! Hai vinto!";
} else if (dadoUtente < dadoPc) {
  document.getElementById("dado").innerHTML = "Peccato! Hai perso!";
} else {
  document.getElementById("dado").innerHTML = "Nessun vincitore! I numeri usciti sono uguali!";
}


console.log(dadoUtente, dadoPc);
