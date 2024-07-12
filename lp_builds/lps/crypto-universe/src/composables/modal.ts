export const showModal = (e?: MouseEvent) => {
  e?.preventDefault();
  const modal = document.querySelector(".js-modal") as HTMLDivElement;

  const closeModal = (e: MouseEvent) => {
    if (e.target === modal) {
      modal.dataset.state = "closed";
      modal.classList.add("hidden");
    }
  };

  if (modal.dataset.state === "closed") {
    modal.addEventListener("click", (e) => closeModal(e));

    modal.dataset.state = "open";
    modal.classList.remove("hidden");

    return;
  }

  modal.dataset.state = "closed";
  modal.classList.add("hidden");
  modal.removeEventListener("click", closeModal);
};
