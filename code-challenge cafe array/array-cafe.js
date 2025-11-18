const names = ['kaffe', 'Munk', 'Glass'];
const prices = [3, 3.5, 5];
const stock = [100, 24, 15];

const products = [
  { names: 'Kaffe', price: 3, stock: 100 },
  { names: 'chocolate', price: 3.5, stock: 15 },
  { names: 'tea', price: 2.5, stock: 10 },
];

console.log(`En ${names[1]} kostar ${prices[1]} ¢ vi har ${stock[1]}styckes`);

let htmlListItems = '';
for (let i = 0; i < names.length; i++) {
  htmlListItems += `<li> ${names[i]}</li>`;
}

htmlListItems = '';
for (const i in names) {
  //for in är bra när man behöver i
  htmlListItems += `<li> ${names[i]}</li>`;
}

// for (let i = 0; i < names.length; i++) {
//   document.getElementById('products').innerHTML += ` <li> ${names[i]}</li>`;
// }

// for (const product of products) {
//   htmlListItems += `<li> ${product.name} kostar ${product.price} ¢ vi har ${product.stock}</li>`;
// }

htmlListItems += '--';

for (const i in products) {
  htmlListItems += `<li> ${products[i].names} kostar ${products[i].price} ¢ vi har ${products[i].stock} st.</li>`;
}

document.getElementById('products').innerHTML += htmlListItems;
