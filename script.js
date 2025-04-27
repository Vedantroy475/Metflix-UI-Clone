// script.js

// Carousel scrolling setup
const container    = document.querySelector(".list-images");
const leftBtn      = document.querySelector(".arrow-left");
const rightBtn     = document.querySelector(".arrow-right");
const scrollAmount = 200; // px per click

function updateArrows() {
  const maxScrollLeft = container.scrollWidth - container.clientWidth;
  leftBtn .classList.toggle("hidden", container.scrollLeft <= 0);
  rightBtn.classList.toggle("hidden", container.scrollLeft >= maxScrollLeft);
}

// Wire up the carousel arrows
leftBtn.addEventListener("click", () => {
  container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});
rightBtn.addEventListener("click", () => {
  container.scrollBy({ left:  scrollAmount, behavior: "smooth" });
});

// Run updateArrows whenever the carousel itself scrolls
container.addEventListener("scroll", updateArrows);

// FAQ accordion setup
function initFAQ() {
  // 1) Ensure every box shows the plus icon, hides the close icon
  document.querySelectorAll(".faqbox").forEach(box => {
    const plus  = box.querySelector(".icon-plus");
    const close = box.querySelector(".icon-close");
    plus.style.display  = "block";
    close.style.display = "none";
  });

  // 2) Add click handlers to toggle each FAQ
  document.querySelectorAll(".faqbox").forEach(box => {
    const answer = box.nextElementSibling;               // the .faq-answer
    const plus   = box.querySelector(".icon-plus");
    const close  = box.querySelector(".icon-close");

    box.addEventListener("click", () => {
      const isOpen = box.classList.toggle("active");

      // show/hide this answer panel
      answer.classList.toggle("visible", isOpen);

      // swap icons on this box
      plus .style.display = isOpen ? "none"  : "block";
      close.style.display = isOpen ? "block" : "none";

      // close any other open panels and reset their icons
      document.querySelectorAll(".faqbox").forEach(otherBox => {
        if (otherBox !== box) {
          otherBox.classList.remove("active");
          otherBox.nextElementSibling.classList.remove("visible");
          otherBox.querySelector(".icon-plus") .style.display = "block";
          otherBox.querySelector(".icon-close").style.display = "none";
        }
      });
    });
  });
}

// Initialize everything once the page and images have fully loaded
window.addEventListener("load", () => {
  // Carousel: reset scroll to left, then show/hide arrows correctly
  container.scrollLeft = 0;
  updateArrows();

  // FAQ accordion
  initFAQ();
});
