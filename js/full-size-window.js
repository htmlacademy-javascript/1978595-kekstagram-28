import {pictureContainer, pictures} from './thumbnails.js';
const bigPictureWindow = document.querySelector('.big-picture');
const bigPictureCloseButton = bigPictureWindow.querySelector('.big-picture__cancel');

const fullWindowEsc = (evt) => {
  if (evt.keyCode === 27) {
    bigPictureWindow.classList.add('hidden');
    document.removeEventListener('keydown', fullWindowEsc);
  }
};

const fullWindowClose = (evt) => {
  evt.preventDefault();
  bigPictureWindow.classList.add('hidden');
  document.removeEventListener('keydown', fullWindowEsc);
};

const fullWindowOpen = (evt) => {
  evt.preventDefault();
  if (evt.target.nodeName === 'IMG') {
    const photoId = Number(evt.target.parentNode.getAttribute('id'));
    const photoData = pictures.find((el) => el.id === photoId);
    const bigPictureImg = bigPictureWindow.querySelector('.big-picture__img img');
    const bigPictureLikes = bigPictureWindow.querySelector('.likes-count');
    const bigPictureCommentsCount = bigPictureWindow.querySelector('.comments-count');
    const bigPictureComments = bigPictureWindow.querySelector('.social__comments');
    const bigPictureCommentsItem = bigPictureComments.querySelector('.social__comment');
    bigPictureComments.replaceChildren();
    const commentsArray = photoData.comment;

    for (const comment of commentsArray) {
      const newComment = bigPictureCommentsItem.cloneNode(true);
      const newCommentImg = newComment.querySelector('.social__picture');
      const newCommentText = newComment.querySelector('.social__text');
      newCommentImg.setAttribute('src',comment.avatar);
      newCommentImg.setAttribute('alt',comment.name);
      newCommentText.textContent = comment.message;
      bigPictureComments.appendChild(newComment);
    }
    const bigPicturePhotoCaption = bigPictureWindow.querySelector('.social__caption');

    bigPictureImg.setAttribute('src',photoData.url);
    bigPictureLikes.textContent = photoData.likes;
    bigPictureCommentsCount.textContent = Object.keys(photoData.comment).length;
    bigPicturePhotoCaption.textContent = photoData.description;

    bigPictureWindow.classList.remove('hidden');
    document.body.classList.add('modal-open');
    bigPictureCloseButton.addEventListener('click', fullWindowClose);
    document.addEventListener('keydown', fullWindowEsc);

  }

};

pictureContainer.addEventListener('click', fullWindowOpen);
