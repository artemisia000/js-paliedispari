//PARI E DISPARI


//L'utente sceglie un numero da 1 a 5



const newNum = parseInt(prompt(`Inserisci un nuemro da 1 a 5`));
    console.log(`newNumber`);


//generare numero random da 1 a 5

for(let  i = 0; i < 5; i++ ) {

    //invocazione
    const randEnd = getRandomNumber(0, 5);
    console.log(randEnd);

}

//definizione funzione

function getRandomNumber(min,max ){
    const rand = Math.floor(Math.random() * (max - min +1))+ min;
    console.log(`rand`);
    return rand;
    
}

//somma


 somma = '';

 function somma (newNum , randEnd ){
     const total = newNum + randEnd;
     console.log(total);
 }

//definire se è pari o dispari


 const showMe = check(somma);
    console.log(`E' uscito il numero ${showMe}`);


    //definizione
    function check(num){
    if(num % 2 === 0){
        return 'pari';
    }
    return 'dispari';
}

//mostra il vincitore

const winner  = document.getElementById(`Il vincitore è${somma}`);
