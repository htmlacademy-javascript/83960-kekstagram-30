import { GalleryModuleClasses as classes } from './constants.js';
import { getUserPhotos } from './data.js';
import { fullSizePhoto } from './fullSizePhotoModule.js';
import { thumbnailsGallery } from './galleryObjectModule.js';

thumbnailsGallery.init(getUserPhotos(), classes.THUMBNAIL_TEMPLATE_ID, classes.THUMBNAIL_CONTAINER_CLASS);

fullSizePhoto.init( classes.BIG_PICTURE_CONTAINER_CLASS, classes.BIG_PICTURE_CLOSE_BUTTON_CLASS);
