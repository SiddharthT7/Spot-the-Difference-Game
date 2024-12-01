// Load the JSON configuration
fetch("config.json")
  .then((response) => response.json())
  .then((gameData) => initializeGame(gameData))
  .catch((error) => console.error("Error loading config:", error));

function initializeGame(gameData) {
  // Set game title
  document.getElementById("gameTitle").textContent = gameData.gameTitle;

  // Set image sources
  const img1 = document.getElementById("image1");
  const img2 = document.getElementById("image2");
  img1.src = gameData.images.image1;
  img2.src = gameData.images.image2;

  // Set up canvas
  const canvas1 = document.getElementById("canvas1");
  img1.onload = () => {
    canvas1.width = img1.width;
    canvas1.height = img1.height;
  };
  const ctx = canvas1.getContext("2d");

  // Initialize game variables
  let score = 0;
  const foundDifferences = [];

  // Add click event to canvas
  canvas1.addEventListener("click", (event) => {
    const rect = canvas1.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    gameData.differences.forEach((difference, index) => {
      if (
        !foundDifferences.includes(index) &&
        x >= difference.x &&
        x <= difference.x + difference.width &&
        y >= difference.y &&
        y <= difference.y + difference.height
      ) {
        // Highlight the difference
        ctx.strokeStyle = "red";
        ctx.lineWidth = 3;
        ctx.strokeRect(difference.x, difference.y, difference.width, difference.height);

        // Update score
        foundDifferences.push(index);
        score++;
        document.getElementById("score").textContent = score;

        // Check if game is complete
        if (score === gameData.differences.length) {
          document.getElementById("message").textContent = "Congratulations! You found all differences!";
        }
      }
    });
  });
}