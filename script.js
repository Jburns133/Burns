const alien = document.getElementById("alien");
const mouth = document.querySelector(".mouth");
const sceneAlien = document.getElementById("scene-alien");
const sceneShip = document.getElementById("scene-ship");
const statusText = document.getElementById("status");
const coordsText = document.getElementById("coords");

alien.addEventListener("click", () => {
  mouth.classList.add("open");

  setTimeout(() => {
    sceneAlien.classList.remove("active");
    sceneShip.classList.add("active");
    startScanning();
  }, 900);
});

function startScanning() {
  const messages = [
    "SEARCHING FOR LIFEFORM...",
    "SCANNING NEURAL SIGNALS...",
    "ANALYZING BIO-SIGNATURE...",
    "TARGET NOT FOUND...",
    "RECALIBRATING..."
  ];

  let index = 0;

  setInterval(() => {
    statusText.textContent = messages[index % messages.length];
    coordsText.textContent =
      "COORDS: " +
      (Math.random() * 999).toFixed(2) + " : " +
      (Math.random() * 999).toFixed(2);
    index++;
  }, 1200);
}