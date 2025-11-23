const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("main section");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = link.getAttribute("data-section");

    // Dölj alla sektioner
    sections.forEach(section => section.classList.remove("active"));

    // Visa vald sektion
    document.getElementById(target).classList.add("active");
  });
});
