function timer() {
  const trainingTime = Number(document.getElementById('inMin').value);

  console.log(trainingTime);

  console.log(trainingTime);
  let greeting = '';
  const minTime = 30;
  const maxTime = 120;
  if (isNaN(trainingTime)) {
    alert('Mata in ett tal!');
    return;
  }

  if (trainingTime == minTime) {
    greeting = 'Bra jobbat';
  } else if (trainingTime == maxTime) {
    greeting = 'Det var hurtigt av dig men kom ihåg att chilla lite emellanåt';
  } else {
    greeting = 'Bättre kan du';
  }
  document.getElementById('displayContainer').innerHTML = greeting;
  return `Hej you have trained ${trainingTime} minutes ! ${greeting}`;
}

const timer1 = timer(trainingTime);
console.log(timer);
document.getElementById('displayContainer').innerHTML = timer;
