function openPhoto(imageSrc) {
  document.write(`
    <html>
      <head>
        <title>Full-size Image</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
          }
          .back-button {
            position: absolute;
            top: 16px;
            left: 16px;
            padding: 8px 16px;
            background: #333;
            color: white;
            font-size: 16px;
            cursor: pointer;
          }
        </style>
      </head>
      <body>
        <img src="${imageSrc}" alt="Full-size Image">
        <button class="back-button" onclick="window.location.href='index.html'">Back</button>
      </body>
    </html>
  `);
}
