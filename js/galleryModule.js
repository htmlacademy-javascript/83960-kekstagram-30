import { createNewThumbnail } from './thumbnailsModule';
import { userPhotos } from './data';

const thumbnailsContainer = document.querySelector('.pictures');

userPhotos.forEach((userPhoto) => {
  thumbnailsContainer.appendChild(createNewThumbnail(userPhoto));
});
