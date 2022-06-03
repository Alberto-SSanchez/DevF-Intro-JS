//Exercise1

var iterArreglo = [1,4,6,10,22,55,46,2,50];

for (let index = 0; index < iterArreglo.length; index++) 
{
    if(iterArreglo[index] > 3)
    {
        console.log(iterArreglo[index]);
    }
}

//Exercise2
var arrayToFill = [];

while(arrayToFill.length < 5)
{
    arrayToFill.push(iterArreglo.sort()[arrayToFill.length])
}

console.log(arrayToFill)


//Exercise3
var myOrderedArray = arrayToFill.sort(function(a, b){return a - b}); //replace by b-a to change the order
for (let i = 0; i < myOrderedArray.length; i++) 
{
    console.log(myOrderedArray[i]);
    
}