let animationFrameId = undefined;
const adFormat = document.querySelector(".ad-format");

const cardGroups = document.querySelectorAll(".card-group");

const threshold = 300;

const forward = "forward";
const backward = "backward";

let lastScrollPosition = 0;
let scrollOffset = 0;

var Queue = function () {
  // this.nextIndex = 0
  this.currentIndex = 2;
  // this.prevIndex = null
  this.array = [];
};

Queue.prototype.getCurrentIndex = function () {
  return this.currentIndex;
};

Queue.prototype.getQueueLength = function () {
  return this.array.length;
};

Queue.prototype.push = function (element) {
  this.array.push(element);
};

Queue.prototype.getNextIndex = function () {
  let temp = this.currentIndex + 1;

  if (temp < this.array.length) {
    return temp;
  } else {
    return 0;
  }
};

Queue.prototype.getPrevIndex = function () {
  let temp = this.currentIndex - 1;

  if (temp >= 0) {
    return temp;
  } else {
    return this.array.length - 1;
  }
};

Queue.prototype.showNextCard = function () {
  let nextCards = this.array[this.getNextIndex()];

  let currentCards = this.array[this.getCurrentIndex()];

  let prevCards = this.array[this.getPrevIndex()];

  currentCards.forEach((c) => {
    setCardSeen(c);
  });

  nextCards.forEach((c) => {
    setCardVisible(c);
  });

  prevCards.forEach((c) => {
    setCardHidden(c);
  });

  this.currentIndex = this.getNextIndex();
};

Queue.prototype.showPrevCard = function () {
  let nextCards = this.array[this.getNextIndex()];

  let prevCards = this.array[this.getPrevIndex()];

  let currentCards = this.array[this.currentIndex];

  currentCards.forEach((c) => {
    setCardHidden(c);
  });

  prevCards.forEach((c) => {
    setCardResee(c);
  });

  nextCards.forEach((c) => {
    setCardSeen(c);
  });

  this.currentIndex = this.getPrevIndex();
};

Queue.prototype.getCards = function (index) {
  if (index >= 0) {
    return this.array[index];
  }

  return [];
};

let CardQueue = new Queue();

for (let index = 0; index < cardGroups.length; index++) {
  const card = cardGroups[index].querySelectorAll(".card");
  CardQueue.push(card);
}

addEventListener("scroll", function () {
  scrollOffset = window.pageYOffset;
});

function checkForCardSwap() {
  const dY = scrollOffset - lastScrollPosition;
  console.log(dY);
  if (dY >= threshold) {
    showNextCard();
  } else if (dY <= -threshold) {
    showPrevCard();
  } else {
    animationFrameId = requestAnimationFrame(checkForCardSwap);
  }
}

function showNextCard() {
  CardQueue.showNextCard();
  setTimeout(() => {
    lastScrollPosition = scrollOffset;
    checkForCardSwap();
  }, 2000);
}

function showPrevCard() {
  CardQueue.showPrevCard();
  setTimeout(() => {
    lastScrollPosition = scrollOffset;
    checkForCardSwap();
  }, 2000);
  
}

function setCardHidden(card) {
  card.classList.remove("visible");
  card.classList.remove("resee");
  card.classList.remove("seen");
  card.classList.add("hidden");
  card.style.translate = `0 ${adFormat.clientHeight + 100}px`;
}

function setCardVisible(card) {
  card.classList.remove("hidden");
  card.classList.remove("seen");
  card.classList.remove("resee");
  card.classList.add("visible");
}

function setCardResee(card) {
  card.style = "";
  card.classList.remove("seen");
  card.classList.remove("hidden");
  card.classList.remove("visible");
  card.classList.add("resee");
}

function setCardSeen(card) {
  card.style.translate = `0 ${adFormat.clientHeight + 100}px`;
  card.classList.remove("visible");
  card.classList.remove("hidden");
  card.classList.remove("resee");
  card.classList.add("seen");
}

function stopAnimationFrame() {
  console.log("stopAnimationFrame, ", animationFrameId);
  cancelAnimationFrame(animationFrameId);
}

checkForCardSwap();
