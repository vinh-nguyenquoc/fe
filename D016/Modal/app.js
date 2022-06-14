var btns = document.querySelectorAll(".btn");

function toggleAccordion() {
  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const idElement = this.getAttribute("data-bs-target");
      const contentElement = document.querySelector(idElement);
      contentElement.classList.toggle("show");

    });
  });
}

toggleAccordion();
