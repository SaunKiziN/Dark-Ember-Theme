document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("clickMe");
  const output = document.getElementById("output");

  button.addEventListener("click", () => {
    const now = new Date().toLocaleTimeString();
    output.innerHTML = `⏱ Button clicked at <strong>${now}</strong>`;
  });

  console.log("Dark Ember Theme loaded successfully! 🚀");
});
