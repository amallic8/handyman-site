// Add scroll animations
document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".animate-fade, .animate-slide");
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.style.animationPlayState = "running";
    }
  });
});


