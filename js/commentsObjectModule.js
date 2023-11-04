const CLASS_LIST_COMMENTS = 'social__comments';
const CLASS_COMMENT_SHOWN_COUNT = 'social__comment-shown-count';
const CLASS_COMMENT_TOTAL_COUNT = 'social__comment-total-count';
const CLASS_COMMENTS_LOADER_BUTTON = 'comments-loader';

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
    document.querySelector(`.${CLASS_COMMENT_SHOWN_COUNT}`).textContent = this.showFromNumber;
  },
  setNumberCommentsTotal(numberTotal) {
    this.numberCommentsTotal = numberTotal;
    document.querySelector(`.${CLASS_COMMENT_TOTAL_COUNT}`).textContent = numberTotal;
  },
  makeCommentItem(anyComment) {
    return '<li class="social__comment">' +
      '<img ' +
      'class="social__picture" ' +
      `src="${anyComment.avatar}" ` +
      `alt="${anyComment.name}" ` +
      'width="35" height="35">' +
      `<p class="social__text">${anyComment.message}</p>` +
      '</li>';
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
  },
  setCommentsLoaderButton() {
    this.commentsLoaderButton = document.querySelector(`.${CLASS_COMMENTS_LOADER_BUTTON}`);
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
    this.listComments = CLASS_LIST_COMMENTS;
    this.showNextComments(true);
    this.setCommentsLoaderButton();
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
