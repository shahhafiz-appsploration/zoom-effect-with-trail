function innityAppsTurnstile (){

  const type = {
    image: 'IMAGE',
    video: 'VIDEO',
    animation: 'ANIMATION',
  }
  
  let innityAppsCanvasAnimations = [];
  
  this.animations = innityAppsCanvasAnimations;

  let innityAppsAnimationMaterials = [
    'splash1.innity',
    'splash1.innity',
    'splash1.innity',
    'splash1.innity',
    'splash1.innity',
    'splash1.innity',
    'splash1.innity',
    'splash1.innity',
    'splash1.innity',
    'splash1.innity',
  ];

  let animationFrameId = null;
  let cardGroups = document.querySelectorAll(".innity-apps-turnstile-card-group");
  
  const totalCards = cardGroups.length;
  const threshold = 200;
  
  let lastScrollPosition = 0;
  let scrollOffset = 0;
  
  let isFirstCard = true;
  let currentIndex = cardGroups.length - 1;
  
  console.log(`${cardGroups.length} cards`);
  
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
    let currentCardGroup = cardGroups[currentIndex];

    const currentCardGroupType = getCardGroupType(currentCardGroup);
    
    let lastTrailingCard = nextCardGroups.querySelectorAll('.innity-apps-turnstile-card')[0];
    listenToAnimationEnd(lastTrailingCard,nextIndex, currentIndex);
    
    if(currentCardGroupType === type.animation){
      pauseAnimation(currentCardGroup);
    }

    if(currentCardGroupType === type.video){
      pauseVideo(currentCardGroup);
    }
    
    if(isFirstCard){
      isFirstCard = false;
    } else {
      fadeOutToFront(currentCardGroup);
    }
  
    fadeInFromBack(nextCardGroups);
  }
  
  function showPrevCard() {
    const prevIndex = getPrevIndex();
    cancelAnimationFrame(animationFrameId);
  
    let prevCardGroups = cardGroups[prevIndex];
    let currentCardGroup = cardGroups[currentIndex];

    const currentCardGroupType = getCardGroupType(currentCardGroup);
  
    let prevCards = prevCardGroups.querySelectorAll('.innity-apps-turnstile-card');
    let lastTrailingCard = prevCards[prevCards.length - 1];

    listenToAnimationEnd(lastTrailingCard,prevIndex, currentIndex);
  
    if(currentCardGroupType === type.animation){
      pauseAnimation(currentCardGroup);
    }

    if(currentCardGroupType === type.video){
      pauseVideo(currentCardGroup);
    }

    fadeOutToBack(currentCardGroup);
  
    fadeInFromFront(prevCardGroups);
  }

  function pauseAnimation(cardGroup){
      updateCurrentAnimationCardTrail()
      showAnimationTrail(cardGroup);
      innityAppsCanvasAnimations[currentIndex].pause();
  }
  
  function listenToAnimationEnd(lastTrailingCard, prevIndex){
    lastTrailingCard.addEventListener('animationend',() => {
      cardSwappedCallback(prevIndex, currentIndex);
      
      currentIndex = prevIndex;
      lastScrollPosition = scrollOffset;
      
      const currentCardGroupType = getCardGroupType(cardGroups[currentIndex]);

      if(currentCardGroupType === type.animation){
        playAnimation();
      }

      if(currentCardGroupType === type.video){
        playVideo();
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
    let classNames = 'innity-apps-turnstile-card-group innity-apps-turnstile-fade-out-to-back';
    cardGroup.className = classNames;
  }
  
  function fadeInFromBack(cardGroup) {
    let classNames = 'innity-apps-turnstile-card-group innity-apps-turnstile-fade-in-from-back';
    cardGroup.className = classNames;
  }

  function fadeInFromFront(cardGroup) {
    let classNames = 'innity-apps-turnstile-card-group innity-apps-turnstile-fade-in-from-front';
    cardGroup.className = classNames;
  }
  
  function fadeOutToFront(cardGroup) {
    let classNames= 'innity-apps-turnstile-card-group innity-apps-turnstile-fade-out-to-front';
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
      const currentCardGroupType = getCardGroupType(currentCardGroup);

      if(currentCardGroupType !== type.animation){
        continue;
      }
      
      const randomCanvasID = Math.floor(Math.random() * 1000);
      let animatedCard = currentCardGroup.querySelector('canvas');

      animatedCard.setAttribute('id',randomCanvasID);

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
        },200)
      }

      createAnimationCardTrail(animatedCard, currentCardGroup);
    }
  }

  function createAnimationCardTrail(animatedCard, cardGroup){
    setTimeout(() => {
      let trailElements = cardGroup.querySelectorAll('img.innity-apps-turnstile-card')
      let trailImage = animatedCard.toDataURL();
  
      for (let i = 0; i < trailElements.length; i++) {
        let trailElement = trailElements[i];
        trailElement.setAttribute('src',trailImage)
      }

    },1500)
  }

  function updateCurrentAnimationCardTrail(){
      let currentCardGroup = cardGroups[currentIndex]
      let animatedCard = currentCardGroup.querySelector('canvas')
      let trailElements = currentCardGroup.querySelectorAll('img.innity-apps-turnstile-card')
      let trailImage = animatedCard.toDataURL();
  
      for (let i = 0; i < trailElements.length; i++) {
        let trailElement = trailElements[i];
        trailElement.setAttribute('src',trailImage)
      }
  }

  function playVideo(){
    let currentCardGroup = cardGroups[currentIndex];
    let videoElement = currentCardGroup.querySelector('video');

    videoElement.play();
  }

  function pauseVideo(cardGroup){
    let videoElement = cardGroup.querySelector('video');
    videoElement.pause();

    let trailImage = takeVideoScreenshot(videoElement);
    let trails = cardGroup.querySelectorAll('img.innity-apps-turnstile-video');

    for (let i = 0; i < trails.length; i++) {
      let trail = trails[i];
      trail.src = trailImage
    }
  }

  function playAnimation(){
    let currentCardGroup = cardGroups[currentIndex];
    hideAnimationTrail(currentCardGroup);
    innityAppsCanvasAnimations[currentIndex].play();
  }

  function hideAnimationTrail(cardGroup){
    let trailElements = cardGroup.querySelectorAll('img.innity-apps-turnstile-card')

    for (let i = 0; i < trailElements.length; i++) {
      let trailElement = trailElements[i];
      trailElement.style.display = 'none';
    }
  }

  function showAnimationTrail(cardGroup){
    let trailElements = cardGroup.querySelectorAll('img.innity-apps-turnstile-card')

    for (let i = 0; i < trailElements.length; i++) {
      let trailElement = trailElements[i];
      trailElement.style.display = 'block';
    }
  }

  function takeVideoScreenshot(video){
    let canvas = document.createElement('canvas');

    canvas.width = 1920;
    canvas.height = 1080;

    let ctx = canvas.getContext('2d');
    ctx.drawImage( video, 0, 0, canvas.width, canvas.height );

    let image = canvas.toDataURL('image/jpeg');

    return image;
  }

  function getCardGroupType(cardGroup){
      const canvases = cardGroup.querySelectorAll('canvas'); 
      const videos = cardGroup.querySelectorAll('video');
      
      if(canvases.length > 0){
        return type.animation
      }

      if(videos.length > 0){
        return type.video
      }

      return type.image
  }

  populateCanvasAnimations();

  checkForCardSwap();
}

innityAppsTurnstile();
