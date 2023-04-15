const loadButton = document.querySelector('.img-upload__input');
const loadFormWindow = document.querySelector('.img-upload__overlay');
const imageLoadForm = document.querySelector('.img-upload__form');
const loadFormWindowCloseButton = loadFormWindow.querySelector('.img-upload__cancel');
const hashTagPattern = /^#[a-zа-яё0-9]/i;

console.log();

const pristineConfig = {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
};

const val = new Pristine(imageLoadForm, pristineConfig, false);
const imageLoadFormHashTag = imageLoadForm.querySelector('.text__hashtags');
const imageLoadFormComment = imageLoadForm.querySelector('.text__description');
const loadFormWindowClose = () => {
  loadFormWindow.classList.add('hidden');
};
const loadFormWindowOpen = () => {
  loadFormWindow.classList.remove('hidden');
  loadFormWindowCloseButton.addEventListener('click',loadFormWindowClose);
};

const hashTagValidate = () => {
  imageLoadFormHashTag.value.trim();
  const hashTagArray = imageLoadFormHashTag.value.split(' ');
  console.log(hashTagArray);
  if (hashTagArray.length > 5) {
    return false;
  }
  for (const tag of hashTagArray) {
    if (!hashTagPattern.test(tag)) {
      return false;
    } else {
      return true;
    }
  }
};
const commentValidate = () => imageLoadFormComment.value.length <= 140;


loadButton.addEventListener('input', loadFormWindowOpen);


val.addValidator(imageLoadFormHashTag, hashTagValidate, 'Invalid HashTag');
val.addValidator(imageLoadFormComment, commentValidate, 'Invalid Comment');
