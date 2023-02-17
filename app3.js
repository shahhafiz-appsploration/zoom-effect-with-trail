let animationFrameId = undefined;
const adFormat = document.querySelector(".ad-format");
const allCards = document.querySelectorAll('.card')
const cardGroups = document.querySelectorAll(".card-group");
const totalCards = cardGroups.length;
const threshold = 300;

let lastScrollPosition = 0;
let scrollOffset = 0;

let currentIndex = cardGroups.length - 1;

addEventListener("scroll", function () {
  scrollOffset = window.pageYOffset;
  // todo: passive and active
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
  cancelAnimationFrame(animationFrameId);
  const nextIndex = getNextIndex();
  	
  let nextCardGroups = cardGroups[nextIndex].querySelectorAll('.card');
	
  let lastTrailingCard = nextCardGroups[0];

  lastTrailingCard.addEventListener('transitionend',() => {
		lastScrollPosition = scrollOffset;
		checkForCardSwap();
	},{once: true});

	for (let index = 0; index < cardGroups.length; index++) {
		const cards = cardGroups[index].querySelectorAll('.card');
		if(index === currentIndex){
			cards.forEach(c => {
				fadeOutToFront(c)
			})
			continue;
		} 

		if(index === nextIndex){
			cards.forEach(c => {
				fadeInFromBack(c)
			})
			continue;
		}

		cards.forEach(c => {
			fadeOutToBack(c)
		})
	}

  currentIndex = nextIndex;
}

function showPrevCard() {
  const prevIndex = getPrevIndex();
  cancelAnimationFrame(animationFrameId);

  let prevCardGroups = cardGroups[prevIndex].querySelectorAll('.card');

  let lastTrailingCard = prevCardGroups[prevCardGroups.length - 1];

	lastTrailingCard.addEventListener('transitionend',() => {
		lastScrollPosition = scrollOffset;
		checkForCardSwap();
	},{once: true});

	for (let index = 0; index < cardGroups.length; index++) {
		const cards = cardGroups[index].querySelectorAll('.card');
		if(index === currentIndex){
			cards.forEach(c => {
				fadeOutToBack(c)
			})
			continue;
		} 

		if(index === prevIndex){
			cards.forEach(c => {
				fadeInFromFront(c)
			})
			continue;
		}

		cards.forEach(c => {
			fadeOutToFront(c)
		})
	}

  currentIndex = prevIndex;
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

allCards.forEach(c => {
	fadeOutToBack(c)
})

checkForCardSwap();
