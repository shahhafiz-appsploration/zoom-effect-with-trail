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
	this.nextIndex = 0
	this.currentIndex = -1
	this.prevIndex = -2
  	this.array = [];
};

Queue.prototype.getQueueLength = function () {
	return this.array.length;
}

Queue.prototype.push = function (element) {
  this.array.push(element);
};

Queue.prototype.updateNextIndex = function () {
	this.prevIndex = this.currentIndex;
	this.currentIndex = this.nextIndex;

	let next = this.nextIndex + 1;

	if(next < this.array.length){
		this.nextIndex = next
	} else {
		this.nextIndex = this.array.length - next
	}
}

Queue.prototype.updatePrevIndex = function () {
	this.nextIndex = this.currentIndex;
	this.currentIndex = this.prevIndex;

	let prev = this.prevIndex - 1;

	if(prev >= 0){
		this.prevIndex = prev
	} else {
		this.prevIndex = this.array.length - 1
	}
}

Queue.prototype.showNextCard= function (){
	console.log(this.prevIndex, this.currentIndex, this.nextIndex)
	nextCards = this.array[this.nextIndex]
	
	let currentCards = this.currentIndex < 0 ? [] : this.array[this.currentIndex]
	
	currentCards.forEach(c => {
		setCardSeen(c)
	})
	
	nextCards.forEach(c => {
		setCardVisible(c)
	})

	this.updateNextIndex()
}

Queue.prototype.showPrevCard = function (){
	console.log(this.prevIndex, this.currentIndex, this.nextIndex)

	// let prevCards = this.array[this.prevIndex]
	let prevCards = this.getCards(this.prevIndex)
	
	let currentCards = this.getCards(this.currentIndex)

	currentCards.forEach(c => {
		setCardHidden(c)
	})

	prevCards.forEach(c => {
		setCardResee(c)
	})
	
	this.updatePrevIndex()
}

Queue.prototype.getCards = function (index) {
	if(index >= 0){
		return this.array[index]
	}
  	
	return []
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
