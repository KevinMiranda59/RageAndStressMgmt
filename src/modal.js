const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const wrapper = document.querySelector(".notClose");

openModal.addEventListener("click", () => {
  modal.showModal();
});

modal.addEventListener("click", (e) => {
  if (!wrapper.contains(e.target)) {
    modal.close();
  }
});
