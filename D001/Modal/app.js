// const modalEle = document.querySelectorAll(".accordion-body");
// for (var i = 0; i < modalEle.length; ++i) {
//   modalEle[i].onclick = function (e) {
//     console.log("ádadsds");
//   };
// }
var btnAccordion = document.querySelectorAll(".accordion-button");
var showAccordion = document.querySelectorAll(".accordion-collapse");
var image = document.querySelectorAll("img");

function toggleAccordion() {
  btnAccordion.forEach((btn) => {
    btn.addEventListener("click", function () {
      showAccordion.forEach((content) => content.classList.remove("show"));
      image.forEach((img) => img.classList.remove("active"));
      const imgPresent = btn.querySelector("img");
      imgPresent.classList.add("active");
      const idElement = this.getAttribute("data-bs-target");
      const contentElement = document.querySelector(idElement);
      contentElement.classList.toggle("show");
    });
  });
}

toggleAccordion();