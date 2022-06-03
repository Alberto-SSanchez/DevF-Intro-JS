//Exercise 2

var inputNumber = Number(prompt("Enter a number "))
var counter = 1;

while(counter <= inputNumber)
{
    if((counter%5) === 0)
    {
        console.log(counter);
    }

    counter++;
}

/* -------------------------------------------------------------- */

//Exercise 3
var inputNumber = Number(prompt("Enter a number "))
var counter = 1;

do{
    if((counter%5) === 0)
    {
        console.log(counter);
    }

    counter++;
} while (counter <= inputNumber)


//Exercise 4

for(var counter = 1; counter <= 50; counter++)
{
    if((counter % 2) != 0)
    {
        console.log(`${counter} is ODD`)
    }
}