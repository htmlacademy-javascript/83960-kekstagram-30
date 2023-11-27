import { GalleryModuleClasses as classes } from './constants.js';
import { fullSizePhoto } from './fullSizePhotoModule.js';
import { thumbnailsGallery } from './galleryObjectModule.js';
import { createLoader } from './getDataModule.js';
import { showGetErrorMessage } from './utils.js';

const initGallery = function (data) {
  thumbnailsGallery.init(data, classes.THUMBNAIL_TEMPLATE_ID, classes.THUMBNAIL_CONTAINER_CLASS);
};

createLoader(initGallery, showGetErrorMessage);

fullSizePhoto.init(classes.BIG_PICTURE_CONTAINER_CLASS, classes.BIG_PICTURE_CLOSE_BUTTON_CLASS);
