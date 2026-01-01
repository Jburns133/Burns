const game = document.getElementById("game");
const ufo = document.getElementById("ufo");
const beam = document.getElementById("beam");
const scoreEl = document.getElementById("score");

let ufoX = window.innerWidth / 2;
let score = 0;
let sticks = [];

function createStick() {
  const stick = document.createElement("div");
  stick.className = "stick";
  stick.style.left = Math.random() * (window.innerWidth - 20) + "px";
  game.appendChild(stick);

  sticks.push({
    el: stick,
    y: window.innerHeight - 80
  });
}

function moveUFO(x) {
  ufoX = x;
  ufo.style.left = ufoX + "px";
  beam.style.left = (ufoX + 10) + "px";
}

function activateBeam() {
  beam.style.display = "block";
  beam.style.height = window.innerHeight + "px";

  sticks.forEach((stick, index) => {
    const stickX = stick.el.offsetLeft;
    if (Math.abs(stickX - ufoX) < 30) {
      game.removeChild(stick.el);
      sticks.splice(index, 1);
      score++;
      scoreEl.textContent = "Score: " + score;
    }
  });

  setTimeout(() => {
    beam.style.display = "none";
    beam.style.height = "0";
  }, 300);
}

/* CONTROLS */
document.addEventListener("mousemove", e => moveUFO(e.clientX));
document.addEventListener("touchmove", e => moveUFO(e.touches[0].clientX));
document.addEventListener("click", activateBeam);
document.addEventListener("touchstart", activateBeam);

/* SPAWN STICK FIGURES */
setInterval(createStick, 1500);