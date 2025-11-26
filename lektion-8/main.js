let userName = localStorage.getItem('user-name');
// prompt('vad heter du?');

if (!userName) {
  userName = prompt('vad heter du');
  localStorage.setItem('user-name', userName);
}
document.getElementById('namn').textContent = userName;

const visitCount = localStorage.getItem('visit-count') || 1; //default 1
localStorage.setItem('visit-count', Number(visitCount) + 1);

document.getElementById(
  'visits'
).textContent = `Detta har ditt besök nummer ${visitCount}.`;

document.getElementById('logout').addEventListener('click', () => {
  //localStorage.clear();
  localStorage.removeItem('user-name');
  localStorage.removeItem('visit-count');
  location.reload();
});

function two() {
  for (let index = 0; index < 10000; index++) {
    console.log('...');
  }
  console.log('två');
}

console.log('Ett');
two();
console.log('tre');

//Asynkront exempel

console.log('1  ');
setTimeout(() => console.log(2), 10);
console.log('3  ');

// https://icanhazdadjoke.com/
function handleJoke() {
  console.log(document.getElementById('joke').innerText);
}
async function getJoke() {
  const jokeResponse = await fetch('https://icanhazdadjoke.com/', {
    headers: { Accept: 'text/plain' },
  });
  const jokeText = await jokeResponse.text();
  document.getElementById('joke').innerText = jokeText;
  handleJoke(); //här kan vi läsa
}
getJoke();

document.getElementById('footer').innerText = '-----';

handleJoke(); //funkar inte efter som getJoke är async

async function addPageContent() {
  const resp = await fetch('./text.txt');
  console.log(await resp.text());
  document.getElementById('page-content').innerHTML = await resp.text();
}

addPageContent();
