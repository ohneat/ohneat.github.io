// Existing openPhoto function
function openPhoto(imageSrc) {
  // Create an overlay element
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0,0,0,0.9)";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "1000";
  
  // Create the image element
  const img = document.createElement("img");
  img.src = imageSrc;
  img.style.maxWidth = "100%";
  img.style.maxHeight = "100%";
  img.style.objectFit = "contain";
  
  // Add image to overlay
  overlay.appendChild(img);
  
  // Add back button
  const backButton = document.createElement("button");
  backButton.textContent = "Back";
  backButton.style.position = "absolute";
  backButton.style.top = "16px";
  backButton.style.left = "16px";
  backButton.style.padding = "8px 16px";
  backButton.style.background = "#333";
  backButton.style.color = "white";
  backButton.style.fontSize = "16px";
  backButton.style.cursor = "pointer";
  
  backButton.onclick = function() {
    document.body.removeChild(overlay);
  };

  // Add back button to overlay
  overlay.appendChild(backButton);

  // Add overlay to body
  document.body.appendChild(overlay);

  // Close overlay when clicking outside the image
  overlay.onclick = function(e) {
    if (e.target === overlay) {
      document.body.removeChild(overlay);
    }
  };
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
