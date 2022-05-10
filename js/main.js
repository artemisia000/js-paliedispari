//PARI E DISPARI

//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).Sommiamo i due numeriStabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)Dichiariamo chi ha vinto.


//L'utente sceglie un numero da 1 a 5

let newNum = prompt('Inserisci pari o dispari').trim().toLowerCase();
    

    while( (newNum !== 'pari') && (newNum !== 'dispari') ){

        newNum = parseInt(prompt('Parola NON valida').trim().toLowerCase());
    }
    console.log(newNum);

    //numero player da 1 a 5
    let numeroUtente = parseInt(prompt('Inserisci un numero da 1  a 5'));
    console.log('Utente:' ,numeroUtente);

    
    //numero computer da 1 a 5
    const numComputer = getRandNum(1 , 5);
    console.log('Computer:' ,numComputer);

    //Calc somma
    const somma = numeroUtente + numComputer;
    console.log('Somma:' ,somma);

    //check vincitore
    if( numeroUtente === checkEvenOrOdd(somma)){
        console.log('vince giocatore');
    }else{
        console.log('vince computer');
    }
    


    //get random integer
    function getRandNum(min , max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    //check even or odd number
    function checkEvenOrOdd(number){
        
        if( number % 2 === 0 ){
            return 'pari';
        }
        return 'dispari';
    }










