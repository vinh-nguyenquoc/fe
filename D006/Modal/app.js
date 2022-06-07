const modalEle = document.querySelector(".modal");

// function toggleModal(){
//     const activeModal = modalEle.classList.contains('active');
//     console.log(modalEle.className, ' modalEle class list');
//     console.log(activeModal,'activeModal');
//     if(activeModal){
//         modalEle.classList.remove('active');
//     }
//     else {
//         modalEle.classList.add('active');
//     }

// }

function toggleModal(event) {
  const curentElement = event.target;
  const idModal = curentElement.getAttribute("data-bs-target");
  const targetModalElement = document.querySelector(idModal);
  const activeModal = modalEle.classList.contains("active");
  if (activeModal) {
    targetModalElement.classList.remove("active");
  } else {
    targetModalElement.classList.add("active");
  }
}


const modalElenets = document.querySelectorAll('.modal');
function closeModal(){
    modalElenets.forEach(item => {
        item.classList.remove('active');
    })
}

closeModal();