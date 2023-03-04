const isShorter = (string = '', strLengthMax = 0) => string.length <= strLengthMax;

const isPalindrome = (string = '') => {

  string = string.replaceAll(' ','');
  string = string.toLowerCase();

  const strLength = string.length;
  const strStart = 0;
  const strEnd = strLength - 1;

  for (let i = strStart, j = strEnd; i < j; i++, j--) {
    if (string[i] !== string[j]) {
      return false;
    } else {
      continue;
    }
  }

  return true;

};

const getNumber = (string = '') => {
  let resultString = '';
  const strLength = string.length;
  for (let i = 0; i < strLength; i++) {
    if (string[i] === '0' ||
    string[i] === '1' ||
    string[i] === '2' ||
    string[i] === '3' ||
    string[i] === '4' ||
    string[i] === '5' ||
    string[i] === '6' ||
    string[i] === '7' ||
    string[i] === '8' ||
    string[i] === '9') {

      resultString = resultString + string[i];
    }
  }

  if (resultString === '') {
    return NaN;
  }
  const result = Number(resultString);
  return result;
};

const stringCompletion = (string = '', strLengthMax = 0, prefixStr = '') => {
  if (string.length >= strLengthMax) {
    return string;
  }

  let prefix = '';
  for (let i = string.length, j = 0; i < strLengthMax; i++) {
    prefix = prefix + prefixStr[j];
    j++;
    if (j === prefixStr.length) {
      j = 0;
      string = prefix + string;
      prefix = '';
    }
  }
  return prefix + string;
};

isShorter();
isPalindrome();
getNumber();
stringCompletion();
