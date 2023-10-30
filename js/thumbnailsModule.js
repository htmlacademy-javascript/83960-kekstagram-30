const templateThumbnail = document.querySelector('#picture').content;

const createNewThumbnail = function (userPhoto) {
  const newThumbnail = templateThumbnail.cloneNode(true);
  const newThumbnailImage = newThumbnail.querySelector('.picture__img');
  newThumbnailImage.src = userPhoto.url;
  newThumbnailImage.alt = userPhoto.description;
  newThumbnail.querySelector('.picture__likes').textContent = userPhoto.likes;
  newThumbnail.querySelector('.picture__comments').textContent = userPhoto.comments.length;
  return newThumbnail;
};

export { createNewThumbnail };
