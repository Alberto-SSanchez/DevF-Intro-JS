//Exercise1
var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion'];
var comingSoonAnimals = ['panter', 'dragon', 'turtle'];

var concatArray = animals.concat(comingSoonAnimals);
console.log(concatArray);

//Exercise2
var arr = [4,6,1,0,8,2];
var sortedArray = arr.sort(function (a,b){return a-b})

console.log(sortedArray)


//Exercise3
// animals.unshift("cow"); // to insert item at the start of the array 
animals.push("cow"); // inserts item at the end of the array
console.log(animals);

//Exercise4
animals.shift();
console.log(animals);