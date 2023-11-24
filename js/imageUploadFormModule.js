import { UploadFormClasses as classes } from './constants.js';
import { setBodyModalMode } from './function.js';
import { scalingObject } from './imageScalingModule.js';
import { effectSelectionObject } from './sliderObjectModule.js';
import { pristineFormValidator } from './uploadFormValidation.js';
//import { effectLevelSlider } from './sliderObjectModule.js';

const imageUploadForm = document.querySelector(`.${classes.IMAGE_UPLOAD_FORM_CLASS}`);
const imageUploadInput = imageUploadForm.querySelector(`.${classes.IMAGE_UPLOAD_INPUT_CLASS}`);

const imageEditingForm = {
  _validator: pristineFormValidator,
  _effectSelection: effectSelectionObject,
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
      if ((evt.target.className === 'text__description') || (evt.target.className === 'text__hashtags')) {
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
    this.container = classes.IMAGE_EDITING_FORM_CLASS;
    this.preview = classes.IMAGE_UPLOAD_PREVIEW_CLASS;
    this.closeButton = classes.FORM_CLOSE_BUTTON_CLASS;
    this._validator.init(imageUploadForm, classes.HASHTAG_INPUT_CLASS);
    this._effectSelection.init(imageUploadForm);
  },
  show(file) {
    this.preview.src = URL.createObjectURL(file);
    scalingObject.init(this.preview);
    this.container.classList.remove('hidden');
    setBodyModalMode(true);
    this.closeButton.addEventListener('click', this.onCloseButtonClick);
    imageUploadForm.addEventListener('submit', this.onImageUploadFormSubmit);
    document.addEventListener('keydown', this.onDocumentKeyDown);
  },
  hide() {
    imageUploadForm.reset();
    scalingObject.reset();
    this._effectSelection.reset();
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
