const IMAGE_UPLOAD_FORM_CLASS = 'img-upload__form';
const IMAGE_UPLOAD_INPUT_CLASS = 'img-upload__input';
const IMAGE_EDITING_FORM_CLASS = 'img-upload__overlay';
const IMAGE_UPLOAD_PREVIEW_CLASS = 'img-upload__preview img';

const imageUploadForm = document.querySelector(`.${IMAGE_UPLOAD_FORM_CLASS}`);
const imageUploadInput = imageUploadForm.querySelector(`.${IMAGE_UPLOAD_INPUT_CLASS}`);
const imageEditingForm = imageUploadForm.querySelector(`.${IMAGE_EDITING_FORM_CLASS}`);
const imageUploadPreview = imageUploadForm.querySelector(`.${IMAGE_UPLOAD_PREVIEW_CLASS}`);

const onImageUploadInputChange = function () {
  imageUploadPreview.src = URL.createObjectURL(imageUploadInput.files[0]);
  imageEditingForm.classList.remove('hidden');
};

imageUploadInput.addEventListener('change', onImageUploadInputChange);
