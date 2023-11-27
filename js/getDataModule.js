const getResponse = function (response) {
  if (response.ok) {
    return response.json();
  }

  throw new Error(`${response.status} ${response.statusText}`);
};

const getData = function (handler, data) {
  handler(data);
};

const getError = function (handler, err) {
  handler(err);
};

const createLoader = function (onGetData, onGetError) {
  return fetch('https://30.javascript.pages.academy/kekstagram/data')
    .then((response) => getResponse(response))
    .then((data) => getData(onGetData, data))
    .catch((err) => getError(onGetError, err));
};

export { createLoader };
