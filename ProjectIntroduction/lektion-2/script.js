//
const piName = 'Pi';
const piValue = 3.14;
const diametern = 7;
const userName = 'Venkat';

alert('hej');
//Gamal sättet att göra
console.log('The value of ' + piName + ' is ' + piValue);

//Nytt sättet att göra med temperal literals
console.log(`The value of  ${piName}   is  ${piValue}`);

//man också göra programmatisk uträkning i temparal literals
console.log(`Min circkel har omkretsen ${diametern * piValue}`);

let count = 0;
function clickCounter() {
  count++;

  console.log(`Hello ${userName} ,du har klickat ${count} gånger`);
}

function hello() {
  let name = prompt('Vad heter du?');
  alert(`Morjens ${name}!`);
}

function nameHandler() {
  //const namn = document.getElementById('namn').value;
  const namn = document.querySelector('#name-form').value;
  //console.log(`Hej ${namn}`);
  document.getElementById('name-output').innerHTML = `Hej ${namn}`;
}
