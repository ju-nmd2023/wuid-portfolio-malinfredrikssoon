const portfolioLink = document.getElementById("portfolio-link");
const aboutLink = document.getElementById("about-link");
const contactLink = document.getElementById("contact-link");

portfolioLink.addEventListener("click", function () {
  resetLinkColors();
  portfolioLink.style.color = "#fff";
  portfolioLink.style.textDecoration = "underline";
});

aboutLink.addEventListener("click", function () {
  resetLinkColors();
  aboutLink.style.color = "#fff";
  aboutLink.style.textDecoration = "underline";
});

contactLink.addEventListener("click", function () {
  resetLinkColors();
  contactLink.style.color = "#fff";
  contactLink.style.textDecoration = "underline";
});

function resetLinkColors() {
  [portfolioLink, aboutLink, contactLink].forEach(function (link) {
    link.style.color = ""; // resets the color
  });
}
