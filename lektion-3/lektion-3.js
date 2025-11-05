function greeter(userName) {
  let greeting = '';

  console.log(`Hello ${userName}`);
  document.getElementById('greeter-output').innerHTML = `Hej ${userName}`;
  if (userName == 'Venkat') {
    greeting = 'Dig känner jag!';
  } else if (userName == 'rosalie') {
    greeting = 'Hur mår katten';
  } else {
    greeting = 'vem är du ?';
  }
  return `Hej ${userName} ! ${greeting}`;
  // console.log(greeting);
  // return greeting;
}

const greet = greeter('Venkat');
document.getElementById('greeter-output').innerHTML = greet;
document.getElementById('other-output').innerHTML = greeter('Fredde');

//Ofta vill vi kombinera flera villkor. i javascript använder vi oss av ||  ('or') och &6

// if (a == 1 || a == 3) {
// } //a är lika 1 eller 3 (or)
// if (a >= 1 || a <= 10) {
// } //a är mellan 1 och 10

//Använd parenteser för att ange i vilken  ordning vilkoren ska gälla , notera skillanden

// AND &&  evalueras före OR så första  exemplet

//Funktioner del 2 - argument och returvärde : vi kan mata in data i en funktion via argument (ifr matte: f(x)), x är funktionens argument).
//Fundera på följande  handelseförlopp , var skrivs ut i konsolen.
