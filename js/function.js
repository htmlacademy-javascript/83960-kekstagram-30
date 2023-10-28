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

const convertTimeToMinutesFromMidnight = function (anyTime) {
  const time = anyTime.split(':');
  return parseInt(time[0], 10) * 60 + parseInt(time[1], 10);
};

const isMeetingValid = function (startWorkDay, endWorkDay, startMeeting, durationMeeting) {
  const startWorkDayInMinutes = convertTimeToMinutesFromMidnight(startWorkDay);
  const endWorkDayInMinutes = convertTimeToMinutesFromMidnight(endWorkDay);
  const startMeetingInMinutes = convertTimeToMinutesFromMidnight(startMeeting);
  return (startWorkDayInMinutes <= startMeetingInMinutes) && ((startMeetingInMinutes + durationMeeting) <= endWorkDayInMinutes);
};

isPalindrome('Лёша на полке клопа нашёл');

checkLength('dgdsfhgrthsdfhgdfgdsfgsdgsertser', 20);

numberFromString('dfgg gdfg gdfgr hdfhr23t');

isMeetingValid('08:00', '14:30', '14:00', 30);
