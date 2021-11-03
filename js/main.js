//PARI E DISPARI

//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).Sommiamo i due numeriStabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)Dichiariamo chi ha vinto.


//L'utente sceglie un numero da 1 a 5



let newNum = parseInt(prompt(`Inserisci un nuemro da 1 a 5`));
    console.log(newNum);

//numero computer

    const pcNumber = getRandomNumber(1,5);
    console.log(`num computer`, pcNumber);

//calcola somma

const somma = newNum + pcNumber;

//check vincitore

let sceltaUtente = '';

if(sceltaUtente === check(somma)){
    console.log(`vince il giocatore`)
}else{
    console.log(`vince il computer`);
}



//genera random number

function getRandomNumber(min , max){ 
    return Math.floor(Math.random() * (max - min +1))+ min;

}


//verifica se pari o dispari


function check(num){
    if(num % 2 === 0){
        return 'pari';
    }
    return 'dispari';
}