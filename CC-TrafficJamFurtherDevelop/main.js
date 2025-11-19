const COLORS = {
  red: '#ff0000',
  yellow: '#ffaa00',
  green: 'lime',
};

function resetLights() {
  for (const light of document.querySelectorAll(`#lights > div`)) {
    light.style.backgroundColor = 'black';
  }
}
function activateLight(lightNumber) {
  resetLights();
  const light = document.querySelector(
    `#lights > div:nth-child(${lightNumber})`
  );
  const color = light.dataset.color;
  light.style.backgroundColor = COLORS[color]; //Ta färgen från const COLORS
}

//Lösning 2 accelererande ljus
function nextLight(delay) {
  if (delay < 200) delay = 100; //Guard statement (base case)
  const randNumber = Math.ceil(Math.random() * 3);
  activateLight(randNumber);
  console.log(`waiting ${delay} ms ...`);
  setTimeout(() => nextLight(delay - 50), delay);
}

nextLight(900);
/*
setInterval(() => {
  const randNumber = Math.ceil(Math.random() * 3);
  activateLight(randNumber);
}, 1000); */
