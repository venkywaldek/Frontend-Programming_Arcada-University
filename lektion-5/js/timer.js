// let counter = Number(document.getElementById('prefNum'));
let counter = 30;
let myTimer = null;
const time = 30;
myTimer = setInterval(() => {
  console.log(counter);
  if (counter <= 0) {
    document.getElementById('output').innerHTML += `<li> Tiden är ute</li>`;
    clearInterval(myTimer);
  } else {
    document.getElementById(
      'output'
    ).innerHTML += `<li> Tiden är ${counter} sekunder</li>`;
  }

  counter--;
}, 1000);

document.getElementById('stop-timer').addEventListener('click', (e) => {});

const imgFile = document.getElementById('mole').getAttribute('src');

console.log(imgFile);
