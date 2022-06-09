/**
 * Crea una función para encuentrar la diferencia de edad entre el miembro mas viejo y el más jóven de la familia
 * y regresa como resultado, sus respectivas edades y la diferencia de edad. 
 * 
 */

 const Family = [
    {
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56
    },
    {
      name: 'Rachel',
      age: 45
    },
    {
      name: 'Nate',
      age: 67
    },
    {
      name: 'Jeniffer',
      age: 65
    },
    {
      name: 'Martha',
      age: 25
    }
  ];

  function findAges(family)
  {
    ages = family.map(function(person){
        return person.age;
    })

    youngest = ages.sort(function(a,b){ return a-b})[0]
    eldest = ages.sort(function(a,b){ return b-a})[0]

    console.log(`The youngest member is ${youngest} old and the eldest is ${eldest} old`);
    console.log(`The difference between ages is ${eldest - youngest} years`);
    
    
  }

  findAges(Family);

/**
 * Del siguiente arreglo de numeros, retorna la suma de todos los que son positivos. 
 */

 const numbers = [ 1, -4, 12, 0, -3, 29, -150];

 const positiveNumbers = (numbers) =>{
   result =  numbers.filter((number) => {
        if(number>0){
            return number;
        }
    })

    console.log(result);
 }

 positiveNumbers(numbers);



/*
*
* Dadas dos matrices de enteros, encuentra qué elementos faltan en la segunda matriz de la primera matriz.

  Ejemplo

  La matriz es la lista original. Los números que faltan son

  matriz = [7,2,5,3,5,3]

  br = [7,2,5,4,6,3,5,3]

Los números que faltan en arr son [4,6]
*/

const originalMatrix = [7,2,5,4,6,3,5,3];
const secondMatrix = [7,2,5,3,5,3];


const missingItems = (original, second) => {

    let missingItems = [];

    original.forEach(element => {
        if(second.indexOf(element) == -1){missingItems.push(element)}
    });

    return missingItems;
}

missingItems(originalMatrix, secondMatrix);


/**
 * Del siguiente arreglo, retorna un objeto donde retorne unicamente los elementos sin repetir y el valor sea las ocurrencias
 * que encontró dentro de ese arreglo. 
 * 
 * 
 * Resultado esperado:
 *  {
      one: 4,
      two: 3,
      three: 1,
      ...
    }
 */

 const arr = ['one', 'two', 'one', 'one', 'two', 'three', 'five', 'seven', 'five', 'ten', 'nine', 'one', 'two', 'four'];




 /**
  * Write a function that combines two lists by alternatingly taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3]
  * Escribe una funcion que combine dos listas de arreglos alternando los elementos de cada una:
  * const a = [1,2,3]
  * const b = [a,b,c]
  * 
  * Resultado esperado:
  * 
  * 
  * [1,a,2,b,3,c]
  */
const a = [1,2,3]
const b = [a,b,c]
 
 function alternateArrays (arr1, arr2){
    

 }

 alternateArrays(a, b);