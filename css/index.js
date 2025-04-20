//acordionnnnnnnnnnnnnn
const accordionHeader = document.getElementsByClassName("accordion-header");

for (let i = 0; i < accordionHeader.length; i++) {
  accordionHeader[i].addEventListener("click", function () {
    // Toggle content panel
    this.nextElementSibling.classList.toggle("active");
    //icon
    const icon = this.querySelector(".icon");
    if (icon) {
      icon.classList.toggle("rotate");
    }
  });
}
