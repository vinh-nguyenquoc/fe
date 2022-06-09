var btn= document.querySelectorAll(".btn");
var btnClose = document.querySelectorAll(".btn-close");

function toggleOpen() {
  btn.forEach((btn) => {
    btn.addEventListener("click", function () {
      const idElement = this.getAttribute("data-bs-target");
      const contentElement = document.querySelector(idElement);
      contentElement.classList.toggle("show");
    });
  });
}

toggleOpen();
