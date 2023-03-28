import {getPhotoAttributesArray} from './photo-attributes-generation.js';

const pictureTemplate = document.querySelector('#picture').content;
const pictureContainer = document.querySelector('.pictures');
const pictures = getPhotoAttributesArray();

const photoList = document.createDocumentFragment();

for (const photo of pictures) {

  const newPhoto = pictureTemplate.cloneNode(true);
  const newPhotoImg = newPhoto.querySelector('.picture__img');
  const newPhotoComments = newPhoto.querySelector('.picture__comments');
  const newPhotoLikes = newPhoto.querySelector('.picture__likes');

  newPhotoImg.setAttribute('src',photo.url);
  newPhotoComments.textContent = Object.keys(photo.comment).length;
  newPhotoLikes.textContent = photo.likes;

  photoList.appendChild(newPhoto);

}

pictureContainer.appendChild(photoList);
