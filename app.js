const cardGroups = document.querySelectorAll('.card-group')
const cards1 = cardGroups[0].querySelectorAll('.card')
const cards2 = cardGroups[1].querySelectorAll('.card')
const cards3 = cardGroups[2].querySelectorAll('.card')


const threshold = 300;
const threshold2 = 600;
const threshold3 = 900;

let wasShowing = 0
addEventListener("scroll", (event) => {
    const scrollOffset = window.pageYOffset
    console.log(scrollOffset)

    if(scrollOffset < threshold){
        cards1.forEach(card => {
            card.classList.remove('visible')
            card.classList.remove('resee')
            card.classList.add('hidden')
        })
        wasShowing = 0
    }
    else if(scrollOffset >= threshold && scrollOffset < threshold2){
        console.log('show 1')
        if(wasShowing == 0){
            cards1.forEach(card => {
                card.classList.remove('hidden')
                card.classList.add('visible')
            })
        } else if (wasShowing == 2){
            cards2.forEach(card => {
                card.classList.remove('visible')
                card.classList.remove('resee')
                card.classList.add('hidden')
            })
            cards1.forEach(card => {
                card.classList.remove('seen')
                card.classList.add('resee')
            })
        }
        wasShowing = 1
    } else if(scrollOffset >= threshold2 && scrollOffset < threshold3){
        console.log('show 2')
        if(wasShowing == 1){
            cards1.forEach(card => {
                card.classList.remove('visible');
                card.classList.remove('resee');
                card.classList.add('seen');
            })
            cards2.forEach(card => {
                card.classList.remove('hidden');
                card.classList.add('visible');
            })
        } else if (wasShowing == 3){
            cards3.forEach(card => {
                card.classList.remove('visible')
                card.classList.add('hidden')
            })
            cards2.forEach(card => {
                card.classList.remove('seen')
                card.classList.add('resee')
            })
        }
        wasShowing = 2
    } else if(scrollOffset >= threshold3){
        console.log('show 3')
        if(wasShowing == 2){
            cards2.forEach(card => {
                card.classList.remove('visible');
                card.classList.remove('resee');
                card.classList.add('seen');
            })
            cards3.forEach(card => {
                card.classList.remove('hidden');
                card.classList.add('visible');
            })
        }

        wasShowing = 3
    }
})