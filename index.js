let currentGIFIndex = 0;
const gifs = document.querySelectorAll('.gif');
const arrow = document.querySelector('.arrow');

function startGIFSequence() {
  const gifContainer = document.querySelector('.gif-container');
  const defaultImage = document.querySelector('.default-image');

  // Show GIF container and start sequence
  gifContainer.style.display = 'block';
  defaultImage.style.opacity = '0'; // Fade out default image
  arrow.style.transition = 'transform 0.5s ease';
  arrow.style.transform = 'translateX(20px)'; 
  // Display the first GIF and start the sequence
  displayNextGIF();
}

function resetGIFSequence() {
  const gifContainer = document.querySelector('.gif-container');
  const defaultImage = document.querySelector('.default-image');

  // Reset to default state (hide GIFs and show default image)
  gifContainer.style.display = 'none';
  defaultImage.style.opacity = '1'; // Show default image again
  currentGIFIndex = 0; // Reset the current GIF index
  arrow.style.transform = 'translateX(0)';
}

function displayNextGIF() {
  // Hide all GIFs
  gifs.forEach(gif => {
    gif.style.opacity = '0';
  });

  // Display the next GIF
  gifs[currentGIFIndex].style.opacity = '1';

  // Move to the next GIF index
  currentGIFIndex = (currentGIFIndex + 1) % gifs.length;

  // Continue the sequence after a delay (e.g., 10 seconds)
  setTimeout(displayNextGIF, 5000); // 10 seconds
}

