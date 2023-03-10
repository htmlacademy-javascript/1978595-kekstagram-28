import getRandomInteger from './random-numbers-generation.js';

const authorNames = ['Артем', 'Сергей', 'Дмитрий', 'Антон', 'Виктор'];
const messages = ['Всё отлично!','В целом всё неплохо. Но не всё.','Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.','Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.','Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.','Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const descriptions = ['Ну, как-то так.', 'Не пытайтесь понять смысл этой фотограффии, я сам его не понимаю.', 'Это кошка.', 'Отпуск в самом разгаре.'];


const getUnicRandomId = (min, max) => {
  const previousValues = [];
  return () => {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      //console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getPhotoId = getUnicRandomId(1,25);
const getIdForUrl = getUnicRandomId(1,25);
const getCommentId = getUnicRandomId(1,10000);


const getComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInteger(1,6)}.svg`,
  message: messages[getRandomInteger(0, messages.length - 1)],
  name: authorNames[getRandomInteger(0, authorNames.length - 1)]
});

const getPhotoAttributes = () => ({
  id: getPhotoId(),
  url: `photos/${getIdForUrl()}.jpg`,
  description: descriptions[getRandomInteger(0, descriptions.length - 1)],
  likes: getRandomInteger(15, 200),
  comment: getComment()
});

const getPhotoAttributesArray = () => {
  const photoAttributesArray = [];
  for (let i = 1; i <= 25; i++) {
    photoAttributesArray.push(getPhotoAttributes());
  }
  return photoAttributesArray;
};

export {getPhotoAttributesArray};
