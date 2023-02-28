function innityAppsTurnstile (){
  let innityAppsAnimationMaterials = [
    'splash1.innity',
    'splash2.innity',
    'splash3.innity',
    'splash4.innity',
    'splash5.innity',
  ];

  let animationFrameId = null;
  let cardGroups = document.querySelectorAll(".innity-apps-turnstile-card-group");
  
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
    
    let lastTrailingCard = nextCardGroups.querySelectorAll('.innity-apps-turnstile-card')[0];
    listenToAnimationEnd(lastTrailingCard,nextIndex, currentIndex)
    
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
  
    let prevCards = prevCardGroups.querySelectorAll('.innity-apps-turnstile-card');
    let lastTrailingCard = prevCards[prevCards.length - 1];
    listenToAnimationEnd(lastTrailingCard,prevIndex, currentIndex)
  
    fadeOutToBack(currentCardGroups)
  
    fadeInFromFront(prevCardGroups)
  }
  
  
  function listenToAnimationEnd(lastTrailingCard, prevIndex){
    lastTrailingCard.addEventListener('animationend',() => {
      cardSwappedCallback(prevIndex, currentIndex)
      
      currentIndex = prevIndex;
      lastScrollPosition = scrollOffset;
  
      checkForCardSwap();
    },{once: true});
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
    cardGroup.className = 'innity-apps-turnstile-card-group innity-apps-turnstile-fade-out-to-back'
  }
  
  function fadeInFromBack(cardGroup) {
    cardGroup.className = 'innity-apps-turnstile-card-group innity-apps-turnstile-fade-in-from-back'
  
  }
  function fadeInFromFront(cardGroup) {
    cardGroup.className = 'innity-apps-turnstile-card-group innity-apps-turnstile-fade-in-from-front'
  }
  
  function fadeOutToFront(cardGroup) {
    cardGroup.className = 'innity-apps-turnstile-card-group innity-apps-turnstile-fade-out-to-front'
  }
  
  function cardSwappedCallback(currentIndex, prevIndex){
    const currentCard = currentIndex + 1;
    const prevCard = prevIndex + 1;
    console.log(`showing card ${currentCard}, previous was card ${prevCard}`)
  }

  function populateCanvasAnimations() {
    let aniCardGroups = document.querySelectorAll('.innity-apps-turnstile-card-group.animation')
    
    for (let i = 0; i < aniCardGroups.length ; i++) {
      let currentCardGroup = aniCardGroups[i];
      let cards = currentCardGroup.querySelectorAll('.innity-apps-turnstile-card')
      
      for (let j = 0; j < cards.length; j++) {
        let card = cards[j];
        
        new InnityAppsCanvasAnimation({
          canvasID: card.id,
          animationFile: innityAppsAnimationMaterials[i],
          width: '640',
          height: '360',
        });
      }
    }
  }

  populateCanvasAnimations();

  checkForCardSwap();
}

innityAppsTurnstile();
