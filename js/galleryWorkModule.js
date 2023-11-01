import { getUserPhotos } from './data';
import { fullSizePhoto } from './fullSizePhotoModule';
import { thumbnailsGallery } from './galleryObjectModule';

thumbnailsGallery.init(getUserPhotos(), '#picture', '.pictures');
thumbnailsGallery.fill();

thumbnailsGallery.thumbnailsContainer.addEventListener('click', () => {
  console.log(thumbnailsGallery.clickedPicture);
  fullSizePhoto.show();
});
