* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Courier New", monospace;
}

body {
  background: black;
  color: #00ffcc;
  overflow: hidden;
}

/* SCENES */
.scene {
  position: fixed;
  inset: 0;
  display: none;
}

.scene.active {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* STAR BACKGROUND */
.stars {
  position: absolute;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(white 1px, transparent 1px),
    radial-gradient(white 1px, transparent 1px);
  background-size: 3px 3px;
  background-position: 0 0, 50px 50px;
  opacity: 0.3;
  animation: drift 60s linear infinite;
}

@keyframes drift {
  from { transform: translateY(0); }
  to { transform: translateY(1000px); }
}

/* ALIEN */
#alien {
  position: relative;
  cursor: pointer;
  text-align: center;
  z-index: 2;
}

.head {
  width: 180px;
  height: 220px;
  background: #b5b5b5;
  border-radius: 50% 50% 45% 45%;
  position: relative;
  animation: breathe 4s ease-in-out infinite;
}

@keyframes breathe {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.03); }
}

.eye {
  width: 30px;
  height: 45px;
  background: black;
  border-radius: 50%;
  position: absolute;
  top: 70px;
}

.eye.left { left: 45px; }
.eye.right { right: 45px; }

.mouth {
  width: 60px;
  height: 10px;
  background: black;
  border-radius: 20px;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  transition: height 0.6s ease;
}

.mouth.open {
  height: 60px;
}

.hint {
  margin-top: 20px;
  font-size: 14px;
  opacity: 0.7;
  animation: blink 1.5s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 1; }
}

/* TRANSITION FLASH */
.flash {
  animation: flash 0.8s forwards;
}

@keyframes flash {
  0% { background: white; opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
}

/* SHIP HUD */
#scene-ship {
  background: radial-gradient(circle at center, #001a1a, black);
}

.hud {
  position: relative;
  width: 400px;
  height: 400px;
}

.scan-circle {
  width: 100%;
  height: 100%;
  border: 2px solid #00ffcc;
  border-radius: 50%;
  position: absolute;
  animation: rotate 6s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0); }
  to { transform: rotate(360deg); }
}

.crosshair::before,
.crosshair::after {
  content: "";
  position: absolute;
  background: #00ffcc;
}

.crosshair::before {
  width: 2px;
  height: 100%;
  left: 50%;
}

.crosshair::after {
  height: 2px;
  width: 100%;
  top: 50%;
}

.hud-text {
  position: absolute;
  bottom: -80px;
  width: 100%;
  text-align: center;
}