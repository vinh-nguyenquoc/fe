var btnAccordion = document.querySelectorAll(".btn");
function toggleAccordion() {
  btnAccordion.forEach((btn) => {
    btn.addEventListener("click", function () {
      this.classList.toggle("borderC")
      const idElement = this.getAttribute("data-bs-toggle");
      const drop=document.querySelector(idElement);
      drop.classList.toggle("drop")
    });
  });
}

toggleAccordion();
