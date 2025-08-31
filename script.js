// Auto year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scroll for nav
document.querySelectorAll("nav a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
