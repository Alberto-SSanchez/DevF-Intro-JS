// Ejercicios de Objetos y sus métodos básicos:



 // Del siguiente objeto:
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
 
    // 1. Muestra en pantalla el valor de la propiedad name mediante dot notation
    console.log(student.name);

    // 2. Muestra en pantalla el valor de la propiedad age mediante bracket notation
    console.log(student["age"]);

    // 3. Modifica el valor de la propiedad name y que el nuevo valor sea: "Steve Jobs"
    student.name = "Steve Jobs";
    console.log(student["name"]);

/*************************************************************************************************************************************************************** */


//  Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
//     Objeto de muestra:

   /* var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    }; */

    Object.defineProperties(student, {
        "name":{
            value: "David Rayy",
            enumerable: true
        },
        "sclass":{
            value: "VI",
            enumerable: true
        },
        "rollno":{
            vaue:12,
            enumerable:true
        }
    }
    )
    
    console.log(student)

/*************************************************************************************************************************************************************** */

// Verifica si la propiedad name se encuentra dentro del siguiente objeto:
     var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };

    //way1
    console.log(student.hasOwnProperty("name"));

    //way2
    console.log("name" in student);

    //way3
    console.log(student.name? true:false);

/*************************************************************************************************************************************************************** */



/** Escriba un programa de JavaScript para eliminar la propiedad rollno del siguiente objeto. 
 * Imprima también el objeto antes o después de eliminar la propiedad. 
 * Objeto para usar:*/
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };

    console.log(student);
    delete(student.rollno);
    console.log(student);

/*************************************************************************************************************************************************************** */

// Escriba un programa para modificar el valor de la segunda propiedad del siguiente objeto:
 
     var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
// La nueva edad debe ser 35
 student["age"] = 35;
console.log(student);

/*************************************************************************************************************************************************************** */

//Escriba un programa para añadir una nueva propiedad al siguiente objeto:
  var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };

    //La nueva propiedad debe ser: pet y agregue un valor, ejemplo: cat, dog.
    student.pet = "cat";
    console.log(student.pet);


/*************************************************************************************************************************************************************** */

//Crea un código para llenar un objecto vacio:
 const objeto = {}

 /*
 Con las siguiente propiedades:
    * color
    * tamaño
    * peso
    * cantidad
    * 
*/

console.log(objeto);

objeto.color = "blue";
objeto.tamanio = "grande";
objeto.peso = 10.5;
objeto.cantidad = 1;

console.log(objeto);

/*************************************************************************************************************************************************************** */

/*una función que reciba un objeto y un string…
El string va a ser el nombre de una propiedad, y
esa función tiene que validar si existe esa propiedad dentro del objeto que le mandes
la función debe retornar true o false*/

var Car = {
    wheels: 4,
    company: 'honda',
    name: 'civic',
    year: 2016
}

/*************************************************************************************************************************************************************** */   

/*Create an object that will be filled only by a function inside of it,
    and not from someone outside of it's function.. example:
let myObject = {
    myFunction: function ()... // This function is supposed to fill this object
}
myObject.myNewProp = "Hello world" // This should throw an exception or error because we don't want this object to be filled from outside...
It supposed to be filled using it's own function
Add any type of element on the object.. arrays, objects, int, strings, etc*/

var objectToFill = {
    addElement: function (property, value){this[property] = value}
};

objectToFill.addElement("nombre", "luis");
objectToFill.addElement("mascotas", ["perro", "gato"]);
console.log(objectToFill);