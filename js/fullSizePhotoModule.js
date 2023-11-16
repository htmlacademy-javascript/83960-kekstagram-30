import { commentsList } from './commentsObjectModule.js';
import { fullSizePhotoModuleClasses as classes } from './constants.js';

const fullSizePhoto = {
  init(containerClass, closeButtonClass) {
    this.container = containerClass;
    this.closeButton = closeButtonClass;
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
  searchElementInside(className) {
    return this.container.querySelector(`.${className}`);
  },
  setPictureUrl(value) {
    this.searchElementInside(classes.bigPictureImageClass).children[0].src = value;
  },
  setLikesCount(value) {
    this.searchElementInside(classes.bigPictureLikesClass).textContent = value;
  },
  setDescription(value) {
    this.searchElementInside(classes.bigPictureDescriptionClass).textContent = value;
  },
  show({url, likes, description, comments}) {
    this.setPictureUrl(url);
    this.setLikesCount(likes);
    this.setDescription(description);
    this.comments.init(comments, classes.numberCommentsShown);
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
