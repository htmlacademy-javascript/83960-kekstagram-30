import { commentsList } from './commentsObjectModule';
import { CLASS_CLOSE_BUTTON, CLASS_BIG_PICTURE_IMAGE, CLASS_BIG_PICTURE_LIKES, CLASS_BIG_PICTURE_DESCRIPTION } from './constants';

const fullSizePhoto = {
  init(containerClass) {
    this.container = containerClass;
    this.closeButton = CLASS_CLOSE_BUTTON;
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
    this.container.querySelector(`.${CLASS_BIG_PICTURE_IMAGE}`).children[0].src = value;
  },
  setLikesCount(value) {
    this.container.querySelector(`.${CLASS_BIG_PICTURE_LIKES}`).textContent = value;
  },
  setDescription(value) {
    this.container.querySelector(`.${CLASS_BIG_PICTURE_DESCRIPTION}`).textContent = value;
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
    if (evt.keyCode === 27 && !fullSizePhoto.hidden) {
      fullSizePhoto.hide();
    }
  },
};

export { fullSizePhoto };
