const btnSucces = document.querySelectorAll(".btn");
const alertPopup = document.querySelector("#liveAlertPlaceholder");
function thongbao() {
  btnSucces.forEach((btn) => {
    btn.addEventListener("click", () => {
      const dataMessage = btn.getAttribute("data-message");
      const wrapper = document.createElement("div");
      wrapper.innerHTML = [
        `<div class="aler active" >
        <div>${dataMessage}</div>
        <img onclick="closePopup(event)"
          class="close"
          src="https://www.svgrepo.com/show/305186/close.svg"
        />
      </div>`,
        "</div>",
      ].join("");

      alertPopup.appendChild(wrapper);
    });
  });
}

thongbao();

function closePopup(event) {
  const cls = event.target.parentNode;
  cls.classList.remove("active");
}
