document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav-links");
  const menu = document.querySelector(".menu-toggle");
  if (!nav || !menu) return;
  menu.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", open);
  });
});
