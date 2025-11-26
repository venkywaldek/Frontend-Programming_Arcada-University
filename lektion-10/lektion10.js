console.log('hi');

async function getJoke() {
  const resp = await fetch('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' }, //headers är en object
  });
  const jokeObj = await resp.json();
  console.log(resp);
  document.getElementById('joke').innerText = jokeObj.joke;
}

getJoke();

//{"id":"99MZvHJJtzd","joke":"Why don't sharks eat clowns?  Because they taste funny.","status":200}

const product = { name: 'kaffe', price: 2, stock: 5 };
console.log(product);

const productJSON = JSON.stringify(product);
console.log(productJSON);

//Teckensträng med JSON
const jsonString = `{"name":"kaffe","price":2,"stock":5}`;
const productObj = JSON.parse(jsonString);
productObj.price = 3;
console.log(productObj);

console.log(
  JSON.stringify([
    { name: 'kaffe', price: 3, stock: 100 },
    { name: 'Munk', price: 3.5, stock: 15 },
    { name: 'Glass', price: 4, stock: 45 },
  ])
);
