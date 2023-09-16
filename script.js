function openPhoto(imageSrc) {
  // Create a new div to hold the full-size image and "Back" button
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100vh';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  overlay.style.zIndex = '1000';
  
  // Create an img element for the full-size image
  const img = document.createElement('img');
  img.src = imageSrc;
  img.style.maxWidth = '100%';
  img.style.maxHeight = '100%';
  img.style.objectFit = 'contain';
  
  // Create a "Back" button
  const backButton = document.createElement('button');
  backButton.innerText = 'Back';
  backButton.style.position = 'absolute';
  backButton.style.top = '16px';
  backButton.style.left = '16px';
  backButton.style.padding = '8px 16px';
  backButton.style.background = '#333';
  backButton.style.color = 'white';
  backButton.style.fontSize = '16px';
  backButton.style.cursor = 'pointer';
  backButton.onclick = function() {
    document.body.removeChild(overlay);
  };

  // Append img and "Back" button to the overlay div
  overlay.appendChild(img);
  overlay.appendChild(backButton);
  
  // Append the overlay div to the body
  document.body.appendChild(overlay);
}
