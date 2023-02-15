let animationFrameId = undefined;
const adFormat = document.querySelector(".ad-format");

const cardGroups = document.querySelectorAll(".card-group");

const threshold = 300;

let animationDirection = "";
const forward = "forward";
const backward = "backward";

let currentCard = -1;
let prevCards = -1;
let lastScrollPosition = 0;
let scrollOffset = 0;

var Queue = function () {
	this.direction = forward
	this.nextIndex = -1
	this.currentIndex = -1
  	this.array = [];
};


Queue.prototype.push = function (element) {
  this.array.push(element);
};

Queue.prototype.showNextCard= function (){
	
	this.currentIndex = this.nextIndex;
	let next = this.nextIndex + 1;

	if(next < this.array.length){
		this.nextIndex = next
	} else {
		this.nextIndex = this.array.length - next
	}

	nextCards = this.array[this.nextIndex]
	
	currentCards = this.currentIndex === -1 ? [] : this.array[this.currentIndex]

	currentCards.forEach(c => {
		setCardSeen(c)
	})

	nextCards.forEach(c => {
		setCardVisible(c)
	})
}

Queue.prototype.showPrevCard = function (){
	this.currentIndex = this.nextIndex

	let next = this.nextIndex - 1;
	if(next >= 0){
		this.nextIndex = next
	} else {
		this.nextIndex = this.array.length - 1
	}

	nextCards = this.array[this.nextIndex]
	
	currentCards = this.currentIndex === -1 ? [] : this.array[this.currentIndex]

	currentCards.forEach(c => {
		setCardHidden(c)
	})

	nextCards.forEach(c => {
		setCardResee(c)
	})
}

Queue.prototype.getNumberOfCard = function () {
  return this.array.length;
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
	CardQueue.showNextCard()
	setTimeout(() => {
		lastScrollPosition = scrollOffset;
		checkForCardSwap()
	}, 2000);
}

function showPrevCard() {
	CardQueue.showPrevCard()
	setTimeout(() => {
		lastScrollPosition = scrollOffset;
		checkForCardSwap()
	}, 2000);
}

function setCardHidden(card){
    card.classList.remove('visible')
    card.classList.remove('resee')
    card.classList.add('hidden');
    card.style.translate = `0 ${adFormat.clientHeight + 100}px`;
}

function setCardVisible(card) {
  card.classList.remove("hidden");
  card.classList.remove("seen");
  card.classList.add("visible");
}

function setCardResee(card) {
  card.style = "";
  card.classList.remove("seen");
  card.classList.add("resee");
}

function setCardSeen(card) {
  card.style.translate = `0 ${adFormat.clientHeight + 100}px`;
  card.classList.remove("visible");
  card.classList.add("seen");
}

function stopAnimationFrame() {
  console.log("stopAnimationFrame, ", animationFrameId);
  cancelAnimationFrame(animationFrameId);
}

// CardQueue.showNextCard();
checkForCardSwap();
