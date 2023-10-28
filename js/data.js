import { NAMES, PHOTO_DESCRIPTIONS, COMMENT_MESSAGES } from './constants.js';
import { MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER } from './constants.js';
import { MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT, USER_PHOTO_COUNT, MIN_LIKES_COUNT, MAX_LIKES_COUNT } from './constants.js';
import { getRandomInteger, getRandomElement, generateUniqueID } from './function.js';

const createComment = () => {
  const getCommentID = generateUniqueID();
  return {
    id: getCommentID(),
    avatar: `img/avatar-${getRandomInteger(MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER)}.svg`,
    message: getRandomElement(COMMENT_MESSAGES),
    name: getRandomElement(NAMES)
  };
};

const generateComments = () => {
  const countComments = getRandomInteger(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT);
  return Array.from({ length: countComments }, createComment);
};

const getPhotoID = generateUniqueID(1, USER_PHOTO_COUNT);

const createPhotoDescription = () => {
  const photoID = getPhotoID();
  return {
    id: photoID,
    url: `photos/${photoID}.jpg`,
    description: getRandomElement(PHOTO_DESCRIPTIONS),
    likes: getRandomInteger(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
    comments: generateComments()
  };
};

const userPhotos = Array.from({ length: 25 }, createPhotoDescription);

//TODO: Убрать вывод в консоль
console.table(userPhotos);
