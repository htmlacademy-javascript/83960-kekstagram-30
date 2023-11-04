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

//Имена классов для галереи миниатюр
const CLASS_PICTURE_IMAGE = 'picture__img';
const CLASS_PICTURE_LIKES = 'picture__likes';
const CLASS_PICTURE_COMMENTS = 'picture__comments';

//Имена классов для полноразмерного изображения
const CLASS_CLOSE_BUTTON = 'big-picture__cancel';
const CLASS_BIG_PICTURE_IMAGE = 'big-picture__img';
const CLASS_BIG_PICTURE_LIKES = 'likes-count';
const CLASS_BIG_PICTURE_DESCRIPTION = 'social__caption';


export { AUTHORS_NAMES, PHOTO_DESCRIPTIONS, COMMENT_MESSAGES, MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER };
export { MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT, USER_PHOTO_COUNT, MIN_LIKES_COUNT, MAX_LIKES_COUNT };
export { CLASS_PICTURE_IMAGE, CLASS_PICTURE_LIKES, CLASS_PICTURE_COMMENTS };
export { CLASS_CLOSE_BUTTON, CLASS_BIG_PICTURE_IMAGE, CLASS_BIG_PICTURE_LIKES, CLASS_BIG_PICTURE_DESCRIPTION };
