const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ?!'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomElement = (anyArray) => anyArray[getRandomInteger(0, anyArray.length - 1)];

const generateUniqueID = (min = 1, max = 65535) => {
  const uniqueID = [];
  return function () {
    let getID = getRandomInteger(min, max);
    while (uniqueID.includes(getID)) {
      getID = getRandomInteger(min, max);
    }
    uniqueID.push(getID);
    return getID;
  };
};

const getCommentID = generateUniqueID();

const createComment = () => ({
  id: getCommentID(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomElement(COMMENT_MESSAGES),
  name: getRandomElement(NAMES)
});

const generateComments = () => {
  const countComments = getRandomInteger(0, 30);
  return Array.from({ length: countComments }, createComment);
};

const getPhotoID = generateUniqueID(1, 25);

const createPhotoDescription = () => {
  const photoID = getPhotoID();
  return {
    id: photoID,
    url: `photos/${photoID}.jpg`,
    description: 'gdfghfhtyjrtyryreyuetyu',
    likes: getRandomInteger(15, 200),
    comments: generateComments()
  };
};

const userPhotos = Array.from({ length: 25 }, createPhotoDescription);

//TODO: Убрать вывод в консоль
console.table(userPhotos);
