import { commentsList } from './commentsObjectModule';
import { BIG_PICTURE_CLOSE_BUTTON_CLASS, BIG_PICTURE_IMAGE_CLASS, BIG_PICTURE_LIKES_CLASS, BIG_PICTURE_DESCRIPTION_CLASS } from './constants';

const fullSizePhoto = {
  init(containerClass) {
    this.container = containerClass;
    this.closeButton = BIG_PICTURE_CLOSE_BUTTON_CLASS;
  },
  set source(value) {
    this._source = value;
  },
  get source() {
    return this._source;
  },
  set container(className) {
    this._container = document.querySelector(`.${className}`);
  },
  get container() {
    return this._container;
  },
  set closeButton(className) {
    this._closeButton = this.container.querySelector(`.${className}`);
  },
  get closeButton() {
    return this._closeButton;
  },
  set hidden(value) {
    if (value) {
      this.container.classList.add('hidden');
    } else {
      this.container.classList.remove('hidden');
    }
    this._hidden = value;
  },
  get hidden() {
    return this._hidden;
  },
  comments: commentsList,
  setPictureUrl(value) {
    this.container.querySelector(`.${BIG_PICTURE_IMAGE_CLASS}`).children[0].src = value;
  },
  setLikesCount(value) {
    this.container.querySelector(`.${BIG_PICTURE_LIKES_CLASS}`).textContent = value;
  },
  setDescription(value) {
    this.container.querySelector(`.${BIG_PICTURE_DESCRIPTION_CLASS}`).textContent = value;
  },
  show(picture) {
    this.source = picture;
    this.setPictureUrl(picture.url);
    this.setLikesCount(picture.likes);
    this.setDescription(picture.description);
    this.comments.init(picture.comments, 5);
    document.body.classList.add('modal-open');
    this.hidden = false;
    this.closeButton.addEventListener('click', this.closeButtonClick);
    document.addEventListener('keydown', this.escapeKeyDown);
  },
  hide() {
    document.body.classList.remove('modal-open');
    this.comments.release();
    this.hidden = true;
    this.closeButton.removeEventListener('click', this.closeButtonClick);
    document.removeEventListener('keydown', this.escapeKeyDown);
  },
  closeButtonClick() {
    fullSizePhoto.hide();
  },
  escapeKeyDown(evt) {
    if (evt.key === 'Escape' && !fullSizePhoto.hidden) {
      fullSizePhoto.hide();
    }
  },
};

export { fullSizePhoto };
