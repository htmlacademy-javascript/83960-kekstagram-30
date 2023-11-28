const RANDOM_PHOTO_COUNT = 10;

//Имена классов для объекта галереи миниатюр
const ThumbnailGalleryClasses = {
  PICTURE_IMAGE_CLASS: 'picture__img',
  PICTURE_LIKES_CLASS: 'picture__likes',
  PICTURE_COMMENTS_CLASS: 'picture__comments',
};

//Имена классов для инициализирующего модуля галереи миниатюр
const GalleryModuleClasses = {
  BIG_PICTURE_CLOSE_BUTTON_CLASS: 'big-picture__cancel',
  BIG_PICTURE_CONTAINER_CLASS: 'big-picture',
  THUMBNAIL_TEMPLATE_ID: 'picture',
  THUMBNAIL_CONTAINER_CLASS: 'pictures',
};

//Имена классов для модуля полноразмерного изображения
const FullSizePhotoModuleClasses = {
  BIG_PICTURE_IMAGE_CLASS: 'big-picture__img',
  BIG_PICTURE_LIKES_CLASS: 'likes-count',
  BIG_PICTURE_DESCRIPTION_CLASS: 'social__caption',
  NUMBER_COMMENTS_SHOWN: 5,
};

//Имена классов для модуля комментариев
const CommentsObjectModuleClasses = {
  LIST_COMMENTS_CLASS: 'social__comments',
  COMMENT_SHOWN_COUNT_CLASS: 'social__comment-shown-count',
  COMMENT_TOTAL_COUNT_CLASS: 'social__comment-total-count',
  COMMENTS_LOADER_BUTTON_CLASS: 'comments-loader',
};

//Имена классов для формы загрузки изображений
const UploadFormClasses = {
  IMAGE_UPLOAD_FORM_CLASS: 'img-upload__form',
  IMAGE_UPLOAD_INPUT_CLASS: 'img-upload__input',
  IMAGE_UPLOAD_PREVIEW_CLASS: 'img-upload__preview img',
  IMAGE_EDITING_FORM_CLASS: 'img-upload__overlay',
  FORM_CLOSE_BUTTON_CLASS: 'img-upload__cancel',
  FORM_SUBMIT_BUTTON_CLASS: 'img-upload__submit',
  HASHTAG_INPUT_CLASS: 'text__hashtags',
};

//Константы для модуля масштабирования изображения
const ImageScalingClasses = {
  ZOOM_OUT_BUTTON_CLASS: 'scale__control--smaller',
  ZOOM_IN_BUTTON_CLASS: 'scale__control--bigger',
  ZOOM_VALUE_INPUT_CLASS: 'scale__control--value',
  MAX_SCALE_VALUE: 100,
  MIN_SCALE_VALUE: 25,
  SCALING_STEP: 25,
};

export {
  ThumbnailGalleryClasses,
  GalleryModuleClasses,
  FullSizePhotoModuleClasses,
  CommentsObjectModuleClasses,
  UploadFormClasses,
  ImageScalingClasses,
  RANDOM_PHOTO_COUNT
};
