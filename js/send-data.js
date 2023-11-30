const getResponse = function (handler, response) {
  if (response.ok) {
    handler();
  } else {
    throw new Error(`${response.status} ${response.statusText}`);
  }
};

const getError = function (handler, err) {
  handler(err);
};

const sendData = function (onSuccess, onError, sentData) {
  fetch('https://30.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body: sentData,
    }
  )
    .then((response) => getResponse(onSuccess, response))
    .catch((err) => getError(onError, err));
};

export { sendData };
