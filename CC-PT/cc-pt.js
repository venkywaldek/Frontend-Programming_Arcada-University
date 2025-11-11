document.getElementById('btn').addEventListener('click', timer);
function timer() {
  let greeting = '';
  const trainingTime = Number(document.getElementById('inMin').value);
  console.log(trainingTime);

  const minTime = 30;
  const maxTime = 120;
  if (isNaN(trainingTime)) {
    alert('Mata in ett tal!');
    return;
  }

  if (trainingTime >= maxTime) {
    greeting = 'Det var hurtigt av dig men kom ihåg att chilla lite emellanåt';
  } else if (trainingTime >= minTime) {
    greeting = 'Bra jobbat';
  } else {
    greeting = 'Bättre kan du';
  }
  document.getElementById('displayContainer').innerHTML = greeting;
  return `Hej you have trained ${trainingTime} minutes ! ${greeting}`;
}
