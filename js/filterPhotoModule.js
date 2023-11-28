import { thumbnailsGallery } from './galleryObjectModule.js';

const filtersForm = document.querySelector('.img-filters__form');
let activeButton = filtersForm.querySelector('.img-filters__button--active');

const onFiltersFormClick = function (evt) {
  activeButton.classList.remove('img-filters__button--active');
  activeButton = evt.target;
  activeButton.classList.add('img-filters__button--active');
  thumbnailsGallery.filter = evt.target.id;
};

filtersForm.addEventListener('click', onFiltersFormClick);
