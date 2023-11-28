import { GalleryModuleClasses as classes } from './constants.js';
import { fullSizePhoto } from './fullSizePhotoModule.js';
import { thumbnailsGallery } from './galleryObjectModule.js';
import { createLoader } from './getDataModule.js';
import { showGetErrorMessage } from './utils.js';

const initGallery = function (otherUsersPhoto) {
  thumbnailsGallery.init(otherUsersPhoto, classes.THUMBNAIL_TEMPLATE_ID, classes.THUMBNAIL_CONTAINER_CLASS);
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
};

createLoader(initGallery, showGetErrorMessage);

fullSizePhoto.init(classes.BIG_PICTURE_CONTAINER_CLASS, classes.BIG_PICTURE_CLOSE_BUTTON_CLASS);
