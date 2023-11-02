const CLASS_CLOSE_BUTTON = 'big-picture__cancel';

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
  show(picture) {
    this.source = picture;
    this.container.querySelector('.big-picture__img').children[0].src = picture.url;
    document.body.classList.add('modal-open');
    this.hidden = false;
    this.closeButton.addEventListener('click', this.closeButtonClick);
    document.addEventListener('keydown', this.escapeKeyDown);
  },
  hide() {
    document.body.classList.remove('modal-open');
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
