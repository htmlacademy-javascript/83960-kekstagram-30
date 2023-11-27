import { ImageScalingClasses as classes } from './constants.js';

const scalingObject = {
  init(scalingImage) {
    this._scalingImage = scalingImage;
    this._zoomOutButton = document.querySelector(`.${classes.ZOOM_OUT_BUTTON_CLASS}`);
    this._zoomOutButton.addEventListener('click', this.onZoomButtonClick);
    this._zoomInButton = document.querySelector(`.${classes.ZOOM_IN_BUTTON_CLASS}`);
    this._zoomInButton.addEventListener('click', this.onZoomButtonClick);
    this._zoomValueInput = document.querySelector(`.${classes.ZOOM_VALUE_INPUT_CLASS}`);
  },
  reset() {
    this._scalingImage.style.transform = null;
    this._scalingImage = null;
    this._zoomOutButton.removeEventListener('click', this.onZoomButtonClick);
    this._zoomInButton.removeEventListener('click', this.onZoomButtonClick);
  },
  changeImageScaling(scalingStep) {
    let currentScalingValue = parseInt(scalingObject._zoomValueInput.value, 10);
    currentScalingValue += scalingStep;
    currentScalingValue = (currentScalingValue < classes.MIN_SCALE_VALUE) ? classes.MIN_SCALE_VALUE : currentScalingValue;
    currentScalingValue = (currentScalingValue > classes.MAX_SCALE_VALUE) ? classes.MAX_SCALE_VALUE : currentScalingValue;
    this._scalingImage.style.transform = `scale(${currentScalingValue / 100})`;
    this._zoomValueInput.value = `${currentScalingValue}%`;
  },
  onZoomButtonClick(evt) {
    if (evt.target.classList.contains(classes.ZOOM_OUT_BUTTON_CLASS)) {
      scalingObject.changeImageScaling(-classes.SCALING_STEP);
    } else if (evt.target.classList.contains(classes.ZOOM_IN_BUTTON_CLASS)) {
      scalingObject.changeImageScaling(classes.SCALING_STEP);
    }
  },
};

export { scalingObject };
