// Existing openPhoto function
function openPhoto(imageSrc) {
  // ... existing code
}

// New code for dynamically adding photos
const photos = ['roll1/ocho.JPG', 'roll1/path.JPG', 'roll1/water_tower.jpg'];

function addPhotos() {
  const container = document.querySelector('.container');

  photos.forEach((photo) => {
    const photoBox = document.createElement('div');
    photoBox.className = 'photo-box';
    photoBox.setAttribute('onclick', `openPhoto('photos/${photo}')`);

    const img = document.createElement('img');
    img.src = `photos/${photo}`;
    img.alt = `Photo ${photo}`;
    img.setAttribute('loading', 'lazy');

    photoBox.appendChild(img);
    container.appendChild(photoBox);
  });
}

// Call the function when the page loads
window.onload = addPhotos;
