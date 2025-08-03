document.getElementById("enterBtn").addEventListener("click", () => {
  const btn = document.getElementById("enterBtn");

  btn.classList.add("pressed");

  setTimeout(() => {
    document.getElementById("screen1").classList.add("hidden");
    document.getElementById("screen2").classList.remove("hidden");

    const sequence = [
      "[BOOT] Initializing system...",
      "[SCAN] Starting biometric match...",
      "[SCAN] █▒▒▒▒▒▒▒▒▒ 10%",
      "[SCAN] ████▒▒▒▒▒▒ 40%",
      "[SCAN] ████████▒▒ 80%",
      "[OK] Match: JAMAR BURNS ✅",
      "[LOAD] Analyzing presence...",
      "[COMPLETE] Subject scan finished.",
      "[RESULT] Where is he?"
    ];

    typeLines(sequence, 0);
  }, 400);
});

function typeLines(lines, index) {
  const container = document.querySelector(".crt");
  if (index >= lines.length) return;

  let i = 0;
  let line = "";

  const lineInterval = setInterval(() => {
    if (i < lines[index].length) {
      line += lines[index][i];
      container.innerHTML = container.innerHTML.replace(/<span class="cursor">▌<\/span>/, "") + line[i];
      i++;
    } else {
      clearInterval(lineInterval);
      container.innerHTML += "<br/>";
      setTimeout(() => typeLines(lines, index + 1), 500);
    }
  }, 55);
}

// Blinking cursor
setInterval(() => {
  const container = document.querySelector(".crt");
  if (!container.innerHTML.includes('<span class="cursor">')) {
    container.innerHTML += '<span class="cursor">▌</span>';
  } else {
    container.innerHTML = container.innerHTML.replace('<span class="cursor">▌</span>', '');
  }
}, 500);