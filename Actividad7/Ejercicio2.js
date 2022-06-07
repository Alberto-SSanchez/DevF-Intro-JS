const numbers = [1,2,3,4,10,11];

const addition = (myArray) => 
{
    var result = 0;
    for (let index = 0; index < myArray.length; index++) 
    {    
        result += myArray[index];   
    }

    return result;
}

console.log(addition(numbers));