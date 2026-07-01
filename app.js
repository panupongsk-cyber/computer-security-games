// Games Portal script setup
document.addEventListener("DOMContentLoaded", () => {
  const scanlineToggleBtn = document.getElementById("scanline-toggle-btn");

  // Load scanline preferences
  const isScanlineOff = localStorage.getItem("scanlines_disabled") === "true";
  if (isScanlineOff) {
    document.body.classList.add("no-scanlines");
    scanlineToggleBtn.textContent = "CRT SCREEN: OFF";
  }

  // Scanline toggle click listener
  scanlineToggleBtn.addEventListener("click", () => {
    const isCurrentlyOff = document.body.classList.contains("no-scanlines");
    if (isCurrentlyOff) {
      document.body.classList.remove("no-scanlines");
      scanlineToggleBtn.textContent = "CRT SCREEN: ON";
      localStorage.setItem("scanlines_disabled", "false");
    } else {
      document.body.classList.add("no-scanlines");
      scanlineToggleBtn.textContent = "CRT SCREEN: OFF";
      localStorage.setItem("scanlines_disabled", "true");
    }
  });
});
