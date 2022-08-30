import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryFull = galleryItems.map(({
   preview, original, description }) => {
    return `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a>`;
  }).join("");
gallery.insertAdjacentHTML("beforeend", galleryFull);

// 

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
// 

// gallery.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (e.target !== e.currentTarget) {
//     const img = e.target.dataset.source;

//     const instance = basicLightbox.create(`
//     <img src="${img}" width="1280">
// `);

//     instance.show();

//     gallery.addEventListener("keydown", (e) => {
//       if (e.key === "Escape") {
//         instance.close();
//       }
//     });
//   }
// });

console.log(galleryItems);
