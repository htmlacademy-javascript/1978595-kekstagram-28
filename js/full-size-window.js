import {pictureContainer, pictures} from './thumbnails.js';
const bigPictureWindow = document.querySelector('.big-picture');
const bigPictureCloseButton = bigPictureWindow.querySelector('.big-picture__cancel');

const fullWindowEsc = (evt) => {
  if (evt.keyCode === 27) {
    bigPictureWindow.classList.add('hidden');
    document.removeEventListener('keydown', fullWindowEsc);
    document.body.classList.remove('modal-open');
  }
};

const fullWindowClose = (evt) => {
  evt.preventDefault();
  bigPictureWindow.classList.add('hidden');
  document.removeEventListener('keydown', fullWindowEsc);
  document.body.classList.remove('modal-open');
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
    let commentsShowAtTime = 5;
    let commentsShowed = 0;
    const commentCount = Object.keys(photoData.comment).length;
    const commentsLoader = bigPictureWindow.querySelector('.social__comments-loader');
    const commentCounter = bigPictureWindow.querySelector('.social__comment-count');

    const newCommentAdd = (addingComment) => {
      const newComment = bigPictureCommentsItem.cloneNode(true);
      const newCommentImg = newComment.querySelector('.social__picture');
      const newCommentText = newComment.querySelector('.social__text');
      newCommentImg.setAttribute('src',addingComment.avatar);
      newCommentImg.setAttribute('alt',addingComment.name);
      newCommentText.textContent = addingComment.message;
      bigPictureComments.appendChild(newComment);
    };

    commentsLoader.addEventListener('click', () => {
      commentsShowAtTime += 5;
      for (let i = commentsShowed; (i < commentsShowAtTime) && (i < commentCount); i++) {
        newCommentAdd(commentsArray[i]);
        commentsShowed++;
        commentCounter.innerHTML = `${commentsShowed} из <span class="comments-count">${commentCount}</span> комментариев`;
      }
    });

    for (const comment of commentsArray) {
      if (!(commentsShowed === commentsShowAtTime) || !(commentsShowed === commentCount)) {
        newCommentAdd(comment);
        commentsShowed++;
      }
      if ((commentsShowed === commentsShowAtTime) || (commentsShowed === commentCount)) {
        break;
      }
    }

    commentCounter.innerHTML = `${commentsShowed} из <span class="comments-count">${commentCount}</span> комментариев`;

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
