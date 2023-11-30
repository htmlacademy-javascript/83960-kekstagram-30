const preview = document.querySelector('.img-upload__preview img');
const root = document.querySelector(':root');
root.style.setProperty('--effectValue', 1);

const sliderOptionsObject = {
  start: 0,
  connect: 'lower',
  range: {
    'min': 0,
    'max': 100
  },
  tooltips: [true],
  format: {
    to: function (value) {
      return value;
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
  step: 1,
};
const sliderObject = {
  sliderOptions: sliderOptionsObject,
  visible: true,
  init(sliderElement, sliderContainer, sliderInput) {
    this.slider = noUiSlider.create(sliderElement, this.sliderOptions);
    this.sliderInput = sliderInput;
    this.sliderContainer = sliderContainer;
    this.hide();
    this.slider.on('update', this.onSliderUpdate);
  },
  show() {
    if (!this.visible) {
      this.sliderContainer.classList.remove('hidden');
      this.visible = true;
    }
  },
  hide() {
    if (this.visible) {
      this.sliderContainer.classList.add('hidden');
      this.visible = false;
    }
  },
  onSliderUpdate() {
    sliderObject.sliderInput.value = sliderObject.slider.get();
  },
};


const effectSelectionObject = {
  effectLevelSlider: sliderObject,
  currentEffect: 'none',
  init(form) {
    this.listEffects = form.elements.namedItem('effect');
    this.listEffects.forEach((item) => this.setEventHandler(item));
    this.currentEffect = 'none';
    this.initializeSlider();
  },
  initializeSlider() {
    const sliderContainer = document.querySelector('.img-upload__effect-level');
    const sliderElement = sliderContainer.querySelector('.effect-level__slider');
    const sliderInput = sliderContainer.querySelector('.effect-level__value');
    this.effectLevelSlider.init(sliderElement, sliderContainer, sliderInput);
    this.effectLevelSlider.slider.on('update', this.onEffectLevelSliderUpdate);
  },
  reset() {
    this.listEffects.forEach((item) => this.unsetEventHandler(item));
    this.effectLevelSlider.slider.off();
    this.effectLevelSlider.slider.destroy();
    this.currentEffect = 'none';
  },
  setEventHandler(item) {
    item.addEventListener('click', this.onListEffectsClick);
  },
  unsetEventHandler(item) {
    item.removeEventListener('click', this.onListEffectsClick);
  },
  setChromeEffect() {
    this.effectLevelSlider.show();
    this.effectLevelSlider.sliderOptions.range.min = 0;
    this.effectLevelSlider.sliderOptions.range.max = 1;
    this.effectLevelSlider.sliderOptions.step = 0.1;
    this.effectLevelSlider.sliderOptions.start = 1;
    this.effectLevelSlider.slider.updateOptions(this.effectLevelSlider.sliderOptions);
    preview.style.filter = 'grayscale(var(--effectValue))';
  },
  setSepiaEffect() {
    this.effectLevelSlider.show();
    this.effectLevelSlider.sliderOptions.range.min = 0;
    this.effectLevelSlider.sliderOptions.range.max = 1;
    this.effectLevelSlider.sliderOptions.step = 0.1;
    this.effectLevelSlider.sliderOptions.start = 1;
    this.effectLevelSlider.slider.updateOptions(this.effectLevelSlider.sliderOptions);
    preview.style.filter = 'sepia(var(--effectValue))';
  },
  setMarvinEffect() {
    this.effectLevelSlider.show();
    this.effectLevelSlider.sliderOptions.range.min = 0;
    this.effectLevelSlider.sliderOptions.range.max = 100;
    this.effectLevelSlider.sliderOptions.step = 1;
    this.effectLevelSlider.sliderOptions.start = 100;
    this.effectLevelSlider.slider.updateOptions(this.effectLevelSlider.sliderOptions);
    preview.style.filter = 'invert(calc(var(--effectValue) * 1%))';
  },
  setPhobosEffect() {
    this.effectLevelSlider.show();
    this.effectLevelSlider.sliderOptions.range.min = 0;
    this.effectLevelSlider.sliderOptions.range.max = 3;
    this.effectLevelSlider.sliderOptions.step = 0.1;
    this.effectLevelSlider.sliderOptions.start = 3;
    this.effectLevelSlider.slider.updateOptions(this.effectLevelSlider.sliderOptions);
    preview.style.filter = 'blur(calc(var(--effectValue) * 1px))';
  },
  setHeatEffect() {
    this.effectLevelSlider.show();
    this.effectLevelSlider.sliderOptions.range.min = 1;
    this.effectLevelSlider.sliderOptions.range.max = 3;
    this.effectLevelSlider.sliderOptions.step = 0.1;
    this.effectLevelSlider.sliderOptions.start = 3;
    this.effectLevelSlider.slider.updateOptions(this.effectLevelSlider.sliderOptions);
    preview.style.filter = 'brightness(var(--effectValue))';
  },
  setNoneEffect() {
    preview.style.filter = '';
    this.effectLevelSlider.hide();
  },
  onEffectLevelSliderUpdate() {
    root.style.setProperty('--effectValue', effectSelectionObject.effectLevelSlider.sliderInput.value);
  },
  onListEffectsClick(evt) {
    if (effectSelectionObject.currentEffect !== evt.target.value) {
      effectSelectionObject.currentEffect = evt.target.value;
      switch (evt.target.value) {
        case 'chrome':
          effectSelectionObject.setChromeEffect();
          break;
        case 'sepia':
          effectSelectionObject.setSepiaEffect();
          break;
        case 'marvin':
          effectSelectionObject.setMarvinEffect();
          break;
        case 'phobos':
          effectSelectionObject.setPhobosEffect();
          break;
        case 'heat':
          effectSelectionObject.setHeatEffect();
          break;
        case 'none':
          effectSelectionObject.setNoneEffect();
          break;
      }
    }
  },
};

export { sliderObject, effectSelectionObject };
