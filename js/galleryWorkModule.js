import { getUserPhotos } from './data';
import { thumbnailsGallery } from './galleryObjectModule';

thumbnailsGallery.init(getUserPhotos(), '#picture', '.pictures');
thumbnailsGallery.fill();

thumbnailsGallery.thumbnailsContainer.addEventListener('click', () => {
  console.log(thumbnailsGallery.clickedPicture);
})
