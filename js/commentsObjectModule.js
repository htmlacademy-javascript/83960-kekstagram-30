import { CommentsObjectModuleClasses as classes } from './constants.js';

const commentsList = {
  arrayComments: [],
  numberCommentsShown: 0,
  numberCommentsTotal: 0,
  showFromNumber: 0,
  set listComments(listCommentsClass) {
    this._listComments = document.querySelector(`.${listCommentsClass}`);
  },
  get listComments() {
    return this._listComments;
  },
  setNumberCommentsShown() {
    document.querySelector(`.${classes.COMMENT_SHOWN_COUNT_CLASS}`).textContent = this.showFromNumber;
  },
  setNumberCommentsTotal(numberTotal) {
    this.numberCommentsTotal = numberTotal;
    document.querySelector(`.${classes.COMMENT_TOTAL_COUNT_CLASS}`).textContent = numberTotal;
  },
  makeCommentItem({avatar, name, message}) {
    return `<li class="social__comment">
      <img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35">
      <p class="social__text">${message}</p>
      </li>`;
  },
  showNextComments(clearPrevious = false) {
    if (clearPrevious) {
      this.listComments.innerHTML = '';
    }
    const documentFragment = document.createDocumentFragment();
    documentFragment.innerHTML = '';
    for (let i = this.showFromNumber; i < this.showFromNumber + this.numberCommentsShown; i++) {
      documentFragment.innerHTML += this.makeCommentItem(this.arrayComments[i]);
    }
    this.showFromNumber += this.numberCommentsShown;
    this.setNumberCommentsShown();
    this.numberCommentsShown = Math.min(this.numberCommentsShown, this.numberCommentsTotal - this.showFromNumber);
    this.listComments.innerHTML += documentFragment.innerHTML;
    if (this.numberCommentsShown === 0) {
      this.commentsLoaderButton.classList.add('hidden');
    } else {
      this.commentsLoaderButton.classList.remove('hidden');
    }
  },
  setCommentsLoaderButton() {
    this.commentsLoaderButton = document.querySelector(`.${classes.COMMENTS_LOADER_BUTTON_CLASS}`);
    this.commentsLoaderButton.addEventListener('click', this.commentsLoaderButtonClick);
  },
  commentsLoaderButtonClick() {
    commentsList.showNextComments();
  },
  init(arrayComments, numberShown) {
    this.arrayComments = arrayComments;
    this.setNumberCommentsTotal(this.arrayComments.length);
    this.numberCommentsShown = Math.min(this.numberCommentsTotal, numberShown);
    this.showFromNumber = 0;
    this.listComments = classes.LIST_COMMENTS_CLASS;
    this.setCommentsLoaderButton();
    this.showNextComments(true);
  },
  release() {
    this.arrayComments = null;
    this.numberCommentsShown = 0;
    this.numberCommentsTotal = 0;
    this.showFromNumber = 0;
    this.listComments = null;
    this.commentsLoaderButton.removeEventListener('click', this.commentsLoaderButtonClick);
    this.commentsLoaderButton = null;
  },
};

export { commentsList };
