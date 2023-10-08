const checkPhrase = 'Лёша на полке клопа нашёл';

function prepareToCheck(str) {
  const result = str.toLowerCase().replaceAll(' ', '');
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
    if (arrayDigits.includes(char)) {
      result = result + char;
    }
  }
  return (Number(result)) ? Number(result) : NaN;
}

//TODO: Убрать выводы в консоль и добавить вызовы функций
const checkPalindrome = isPalindrome(checkPhrase);
console.log(checkPalindrome);

console.log(checkLength('dgdsfhgrthsdfhgdfgdsfgsdgsertser', 20));

console.log(numberFromString('dfgg gdfg gdfgr hdfhr23t'));
