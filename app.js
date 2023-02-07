const cards = document.querySelectorAll('.card')
console.log(cards)

const treshold = {
    c1 : 100,
    c2 : 200,
    c3 : 300,
    c4 : 400
}

addEventListener("scroll", (event) => {
    const scrollOffset = window.pageYOffset
    console.log(scrollOffset)
    
    if(scrollOffset > treshold.c1){
        cards[0].classList.add('visible')
    }
    if(scrollOffset > treshold.c2){
        cards[1].classList.add('visible')
    }
    if(scrollOffset > treshold.c3){
        cards[2].classList.add('visible')
    }
    if(scrollOffset > treshold.c4){
        cards[3].classList.add('visible')
    }

    if(scrollOffset < treshold.c1){
        cards[0].classList.remove('visible')
    }
    if(scrollOffset < treshold.c2){
        cards[1].classList.remove('visible')
    }
    if(scrollOffset < treshold.c3){
        cards[2].classList.remove('visible')
    }
    if(scrollOffset < treshold.c4){
        cards[3].classList.remove('visible')
    }
});