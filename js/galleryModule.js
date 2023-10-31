import { drawGallery } from './thumbnailsModule';
import { userPhotos } from './data';

const thumbnailsContainer = document.querySelector('.pictures');

drawGallery(thumbnailsContainer, userPhotos);

const thumbnailsContainerClick = function (evt) {
  evt.preventDefault();
  if (evt.target.className === 'picture__img') {
    const filter = evt.target.src.split('/').at(-1);
    const current = userPhotos.find((item) => (item.url.includes(filter)));
    console.log(current);
  }
};


thumbnailsContainer.addEventListener('click', thumbnailsContainerClick);
