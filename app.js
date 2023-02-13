// hidden -> visible -> seen -> resee -> hiddden

const cardGroups = document.querySelectorAll('.card-group')
const allCards = document.querySelectorAll('.cards')
const adFormat = document.querySelector('.ad-format')
const cards1 = cardGroups[0].querySelectorAll('.card')
const cards2 = cardGroups[1].querySelectorAll('.card')
const cards3 = cardGroups[2].querySelectorAll('.card')


const threshold = 300;
const threshold2 = 600;
const threshold3 = 900;

allCards.forEach(card => {
    setCardHidden(card)
})

let wasShowing = 0
addEventListener("scroll", (event) => {
    const scrollOffset = window.pageYOffset
    console.log(scrollOffset)

    if(scrollOffset < threshold){
        cards1.forEach(card => {
            card.classList.remove('visible')
            card.classList.remove('resee')
            setCardHidden(card)
        })
        wasShowing = 0
    }
    else if(scrollOffset >= threshold && scrollOffset < threshold2){
        console.log('show 1')
        cards1.forEach(card => {
            if(card.classList.contains('hidden')){
                setCardVisible(card)
            }

            if(card.classList.contains('seen')){
                setCardResee(card)
            }
        })

        cards2.forEach(card => {
            setCardHidden(card)
        })
        
    } else if(scrollOffset >= threshold2 && scrollOffset < threshold3){
        console.log('show 2')
        cards1.forEach(card => {
            setCardSeen(card)
            
        })

        cards2.forEach(card => {
            if(card.classList.contains('hidden')){
                setCardVisible(card)
            }

            if(card.classList.contains('seen')){
                setCardResee(card)
            }
        })

        cards3.forEach(card => {
            setCardHidden(card)
        })
    } else if(scrollOffset >= threshold3){
        console.log('show 3')
        
        cards2.forEach(card => {
            setCardSeen(card)
        })

        cards3.forEach(card => {
            setCardVisible(card)
        })
    }
})

function setCardHidden(card){
    card.classList.remove('visible')
    card.classList.remove('resee')
    card.classList.add('hidden');
    card.style.translate = `0 ${adFormat.clientHeight + 100}px`;
}

function setCardVisible(card){
    card.classList.remove('hidden');
    card.classList.remove('hidden');
    card.classList.add('visible')
}

function setCardSeen(card){
    card.style.translate = `0 ${adFormat.clientHeight + 100}px`;
    card.classList.remove('visible')
    card.classList.add('seen');
}

function setCardResee(card){
    card.style = ''
    card.classList.remove('seen')
    card.classList.add('resee')
}