console.log('JS OK');
// | Chiediamo all'utente il suo nome, cognome, colore preferito ed infine generiamo sulla pagina una password contenente queste tre cose seguite da 21.

/*
 1 - Chiedi all’utente il suo nome
 2 - poi chiedi il suo cognome
 3 - poi chiedi il suo colore preferito
 4 - Infine scrivi sulla pagina nomecognomecolorepreferito21
*/

//Prendo l'elemento dalla pagina
const targetElement = document.getElementById('target');
console.log('targetElement');

//Chiedo il nome all'utente
const firstName = prompt('Come ti chiami?', 'Federico');
console.log(firstName);

//Chiedo il cognome all'utente
const lastName = prompt('Qual è il tuo cognome?', 'Guadagnoli');
console.log(lastName);

//Chiedo il colore preferito all'utente
const favouriteColor = prompt('Qual è il tuo colore preferito?', 'Verde');
console.log(favouriteColor);

//Creo variabile 21
const  lastNumbers = 21;
console.log(String(lastNumbers));

//Stampo in pagina ( Senza spazio fra le parole)
targetElement.innerText = `${firstName}${lastName}${favouriteColor}${lastNumbers}`;



/*  DECOMMENTAMI IN CASO L'ESERCIZIO RICHIEDESSE SPAZIO FRA LE PAROLE!

  //Stampo in pagina ( Spazio fra le parole)
 
      targetElement.innerText = `${firstName} ${lastName} ${favouriteColor} ${lastNumbers}`;

 */
