import { PICTURE_IMAGE_CLASS, PICTURE_LIKES_CLASS, PICTURE_COMMENTS_CLASS } from './constants.js';

const thumbnailsGallery = {
  init(source, idTemplate, className) {
    this._thumbnailsSource = source;
    this.thumbnailTemplate = idTemplate;
    this.thumbnailsContainer = className;
    this.thumbnailsContainer.addEventListener('click', this._onThumbnailsContainerClick);
    this.fill();
  },
  _onThumbnailsContainerClick(evt) {
    if (evt.target.className === PICTURE_IMAGE_CLASS) {
      evt.preventDefault();
      const pictureFileName = evt.target.src.split('/').at(-1);
      thumbnailsGallery.clickedPicture = thumbnailsGallery._thumbnailsSource.findIndex((picture) => (picture.url.includes(`/${pictureFileName}`)));
    }
  },
  _thumbnailsSource: [],
  set thumbnailTemplate(idTemplate) {
    this._thumbnailTemplate = document.querySelector(`#${idTemplate}`).content;
  },
  get thumbnailTemplate() {
    return this._thumbnailTemplate;
  },
  set thumbnailsContainer(className) {
    this._thumbnailsContainer = document.querySelector(`.${className}`);
  },
  get thumbnailsContainer() {
    return this._thumbnailsContainer;
  },
  set clickedPicture(index) {
    this._indexClickedPicture = index;
  },
  get clickedPicture() {
    return this._thumbnailsSource[this._indexClickedPicture];
  },
  _createNewThumbnail(photo) {
    const newThumbnail = this.thumbnailTemplate.cloneNode(true);
    const newThumbnailImage = newThumbnail.querySelector(`.${PICTURE_IMAGE_CLASS}`);
    newThumbnailImage.src = photo.url;
    newThumbnailImage.alt = photo.description;
    newThumbnail.querySelector(`.${PICTURE_LIKES_CLASS}`).textContent = photo.likes;
    newThumbnail.querySelector(`.${PICTURE_COMMENTS_CLASS}`).textContent = photo.comments.length;
    return newThumbnail;
  },
  fill() {
    const documentFragment = document.createDocumentFragment();
    this._thumbnailsSource.forEach((picture) => {
      documentFragment.appendChild(this._createNewThumbnail(picture));
    });
    this.thumbnailsContainer.appendChild(documentFragment);
  },
};

export { thumbnailsGallery };
