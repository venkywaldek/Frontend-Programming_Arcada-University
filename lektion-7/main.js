for (const inp of document.querySelectorAll('.inp')) {
  inp.addEventListener('input', () => {
    let output = inp.value;
    if (inp.getAttribute('type') === 'checkbox') {
      console.log('check');
      if (!inp.checked) {
        output = '-';
      }
    } else {
      document.getElementById('form-input').textContent = inp.value;
    }
    document.getElementById('form-output').textContent = output;
  });
}
document.getElementById('my-form').addEventListener('click', (evt) => {
  console.log(evt);
});

// console.log(`idag är ${d.getDay()}.${d.getMonth() + 1}.${d.getFullYear()}`);

// const vappen = new Date(2026, 4, 1, 9, 30); //OBS maj = 4
// console.log(vappen);
// console.log(vappen.getUTCDate());
// console.log(vappen.toISOString());
// console.log(vappen.toLocaleDateString());

function updateClock() {
  setInterval(() => {
    const d = new Date();
    const hour = String(d.getHours()).padStart(2, '0');
    const minute = String(d.getMinutes()).padStart(2, '0');
    const second = String(d.getSeconds()).padStart(2, '0');

    document.getElementById('time').textContent = `${hour}:${minute}:${second}`;
  }, 1000);
}

updateClock();
