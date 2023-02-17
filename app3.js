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
	stopAnimationFrame()
	
  let nextCardGroups = cardGroups[getNextIndex()].querySelectorAll('.card');
	
  let lastTrailingCard = nextCardGroups[0];

  lastTrailingCard.addEventListener('transitionend',() => {
		lastScrollPosition = scrollOffset;
		checkForCardSwap();
	},{once: true});

	for (let index = 0; index < cardGroups.length; index++) {
		const cards = cardGroups[index].querySelectorAll('.card');
		if(index === currentIndex){
			cards.forEach(c => {
				setCardSeen(c)
			})
			continue;
		} 

		if(index === getNextIndex()){
			cards.forEach(c => {
				setCardVisible(c)
			})
			continue;
		}

		cards.forEach(c => {
			setCardHidden(c)
		})
	}

  currentIndex = this.getNextIndex();

}

function showPrevCard() {
  stopAnimationFrame()

  let prevCardGroups = cardGroups[getPrevIndex()].querySelectorAll('.card');

  let lastTrailingCard = prevCardGroups[prevCardGroups.length - 1];

	lastTrailingCard.addEventListener('transitionend',() => {
		lastScrollPosition = scrollOffset;
		checkForCardSwap();
	},{once: true});

	for (let index = 0; index < cardGroups.length; index++) {
		const cards = cardGroups[index].querySelectorAll('.card');
		if(index === currentIndex){
			cards.forEach(c => {
				setCardHidden(c)
			})
			continue;
		} 

		if(index === getPrevIndex()){
			cards.forEach(c => {
				setCardResee(c)
			})
			continue;
		}

		cards.forEach(c => {
			setCardSeen(c)
		})
	}

  currentIndex = this.getPrevIndex();
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

function setCardHidden(card) {
  card.classList.remove("visible","resee","seen");
  card.classList.add("card","hidden");
}

function setCardVisible(card) {
  card.classList.remove("hidden", "seen", "resee");
  card.classList.add("card","visible");
}

function setCardResee(card) {
  card.classList.remove("seen","hidden","visible");
  card.classList.add("resee");
}

function setCardSeen(card) {
  card.classList.remove("visible","hidden","resee");
  card.classList.add("seen");
}

function stopAnimationFrame() {
  console.log("stopAnimationFrame, ", animationFrameId);
  cancelAnimationFrame(animationFrameId);
}

allCards.forEach(c => {
	setCardHidden(c)
})

checkForCardSwap();
