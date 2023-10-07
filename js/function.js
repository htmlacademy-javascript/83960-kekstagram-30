const checkPhrase = 'А роза упала на лапу Азора';
// const checkPhrase = 2157512;

function prepareToCheck(str) {
  let result = (str.toLowerCase()).replaceAll(' ', '');
  // result = result.replaceAll(' ', '');
  return result;
}

function checkPalindrome(phrase) {
  // const len = (phrase.length - 1) / 2;
  const preparedPhrase = prepareToCheck(String(phrase));
  const len = preparedPhrase.length - 1;
  let i = 0;
  let result = true;
  while (i <= len / 2 && result) {
    result = (preparedPhrase[i] === preparedPhrase[len - i]);
    i++;
  }
  return result;
}

let check = checkPalindrome(checkPhrase);
alert(check);
