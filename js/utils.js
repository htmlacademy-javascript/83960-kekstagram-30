const setBodyModalMode = function(value) {
  if (value) {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  }
};

const closeGetErrorMessage = function () {
  document.querySelector('.data-error').remove();
};

const showGetErrorMessage = function () {
  const errorTemplate = document.querySelector('#data-error').content;
  const errorMessage = errorTemplate.cloneNode(true);
  document.body.append(errorMessage);
  setTimeout(closeGetErrorMessage, 5000);
};

export
{
  setBodyModalMode,
  showGetErrorMessage
};
