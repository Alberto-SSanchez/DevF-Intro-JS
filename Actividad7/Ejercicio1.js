const phrase = prompt("Enter a phrase: ");
const word = prompt("Enter a word to look for in the phrase");

const lookForWord = (phrase, word) =>
{
     if( phrase.indexOf(word) != -1){return true}
     else{return false}
}

console.log(lookForWord(phrase, word))