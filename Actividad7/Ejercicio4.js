

const conversion = () =>
{
    var choice = Number(prompt("Elige la conversion que deseas \n 1.- Celcius a Farenheit \n 2.- Farenheit a Celcius"));


    if (choice == 1)
    {
        var value = Number(prompt("Introduce la temperatura que queres convertir"));
        //Fórmula	(0 °C × 9/5) + 32 = 32 °F
        console.log(`La temperatura ${value}°C es igual a ${(value*9/5)+32}°F`);
    
    }
    else if (choice == 2)
    {
        var value = Number(prompt("Introduce la temperatura que queres convertir"));
        //(32 °F − 32) × 5/9 = 0 °C
        console.log(`La temperatura ${value}°F es igual a ${(value-32)*(5/9)}°C`);
    }
    
    else
    {
        console.log("Introduce 1 o 2")
    }
}

conversion()