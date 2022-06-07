var input = prompt("Enter a word, phrase or number");

const isPalindrome = (input) => 
{
    var palindrome = [];
    var word = [];
    
    for (let index = (input.length -1); index >= 0; index--) 
    {
        palindrome.push(input[index]);
    }

    for (let index = 0; index < input.length; index++) 
    {
        word.push(input[index]);
    }

    console.log(palindrome);
    console.log(word);
    
    if(word == palindrome)
    {
        console.log(`${input} is a palindrome`);        

    }
    

}

isPalindrome(input);