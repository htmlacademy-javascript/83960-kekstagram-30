import { uploadFormClasses as classes } from './constants.js';
import { setBodyModalMode } from './function.js';
import { pristineFormValidator } from './uploadFormValidation.js';

const imageUploadForm = document.querySelector(`.${classes.imageUploadFormClass}`);
const imageUploadInput = imageUploadForm.querySelector(`.${classes.imageUploadInputClass}`);

const imageEditingForm = {
  _validator: pristineFormValidator,
  set container(formClassName) {
    this._container = imageUploadForm.querySelector(`.${formClassName}`);
  },
  get container() {
    return this._container;
  },
  set preview(previewClass) {
    this._preview = imageUploadForm.querySelector(`.${previewClass}`);
  },
  get preview() {
    return this._preview;
  },
  get hidden() {
    return this.container.classList.contains('hidden');
  },
  set closeButton(buttonClass) {
    this._closeButton = imageUploadForm.querySelector(`.${buttonClass}`);
  },
  get closeButton() {
    return this._closeButton;
  },
  onCloseButtonClick() {
    imageEditingForm.hide();
  },
  onDocumentKeyDown(evt) {
    if (evt.key === 'Escape') {
      if (evt.target.className === 'text__description') {
        evt.stopPropagation();
        evt.preventDefault();
      } else {
        evt.preventDefault();
        imageEditingForm.hide();
      }
    }
  },
  onImageUploadFormSubmit(evt) {
    if (!this._validator.pristine.validate()) {
      evt.preventDefault();
    }
  },
  init() {
    this.container = classes.imageEditingFormClass;
    this.preview = classes.imageUploadPreviewClass;
    this.closeButton = classes.formCloseButtonClass;
    this._validator.init(imageUploadForm, classes.hashtagInputClass);
  },
  show(file) {
    this.preview.src = URL.createObjectURL(file);
    this.container.classList.remove('hidden');
    setBodyModalMode(true);
    this.closeButton.addEventListener('click', this.onCloseButtonClick);
    imageUploadForm.addEventListener('submit', this.onImageUploadFormSubmit);
    document.addEventListener('keydown', this.onDocumentKeyDown);
  },
  hide() {
    imageUploadForm.reset();
    this.container.classList.add('hidden');
    setBodyModalMode(false);
    this.closeButton.removeEventListener('click', this.onCloseButtonClick);
    imageUploadForm.removeEventListener('submit', this.onImageUploadFormSubmit);
    document.removeEventListener('keydown', this.onDocumentKeyDown);
    this._validator.pristine.reset();
  },
};

const onImageUploadInputChange = function () {
  imageEditingForm.init();
  imageEditingForm.show(imageUploadInput.files[0]);
};

imageUploadInput.addEventListener('change', onImageUploadInputChange);
