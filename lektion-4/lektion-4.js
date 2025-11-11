// Händelselyssnade - event lyssnare

// document.getElementById("btn").addEventListener('click', function(evt){
//   //evt är varibeln vi sparar klick eventet i (kan heta vad som helst)
//   //
// })

//Math.pow(4,2) = 4*4 = 16
document.getElementById('my-list').innerHTML += `<li> Ett sak till</li> `;
document.getElementById('my-list').innerHTML += `<li> Ett sak till 2</li> `;

//Arrays
//En  array är en sekventiell (numerad) lista värden, med 0 som  första nummer. Värdena kan i sin tur vara av vilken datatyp som helst.
const myArr = [2, 3, 5, 7, 11];
const myArr2 = [5, 'car', true, myArr]; //kan innehålla olika datatyper
let i = 1;
myArr2[i];
myArr2[3][2]; //multidimensionella arrays används

const colors = ['red', 'green', 'blue'];
console.log(colors[0]);
console.log(colors);
const saker = [1, 'hej', colors];
console.log(saker[2][0]);

// Ändra på arrays
colors[2] = 'yellow';
console.log(colors);

colors.push('purple');
console.log(colors);
console.log(colors.indexOf('yellow')); //2
console.log(colors.join('.. '));
console.log(colors.join(' and  '));
const str = 'item-1';
console.log(str.split('-'));
console.log(str.split('-')[1]);

const names = 'john , jane , lisa';

const namesArr = names.split(',');
console.log(namesArr);

const numbers = [9, 2, 3, 4, 5, 6, 47];
console.log(numbers.sort());

//Objekt  : Då en array kan innehålla flera värden kan ett objekt innehålla hela variabler med namn och allt.  Variabler i objekt kallas egenskaper eller properties (ibland också nyckel/värde -par (key/value-pairs))v lite beroende på sammanhanget
//ett
const person = {
  name: 'Ahmak',
  age: 8,
  likes: 'Frukost flingor',
};
console.log(`${person.name} likes ${person.likes} `);
console.log(`${person['name']} likes ${person['likes']} `);

const persons = [
  { name: 'Ahmak', likes: 'Frukost' },
  { name: 'Pushpa', likes: 'ödmjuk' },
  { name: 'bebisen', likes: 'girighet' },
];

console.log();

const color = [
  { name: 'red', hex: '#ff0000' },
  { name: 'green', hex: '#00ff00' },
  { name: 'red', hex: '#ff0000' },
];

color.push({ name: 'black', hex: '#000f00' });
color[1].hex;
console.log(color[1].hex);

//Iterera över arrays

//Det mesta traditionella (och ur datorns synvinkel effektivaste!) sättet är en vanlig

for (let i = 0; i < persons.length; i++) {
  const personsStr = ` <li> ${i} - ${persons[i].name} gillar ${persons[i].likes} </li> `;
  console.log(personsStr);
  document.getElementById('my-list2').innerHTML += personsStr;
}
