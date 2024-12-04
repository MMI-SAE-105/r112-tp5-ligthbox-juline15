// *** LIGHTBOX ***
const lightbox = document.querySelector("#lightbox");
const lightboxImg = document.querySelector("#lightbox > img");

document.body.addEventListener("click", (evt) => {
    if (evt.target.matches("[data-full-img]")) {
        lightboxImg.src = evt.target.dataset.fullImg;
        lightbox.showModal();
    }
});

lightbox.addEventListener("click", (evt) => {
    lightbox.classList.add("sortie");
    lightbox.addEventListener("animationend", () => {
        lightbox.classList.remove("sortie");
        lightbox.close();
    }, { once: true });
});