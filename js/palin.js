

//PALINDROMA
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

//chiedere una parola

let userWord = prompt('Inserisci una parola');
console.log('parola originale:',userWord);

//generare parola al contrario

const reverseWord = reverseChars(userWord);
console.log(reverseWord);

//controllo se è palindroma

if (userWord === reverseWord){
    console.log('palindroma');
}else{
    console.log('NON palindroma');
}

function reverseChars(word){
    let reverse = '';
    for (let i =  word.length - 1; i >= 0;i--){
        reverse += word[i];

        // const reverse = word.split('').reverse().join('');
    }   
    return reverse;
}