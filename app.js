let animationFrameId = undefined;
const adFormat = document.querySelector(".ad-format");
const allCards = document.querySelectorAll('.card')
const cardGroups = document.querySelectorAll(".card-group");
const totalCards = cardGroups.length;
const threshold = 300;

let lastScrollPosition = 0;
let scrollOffset = 0;

let isFirstCard = true;
let currentIndex = cardGroups.length - 1;

console.log(`${cardGroups.length} cards`)

addEventListener("scroll", function () {
  scrollOffset = window.pageYOffset;
});

function checkForCardSwap() {
  const dY = scrollOffset - lastScrollPosition;
  // console.log('dy',dY);
  if (dY >= threshold) {
    showNextCard();
  } else if (dY <= -threshold) {
    showPrevCard();
  } else {
    animationFrameId = requestAnimationFrame(checkForCardSwap);
  }
}

function showNextCard() {
  cancelAnimationFrame(animationFrameId);
  const nextIndex = getNextIndex();
  	
  let nextCardGroups = cardGroups[nextIndex].querySelectorAll('.card');
  let currentCardGroups = isFirstCard ? [] : cardGroups[currentIndex].querySelectorAll('.card');
	
  if(isFirstCard){
    isFirstCard = false;
  }

  let lastTrailingCard = nextCardGroups[0];

  lastTrailingCard.addEventListener('animationend',() => {
		cardSwappedCallback(nextIndex, currentIndex)

		currentIndex = nextIndex;
		lastScrollPosition = scrollOffset;

		checkForCardSwap();
	},{once: true});

	currentCardGroups.forEach(c => {
		fadeOutToFront(c);
	})

	nextCardGroups.forEach(c => {
		fadeInFromBack(c)
	})	
}

function showPrevCard() {
  const prevIndex = getPrevIndex();
  cancelAnimationFrame(animationFrameId);

  let prevCardGroups = cardGroups[prevIndex].querySelectorAll('.card');
  let currentCardGroups = cardGroups[currentIndex].querySelectorAll('.card');

  let lastTrailingCard = prevCardGroups[prevCardGroups.length - 1];

	lastTrailingCard.addEventListener('animationend',() => {
		cardSwappedCallback(prevIndex, currentIndex)
		
		currentIndex = prevIndex;
		lastScrollPosition = scrollOffset;

		checkForCardSwap();
	},{once: true});

	currentCardGroups.forEach(c => {
		fadeOutToBack(c)
	})

	prevCardGroups.forEach(c => {
		fadeInFromFront(c)
	})
}

function getPrevIndex() {
  if (currentIndex > 0) {
    return currentIndex - 1;
  } else {
    return totalCards - 1;
  }
}

function getNextIndex() {
  if (currentIndex < totalCards - 1) {
    return currentIndex + 1;
  } else {
    return 0;
  }
}

function fadeOutToBack(card) {
  card.classList.remove("fade-in-from-back","fade-in-from-front","fade-out-to-front");
  card.classList.add("card","fade-out-to-back");
}

function fadeInFromBack(card) {
  card.classList.remove("fade-out-to-back", "fade-out-to-front", 'fade-in-from-front');
  card.classList.add("card","fade-in-from-back");
}

function fadeInFromFront(card) {
  card.classList.remove("fade-out-to-front","fade-out-to-back","fade-in-from-back");
  card.classList.add('fade-in-from-front');
}

function fadeOutToFront(card) {
  card.classList.remove("fade-in-from-back","fade-out-to-back",'fade-in-from-front');
  card.classList.add("fade-out-to-front");
}

function cardSwappedCallback(currentIndex, prevIndex){
  const currentCard = currentIndex + 1;
  const prevCard = prevIndex + 1;
	console.log(`showing card ${currentCard}, previous was card ${prevCard}`)
}

checkForCardSwap();
