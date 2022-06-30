"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClsoeModal = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal");

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = function () {
  //removing hidden class
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
for (let i = 0; i < btnsShowModal.length; i++) {
  // eventhandler for clicks
  btnsShowModal[i].addEventListener("click", openModal);
}

//event listner for adding the class back , that is modal closes
//closemodal events

btnClsoeModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    console.log("pressed");

    closeModal();
  }
});
