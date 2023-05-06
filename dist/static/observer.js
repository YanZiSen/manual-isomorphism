const observeEl = document.getElementById("root");

const observer = new MutationObserver(() => {
  console.log("el is change");
});
window.addEventListener("DOMContentLoaded", () => {
  observer.observe(observeEl, {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true,
  });
});
