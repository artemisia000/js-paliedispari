

//PALINDROMA


let userWord = prompt(`Inserisci una parola`);




const reverseWord = palin(userWord);
console.log(reverseWord);


function palin(word){
    let reverse = '';


for(let i = word.length - 1;i >= 0;i--){
    console.log(word[i]);
    reverse += word[i];
}

return reverse;
}

const regularWord = palin1(userWord);
console.log(regularWord);



function palin1(word){
    let regular = '';


for(let i = word.length + 1;i <= 0;i++){
    console.log(word[i]);
    regular += word[i];
}

return regular;
}