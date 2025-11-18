
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("predictions");

  fetch("https://script.google.com/macros/s/AKfycbw9m4oc4imJpVxAtrkSBYltPTCO08435yXYczYwVv_Y9k9mHd-h8_QPNRdrRV7opwiT/exec")
    .then(response => response.text())
    .then(html => {
      container.innerHTML = html;
    })
    .catch(error => {
      console.error("Error fetching predictions:", error);
      container.textContent = "Failed to load predictions.";
    });
});
