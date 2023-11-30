import { RANDOM_PHOTO_COUNT, ThumbnailGalleryClasses as classes } from './constants.js';
import { fullSizePhoto } from './full-size-photo.js';
import { getRandomElements } from './utils.js';

const compareLikes = function (photoA, photoB) {
  return photoB.likes - photoA.likes;
};

const thumbnailsGallery = {
  init(source, idTemplate, className) {
    this._thumbnailsSource = source;
    this.thumbnailTemplate = idTemplate;
    this.thumbnailsContainer = className;
    this._containerHTML = this.thumbnailsContainer.innerHTML;
    this.thumbnailsContainer.addEventListener('click', this._onThumbnailsContainerClick);
    this.fill(this._thumbnailsSource);
  },
  _onThumbnailsContainerClick(evt) {
    if (evt.target.className === classes.PICTURE_IMAGE_CLASS) {
      evt.preventDefault();
      const pictureFileName = evt.target.src.split('/').at(-1);
      thumbnailsGallery.clickedPicture = thumbnailsGallery._thumbnailsSource.findIndex((picture) => (picture.url.includes(`/${pictureFileName}`)));
      fullSizePhoto.show(thumbnailsGallery.clickedPicture);
    }
  },
  _thumbnailsSource: [],
  _containerHTML: '',
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
  set filter(newFilter) {
    if (newFilter !== this._filter) {
      this._filter = newFilter;
      this.onFilterChange();
    }
  },
  get filter() {
    return this._filter;
  },
  onFilterChange() {
    switch (this._filter) {
      case 'filter-default':
        this.fill(this._thumbnailsSource);
        break;
      case 'filter-random':
        this.fill(getRandomElements(this._thumbnailsSource, RANDOM_PHOTO_COUNT));
        break;
      case 'filter-discussed':
        this.fill(this._thumbnailsSource.slice().sort(compareLikes));
        break;
    }
  },
  _createNewThumbnail(photo) {
    const newThumbnail = this.thumbnailTemplate.cloneNode(true);
    const newThumbnailImage = newThumbnail.querySelector(`.${classes.PICTURE_IMAGE_CLASS}`);
    newThumbnailImage.src = photo.url;
    newThumbnailImage.alt = photo.description;
    newThumbnail.querySelector(`.${classes.PICTURE_LIKES_CLASS}`).textContent = photo.likes;
    newThumbnail.querySelector(`.${classes.PICTURE_COMMENTS_CLASS}`).textContent = photo.comments.length;
    return newThumbnail;
  },
  fill(arrayPhoto) {
    const documentFragment = document.createDocumentFragment();
    arrayPhoto.forEach((picture) => {
      documentFragment.appendChild(this._createNewThumbnail(picture));
    });
    this.clearPhotoList();
    this.thumbnailsContainer.appendChild(documentFragment);
  },
  clearPhotoList() {
    const photoList = this.thumbnailsContainer.querySelectorAll(`.${classes.PICTURE_ELEMENT_CLASS}`);
    for (const photo of photoList) {
      photo.remove();
    }
  }
};

export { thumbnailsGallery };
