// Menu Responsivo
const toggleButton = document.querySelector(".toggle-button");
const navLinks = document.querySelector(".nav-links");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Alterar Cor da Barra de Navegação ao Rolar a Página
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Smooth Scroll para Âncoras Internas
const linksInternos = document.querySelectorAll('.nav-links a[href^="#"]');
for (const link of linksInternos) {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    document.querySelector(href).scrollIntoView({
      behavior: "smooth",
    });
    navLinks.classList.remove("active");
  });
}

// script.js

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
