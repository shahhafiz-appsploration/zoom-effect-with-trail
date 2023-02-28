function innityAppsTurnstile (){
  let innityAppsCanvasAnimations = [];

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
    
    stopRiveAnimationIfAny(currentCardGroups)
    
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
  
    stopRiveAnimationIfAny(currentCardGroups)

    fadeOutToBack(currentCardGroups)
  
    fadeInFromFront(prevCardGroups)
  }

  function stopRiveAnimationIfAny(cardGroup){
    const hasAnimation = hasAnimationClass(cardGroup)

    if(hasAnimation){
      showAnimationTrail(cardGroup)
      pauseRiveAnimation(cardGroup)
    }
  }
  
  function listenToAnimationEnd(lastTrailingCard, prevIndex){
    lastTrailingCard.addEventListener('animationend',() => {
      const hasAnimation = hasAnimationClass(cardGroups[prevIndex]);
      
      cardSwappedCallback(prevIndex, currentIndex)
      
      currentIndex = prevIndex;
      lastScrollPosition = scrollOffset;
  
      if(hasAnimation){
        playRiveAnimation(cardGroups[prevIndex])
      }

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
    const hasAnimation = hasAnimationClass(cardGroup);

    let classNames = 'innity-apps-turnstile-card-group innity-apps-turnstile-fade-out-to-back'
  
    if(hasAnimation) classNames += ' animation'
    
    cardGroup.className = classNames
  }
  
  function fadeInFromBack(cardGroup) {
    const hasAnimation = hasAnimationClass(cardGroup);

    let classNames = 'innity-apps-turnstile-card-group innity-apps-turnstile-fade-in-from-back'

    if(hasAnimation) classNames += ' animation'
    
    cardGroup.className = classNames
  }

  function fadeInFromFront(cardGroup) {
    const hasAnimation = hasAnimationClass(cardGroup);

    let classNames = 'innity-apps-turnstile-card-group innity-apps-turnstile-fade-in-from-front'

    if(hasAnimation) classNames += ' animation'
    
    cardGroup.className = classNames
  }
  
  function fadeOutToFront(cardGroup) {
    const hasAnimation = hasAnimationClass(cardGroup);

    let classNames= 'innity-apps-turnstile-card-group innity-apps-turnstile-fade-out-to-front';

    if(hasAnimation) classNames += ' animation'
    
    cardGroup.className = classNames
  }
  
  function cardSwappedCallback(currentIndex, prevIndex){
    const currentCard = currentIndex + 1;
    const prevCard = prevIndex + 1;
    console.log(`showing card ${currentCard}, previous was card ${prevCard}`)
  }

  function populateCanvasAnimations() {
    for (let i = 0; i < cardGroups.length ; i++) {
      let currentCardGroup = cardGroups[i];
      const hasAnimation = hasAnimationClass(currentCardGroup);

      if(!hasAnimation){
        continue;
      }
      
      const randomCanvasID = Math.floor(Math.random() * 1000)
      let animatedCard = currentCardGroup.querySelector('canvas.innity-apps-turnstile-animated-card')

      animatedCard.setAttribute('id',randomCanvasID)

      innityAppsCanvasAnimations[i] = new InnityAppsCanvasAnimation({
        canvasID: animatedCard.id,
        animationFile: innityAppsAnimationMaterials[i],
        width: '640',
        height: '360',
        onLoop: onAnimationLoop()
      });

      function onAnimationLoop() {
        setTimeout(() => {
          innityAppsCanvasAnimations[i].pause();
          innityAppsCanvasAnimations[i].reset();
        },100)
      }

      createAnimationTrail(animatedCard, currentCardGroup);
    }
  }

  function createAnimationTrail(animatedCard, cardGroup){
    setTimeout(() => {
      let trailElements = cardGroup.querySelectorAll('img.innity-apps-turnstile-card')
      let trailImage = animatedCard.toDataURL();
  
      for (let i = 0; i < trailElements.length; i++) {
        let trailElement = trailElements[i];
        trailElement.setAttribute('src',trailImage)
      }

    },1500)
  }

  function hasAnimationClass(cardGroup){
    return cardGroup.classList.contains('animation');
  }

  function pauseRiveAnimation(cardGroup){
    innityAppsCanvasAnimations[currentIndex].pause();
    innityAppsCanvasAnimations[currentIndex].reset();
  }

  function playRiveAnimation(cardGroup){
    innityAppsCanvasAnimations[currentIndex].play();
    hideAnimationTrail(cardGroup)
  }

  function hideAnimationTrail(cardGroup){
    let trailElements = cardGroup.querySelectorAll('img.innity-apps-turnstile-card')

    for (let i = 0; i < trailElements.length; i++) {
      let trailElement = trailElements[i];
      trailElement.style.display = 'none'
    }
  }

  function showAnimationTrail(cardGroup){
    let trailElements = cardGroup.querySelectorAll('img.innity-apps-turnstile-card')

    for (let i = 0; i < trailElements.length; i++) {
      let trailElement = trailElements[i];
      trailElement.style.display = 'block'
    }
  }


  populateCanvasAnimations();

  checkForCardSwap();
}

innityAppsTurnstile();
