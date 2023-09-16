// Existing openPhoto function
function openPhoto(imageSrc) {
  // ... existing code
}

// New code for dynamically adding photos
const photos = ['roll4/longhorn.jpg', 'roll4/worship_center.jpg', 'roll4/sonic.JPG', 'roll3/fave_tree.jpg', 'roll3/eyes.jpg', 'roll3/light_shadow.jpg', 'roll2/mother_child.jpg', 'roll2/battle_hall.JPG', 'roll2/bananas.jpg', 'roll1/ocho.JPG', 'roll1/path.JPG', 'roll1/water_tower.jpg'];

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
