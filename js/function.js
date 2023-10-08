const checkPhrase = 'Лёша на полке клопа нашёл';

function prepareToCheck(str) {
  const result = (str.toLowerCase()).replaceAll(' ', '');
  return result;
}

function isPalindrome(phrase) {
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

function checkLength(str, maxLength) {
  return str.length <= maxLength;
}

function numberFromString(str) {
  const arrayDigits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const temp = String(str);
  let result = '';
  for (const char of temp) {
    if (arrayDigits.indexOf(char) !== -1) {
      result = result + char;
    }
  }
  if (Number(result)) {
    return Number(result);
  } else {
    return NaN;
  }
}


const check = isPalindrome(checkPhrase);
console.log(check);

console.log(checkLength('dgdsfhgrthsdfhgdfgdsfgsdgsertser', 20));

console.log(numberFromString('dfgg gdfg gdfgr hdfhrt'));
