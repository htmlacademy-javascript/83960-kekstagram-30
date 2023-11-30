import { UploadFormClasses as classes } from './constants.js';
import { setBodyModalMode } from './utils.js';
import { scalingObject } from './image-scaling.js';
import { sendData } from './send-data.js';
import { effectSelectionObject } from './slider-object.js';
import { pristineFormValidator } from './upload-form-validation.js';

const imageUploadForm = document.querySelector(`.${classes.IMAGE_UPLOAD_FORM_CLASS}`);
const imageUploadInput = imageUploadForm.querySelector(`.${classes.IMAGE_UPLOAD_INPUT_CLASS}`);
const submitButton = imageUploadForm.querySelector(`.${classes.FORM_SUBMIT_BUTTON_CLASS}`);

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
      if (imageEditingForm.messagePosted) {
        imageEditingForm.closeMessage('error');
      } else {
        if ((evt.target.className === 'text__description') || (evt.target.className === 'text__hashtags')) {
          evt.stopPropagation();
          evt.preventDefault();
        } else {
          evt.preventDefault();
          imageEditingForm.hide();
        }
      }
    }
  },
  successSend() {
    imageEditingForm.showMessage('success');
    submitButton.disabled = false;
    imageEditingForm.hide();
  },
  failSend() {
    imageEditingForm.showMessage('error');
    submitButton.disabled = false;
  },
  showMessage(id) {
    const template = document.querySelector(`#${id}`).content;
    const message = template.cloneNode(true);
    document.body.append(message);
    imageEditingForm.messagePosted = id === 'error';
    const messageSection = document.querySelector(`.${id}`);
    messageSection.addEventListener('click', imageEditingForm.onSectionClick);
  },
  closeMessage(id) {
    const section = document.querySelector(`.${id}`);
    section.removeEventListener('click', imageEditingForm.onSectionClick);
    section.remove();
    imageEditingForm.messagePosted = false;
  },
  onSectionClick(evt) {
    if ((evt.target.className === 'success') || (evt.target.className === 'success__button')) {
      imageEditingForm.closeMessage('success');
    } else if ((evt.target.className === 'error') || (evt.target.className === 'error__button')) {
      imageEditingForm.closeMessage('error');
    }
  },
  onImageUploadFormSubmit(evt) {
    evt.preventDefault();
    if (imageEditingForm._validator.pristine.validate()) {
      const sentData = new FormData(evt.target);
      submitButton.disabled = true;
      sendData(imageEditingForm.successSend, imageEditingForm.failSend, sentData);
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
    this.preview.style.filter = '';
    this.preview.src = '';
    imageUploadInput.value = '';
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
