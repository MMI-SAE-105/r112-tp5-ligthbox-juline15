// *** LIGHTBOX ***
const lightbox = document.querySelector("#lightbox");
const lightboxImg = document.querySelector("#lightbox > img");

document.body.addEventListener("click", (evt) => {
    if (evt.target.matches("[data-full-img]")) {
        lightboxImg.src = evt.target.dataset.fullImg;
        lightbox.showModal();
    }
});
