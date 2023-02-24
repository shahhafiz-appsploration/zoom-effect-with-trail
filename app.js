let animationFrameId = null;
let adFormat = document.querySelector(".ad-format");
let allCards = document.querySelectorAll('.card')
let cardGroups = document.querySelectorAll(".card-group");

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
  	
  let nextCardGroups = cardGroups[nextIndex];
  let currentCardGroups = cardGroups[currentIndex];
	
  let lastTrailingCard = nextCardGroups.querySelectorAll('.card')[0];

  lastTrailingCard.addEventListener('animationend',() => {
		cardSwappedCallback(nextIndex, currentIndex)

		currentIndex = nextIndex;
		lastScrollPosition = scrollOffset;

		checkForCardSwap();
	},{once: true});


  if(isFirstCard){
    isFirstCard = false;
  } else {
    fadeOutToFront(currentCardGroups);
  }

  fadeInFromBack(nextCardGroups)
}

function showPrevCard() {
  const prevIndex = getPrevIndex();
  cancelAnimationFrame(animationFrameId);

  let prevCardGroups = cardGroups[prevIndex];
  let currentCardGroups = cardGroups[currentIndex];

  let prevCards = prevCardGroups.querySelectorAll('.card');
  let lastTrailingCard = prevCards[prevCards.length - 1];

	lastTrailingCard.addEventListener('animationend',() => {
		cardSwappedCallback(prevIndex, currentIndex)
		
		currentIndex = prevIndex;
		lastScrollPosition = scrollOffset;

		checkForCardSwap();
	},{once: true});

  fadeOutToBack(currentCardGroups)

  fadeInFromFront(prevCardGroups)
}

function getPrevIndex() {
  if (currentIndex > 0) {
    return currentIndex - 1;
  } 
   
  return totalCards - 1;
}

function getNextIndex() {
  if (currentIndex < totalCards - 1) {
    return currentIndex + 1;
  } 
    
  return 0;
}

function fadeOutToBack(cardGroup) {
  cardGroup.classList.remove("fade-in-from-back","fade-in-from-front","fade-out-to-front");
  cardGroup.classList.add("fade-out-to-back");
}

function fadeInFromBack(cardGroup) {
  cardGroup.classList.remove("fade-out-to-back", "fade-out-to-front", 'fade-in-from-front');
  cardGroup.classList.add("fade-in-from-back");
}
function fadeInFromFront(cardGroup) {
  cardGroup.classList.remove("fade-out-to-front","fade-out-to-back","fade-in-from-back");
  cardGroup.classList.add('fade-in-from-front');
}

function fadeOutToFront(cardGroup) {
  cardGroup.classList.remove("fade-in-from-back","fade-out-to-back",'fade-in-from-front');
  cardGroup.classList.add("fade-out-to-front");
}

function cardSwappedCallback(currentIndex, prevIndex){
  const currentCard = currentIndex + 1;
  const prevCard = prevIndex + 1;
	console.log(`showing card ${currentCard}, previous was card ${prevCard}`)
}

checkForCardSwap();
