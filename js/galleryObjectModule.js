import { CLASS_PICTURE_IMAGE, CLASS_PICTURE_LIKES, CLASS_PICTURE_COMMENTS } from './constants';

const thumbnailsGallery = {
  init(source, idTemplate, className) {
    this._thumbnailsSource = source;
    this.thumbnailTemplate = idTemplate;
    this.thumbnailsContainer = className;
    this.thumbnailsContainer.onclick = this._thumbnailsContainerClick;
  },
  _thumbnailsContainerClick(evt) {
    if (evt.target.className === CLASS_PICTURE_IMAGE) {
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
    const newThumbnailImage = newThumbnail.querySelector(`.${CLASS_PICTURE_IMAGE}`);
    newThumbnailImage.src = photo.url;
    newThumbnailImage.alt = photo.description;
    newThumbnail.querySelector(`.${CLASS_PICTURE_LIKES}`).textContent = photo.likes;
    newThumbnail.querySelector(`.${CLASS_PICTURE_COMMENTS}`).textContent = photo.comments.length;
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
