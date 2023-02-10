import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");

function createGallery(items) {
  return items.map(item => {
    return `
      <div class="gallery__item" >
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </div> 
    `
  }).join("");
} 

galleryContainer.innerHTML = createGallery(galleryItems);

new SimpleLightbox('.gallery .gallery__link', { captionsData: "alt", captionDelay: 250 });