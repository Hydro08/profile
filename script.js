const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(
  "#about, #experiences, #techStacks, #projects",
);

const currDate = new Date();
const currYear = currDate.getFullYear();

document.getElementById("bottom").innerHTML =
  `&copy; ${currYear} Darwin's Profile. All rights reserved.`;

function setActive(link) {
  navLinks.forEach((l) => {
    l.querySelector(".nav-line").style.width = "30px";
    l.querySelector(".nav-line").style.backgroundColor = "var(--primary-text)";
    l.querySelector(".nav-label").style.color = "var(--primary-text)";
  });

  link.querySelector(".nav-line").style.width = "70px";
  link.querySelector(".nav-line").style.backgroundColor = "white";
  link.querySelector(".nav-label").style.color = "white";
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => setActive(link));
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (activeLink) setActive(activeLink);

        history.pushState(null, null, `#${id}`);
      }
    });
  },
  { threshold: 0.5 },
);

sections.forEach((section) => observer.observe(section));
