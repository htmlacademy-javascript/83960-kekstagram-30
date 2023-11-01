const bigPictureContainer = document.querySelector('.big-picture');
const closeButton = bigPictureContainer.querySelector('.big-picture__cancel');

const isPictureContainerHidden = function () {
  return bigPictureContainer.classList.contains('hidden');
};

const closeBigPicture = function (evt) {
  if ((evt.type === 'click') || (evt.type === 'keydown' && evt.keyCode === 27 && !isPictureContainerHidden())) {
    bigPictureContainer.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
};

const showBigPicture = function (bigPicture) {
  //const image = bigPictureContainer.querySelector('.big-picture__img').children[0];
  bigPictureContainer.querySelector('.big-picture__img').children[0].src = bigPicture.url;
  bigPictureContainer.querySelector('.likes-count').textContent = bigPicture.likes;
  bigPictureContainer.querySelector('.social__caption').textContent = bigPicture.description;
  //console.dir(image);
  bigPictureContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');
};
closeButton.addEventListener('click', closeBigPicture);
document.addEventListener('keydown', closeBigPicture);
export { showBigPicture };
