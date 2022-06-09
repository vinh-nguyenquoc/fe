var btnAccordion = document.querySelectorAll(".btn");
var text = document.querySelector(".text");
function toggleAccordion() {
  btnAccordion.forEach((btn) => {
    btn.addEventListener("click", function () {
      const b = btn.getAttribute("data-bs-toggle");
      const a = document.querySelector("." + b);
      a.classList.toggle("width");
      setTimeout(function () {
        text.style.display = "none";
      }, 1000);
    });
  });
}

toggleAccordion();
