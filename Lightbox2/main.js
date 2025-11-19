const IMAGE_ID = [16, 28, 61, 49];
for (const id of IMAGE_ID) {
  document.getElementById(
    'thumbnail-container'
  ).innerHTML += `<img data-id="${id}" src="./lightbox-img/thumb-img-0${id}.png" >`;
}

function openLightbox(id) {
  document.getElementById(
    'lightbox'
  ).innerHTML = `<img src="./lightbox-img/img-0${id}.png">`;

  document.getElementById('lightbox').classList.remove('hidden');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.add('hidden');
}

for (const img of document.querySelectorAll('#thumbnail-container > img')) {
  console.log(img);
  img.addEventListener('click', () => {
    // const id = img.getAttribute('data-id'); saMMA som  img.dataset.
    openLightbox(img.dataset.id);
  });
}

//Stäng bild med klick
document.querySelector('#lightbox').addEventListener('click', closeLightbox);

//Stäng bild med esc
window.addEventListener('keydown', (evt) => {
  if (
    !document.getElementById('lightbox').classList.contains('hidden') &&
    evt.key === 'Escape'
  ) {
    closeLightbox();
  }
});
