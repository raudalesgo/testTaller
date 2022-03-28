let textto = '';



function countLetters(textArray){

    let count = 0;
    let temporalLetter = "";
    let retorno = "";

    if(textArray.length > 0){
    for (let i = 0; i < textArray.length; 
        i++) {
        
         temporalLetter = textArray[i];   
         if(textArray[i] == textArray[i + 1]){
            count++;
         } 
         if(textArray[i] != textArray[i + 1] || count >= 9){
            retorno = retorno + count + temporalLetter;
            count = 1;
         }     
      
    }
}

    return retorno; 
}

let letters = countLetters('AAAAAAAAAAAAABBCCCCDD');
console.log(letters);
