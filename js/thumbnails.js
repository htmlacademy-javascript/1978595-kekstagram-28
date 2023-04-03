import {getPhotoAttributesArray} from './photo-attributes-generation.js';

const pictureTemplate = document.querySelector('#picture').content;
export const pictureContainer = document.querySelector('.pictures');
export const pictures = getPhotoAttributesArray();

const photoList = document.createDocumentFragment();

for (const photo of pictures) {

  const newPhoto = pictureTemplate.cloneNode(true);
  const newPhotoItem = newPhoto.querySelector('.picture');
  const newPhotoImg = newPhoto.querySelector('.picture__img');
  const newPhotoComments = newPhoto.querySelector('.picture__comments');
  const newPhotoLikes = newPhoto.querySelector('.picture__likes');

  newPhotoItem.setAttribute('id', photo.id);
  newPhotoImg.setAttribute('src',photo.url);
  newPhotoComments.textContent = Object.keys(photo.comment).length;
  newPhotoLikes.textContent = photo.likes;

  photoList.appendChild(newPhoto);

}

pictureContainer.appendChild(photoList);
