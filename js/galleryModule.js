import { drawGallery } from './thumbnailsModule';
import { getUserPhotos } from './data';
import { showBigPicture } from './bigPictureModule';

const thumbnailsContainer = document.querySelector('.pictures');
const userPhotos = getUserPhotos();

const thumbnailsContainerClick = function (evt) {
  if (evt.target.className === 'picture__img') {
    evt.preventDefault();
    const pictureFileName = evt.target.src.split('/').at(-1);
    const clickedPicture = userPhotos.find((picture) => (picture.url.includes(`/${pictureFileName}`)));
    showBigPicture(clickedPicture);
    //console.log(clickedPicture);
  }
};

thumbnailsContainer.addEventListener('click', thumbnailsContainerClick);

drawGallery(thumbnailsContainer, userPhotos);
