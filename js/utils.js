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

/*

const onSectionClick = function (evt) {
  if ((evt.target.className === 'success') || (evt.target.className === 'success__button')) {
    closeSuccessMessage();
  }
};
const onSectionKeyDown = function (evt) {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
    closeSuccessMessage();
  }
};

function closeSuccessMessage() {
  const successSection = document.querySelector('.success');
  successSection.removeEventListener('click', onSectionClick);
  successSection.removeEventListener('keydown', onSectionKeyDown);
  successSection.remove();
};

const showSuccessMessage = function () {
  const successTemplate = document.querySelector('#success').content;
  const successMessage = successTemplate.cloneNode(true);
  document.body.append(successMessage);
  const successSection = document.querySelector('.success');
  successSection.addEventListener('click', onSectionClick);
  successSection.addEventListener('keydown', onSectionKeyDown);
};

const showSendErrorMessage = function () {
  const errorTemplate = document.querySelector('#error').content;
  const errorMessage = errorTemplate.cloneNode(true);
  document.body.append(errorMessage);
  const errorSection = document.querySelector('.error');
  errorSection.addEventListener('click', onSectionClick);
  errorSection.addEventListener('keydown', onSectionKeyDown);
};


export
{
  setBodyModalMode,
  showGetErrorMessage,
  showSuccessMessage,
  showSendErrorMessage
};
*/
