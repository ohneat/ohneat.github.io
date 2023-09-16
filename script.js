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
