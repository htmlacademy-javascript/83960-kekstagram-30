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

const getRandomInteger = function(a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const generateUniqueID = function(min = 1, max = 65535) {
  const uniqueID = [];
  return function () {
    let getID = getRandomInteger(min, max);
    while (uniqueID.includes(getID) && uniqueID.length < max) {
      getID = getRandomInteger(min, max);
    }
    uniqueID.push(getID);
    return getID;
  };
};

const getRandomElements = function (anyArray, amountElements) {
  const getIndex = generateUniqueID(1, anyArray.length - 1);
  const resultArray = [];
  for (let i = 0; i < amountElements; i++) {
    resultArray.push(anyArray[getIndex()]);
  }
  return resultArray;
};


export
{
  setBodyModalMode,
  showGetErrorMessage,
  getRandomElements
};
