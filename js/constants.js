const AUTHORS_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

const PHOTO_DESCRIPTIONS = [
  'Прекрасный закат над океаном',
  'Весенние цветы в саду',
  'Атмосфера романтики и любви',
  'Дикий лес в тумане',
  'Удивительная архитектура старого города',
  'Золотая осень на полях',
  'Загадочный взгляд морской звезды',
  'Радуга после дождя',
  'Летний пикник на природе',
  'Воображаемые космические пейзажи'
];

const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ?!'
];

const MIN_AVATAR_NUMBER = 1;
const MAX_AVATAR_NUMBER = 6;

const MIN_COMMENTS_COUNT = 1;
const MAX_COMMENTS_COUNT = 30;

const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;

const USER_PHOTO_COUNT = 25;

//Имена классов для объекта галереи миниатюр
const thumbnailGalleryClasses = {
  pictureImageClass: 'picture__img',
  pictureLikesClass: 'picture__likes',
  pictureCommentsClass: 'picture__comments',
};

//Имена классов для инициализирующего модуля галереи миниатюр
const galleryModuleClasses = {
  bigPictureCloseButtonClass: 'big-picture__cancel',
  bigPictureContainerClass: 'big-picture',
  thumbnailTemplateId: 'picture',
  thumbnailContainerClass: 'pictures',
};

//Имена классов для модуля полноразмерного изображения
const fullSizePhotoModuleClasses = {
  bigPictureImageClass: 'big-picture__img',
  bigPictureLikesClass: 'likes-count',
  bigPictureDescriptionClass: 'social__caption',
  numberCommentsShown: 5,
};

//Имена классов для модуля комментариев
const commentsObjectModuleClasses = {
  listCommentsClass: 'social__comments',
  commentShownCountClass: 'social__comment-shown-count',
  commentTotalCountClass: 'social__comment-total-count',
  commentsLoaderButtonClass: 'comments-loader',
};

//Имена классов для формы загрузки изображений
const uploadFormClasses = {
  imageUploadFormClass: 'img-upload__form',
  imageUploadInputClass: 'img-upload__input',
  imageUploadPreviewClass: 'img-upload__preview img',
  imageEditingFormClass: 'img-upload__overlay',
  formCloseButtonClass: 'img-upload__cancel',
  hashtagInputClass: 'text__hashtags',
};

export { AUTHORS_NAMES, PHOTO_DESCRIPTIONS, COMMENT_MESSAGES, MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER };
export { MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT, USER_PHOTO_COUNT, MIN_LIKES_COUNT, MAX_LIKES_COUNT };
export { thumbnailGalleryClasses, galleryModuleClasses, fullSizePhotoModuleClasses, commentsObjectModuleClasses, uploadFormClasses };
