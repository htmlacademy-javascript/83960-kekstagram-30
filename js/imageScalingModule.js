const imageScalingClasses = {
  zoomOutButtonClass: 'scale__control--smaller',
  zoomInButtonClass: 'scale__control--bigger',
  zoomValueInputClass: 'scale__control--value',
};

const scalingObject = {
  init(scalingImage) {
    this._scalingImage = scalingImage;
    this._zoomOutButton = document.querySelector(`.${imageScalingClasses.zoomOutButtonClass}`);
    this._zoomOutButton.addEventListener('click', this.onZoomButtonClick);
    this._zoomInButton = document.querySelector(`.${imageScalingClasses.zoomInButtonClass}`);
    this._zoomInButton.addEventListener('click', this.onZoomButtonClick);
    this._zoomValueInput = document.querySelector(`.${imageScalingClasses.zoomValueInputClass}`);
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
    currentScalingValue = (currentScalingValue < 25) ? 25 : currentScalingValue;
    currentScalingValue = (currentScalingValue > 100) ? 100 : currentScalingValue;
    this._scalingImage.style.transform = `scale(${currentScalingValue / 100})`;
    this._zoomValueInput.value = `${currentScalingValue}%`;
  },
  onZoomButtonClick(evt) {
    if (evt.target.classList.contains(imageScalingClasses.zoomOutButtonClass)) {
      scalingObject.changeImageScaling(-25);
    } else if (evt.target.classList.contains(imageScalingClasses.zoomInButtonClass)) {
      scalingObject.changeImageScaling(25);
    }
  },
};

export { scalingObject };
