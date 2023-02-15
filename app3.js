let animationFrameId = undefined;
const adFormat = document.querySelector(".ad-format");

const cardGroups = document.querySelectorAll(".card-group");

const threshold = 300;

let lastScrollPosition = 0;
let scrollOffset = 0;

let currentIndex = cardGroups.length - 1;

addEventListener("scroll", function () {
  scrollOffset = window.pageYOffset;
});

function checkForCardSwap() {
  const dY = scrollOffset - lastScrollPosition;
  console.log('dy',dY);
  if (dY >= threshold) {
    showNextCard();
  } else if (dY <= -threshold) {
    showPrevCard();
  } else {
    animationFrameId = requestAnimationFrame(checkForCardSwap);
  }
}

function showNextCard() {
	stopAnimationFrame()
	
  let nextCards = cardGroups[getNextIndex()].querySelectorAll('.card');
  let currentCards = cardGroups[currentIndex].querySelectorAll('.card');
  let prevCards = cardGroups[getPrevIndex()].querySelectorAll('.card');
	
  let lastTrail = nextCards[0];

  lastTrail.addEventListener('transitionend',() => {
		lastScrollPosition = scrollOffset;
		checkForCardSwap();
	},{once: true});

  currentCards.forEach((c) => {
    setCardSeen(c);
  });

  nextCards.forEach((c) => {
    setCardVisible(c);
  });

  prevCards.forEach((c) => {
    setCardHidden(c);
  });

  currentIndex = this.getNextIndex();

}

function showPrevCard() {
  stopAnimationFrame()

  let nextCards = cardGroups[getNextIndex()].querySelectorAll('.card');
  let currentCards = cardGroups[currentIndex].querySelectorAll('.card');
  let prevCards = cardGroups[getPrevIndex()].querySelectorAll('.card');

  let lastTrail = prevCards[prevCards.length - 1];

	lastTrail.addEventListener('transitionend',() => {
		lastScrollPosition = scrollOffset;
		checkForCardSwap();
	},{once: true});

  currentCards.forEach((c) => {
    setCardHidden(c);
  });

  prevCards.forEach((c) => {
    setCardResee(c);
  });

  nextCards.forEach((c) => {
    setCardSeen(c);
  });

  currentIndex = this.getPrevIndex();
}

function getPrevIndex() {
  let totalCards = cardGroups.length;
  let prevIndex = currentIndex - 1;

  if (prevIndex >= 0) {
    return prevIndex;
  } else {
    return totalCards - 1;
  }
}

function getNextIndex() {
  let totalCards = cardGroups.length;
  let temporaryNextIndex = currentIndex + 1;
  if (temporaryNextIndex < totalCards) {
    return temporaryNextIndex;
  } else {
    return 0;
  }
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
  card.classList.remove("pristine");
  card.classList.add("visible");
}

function setCardResee(card) {
  card.style = "";
  card.classList.remove("seen");
  card.classList.remove("hidden");
  card.classList.remove("visible");
  card.classList.remove("pristine");
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
