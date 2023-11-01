const CLASS_CLOSE_BUTTON = 'big-picture__cancel';

const fullSizePhoto = {
  set container(className) {
    this._container = document.querySelector(className);
  },
  get container() {
    return this._container;
  },
  set closeButton(className) {
    this._closeButton = this.container.querySelector(CLASS_CLOSE_BUTTON);
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
  show() {
    this.hidden = false;
  },
  hide() {
    this.hidden = true;
  }
};

export { fullSizePhoto };
