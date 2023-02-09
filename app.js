const cardGroups = document.querySelectorAll('.card-group')
const cards1 = cardGroups[0].querySelectorAll('.card')
const cards2 = cardGroups[1].querySelectorAll('.card')
const cards3 = cardGroups[2].querySelectorAll('.card')


const threshold = 100;
const threshold2 = 300;
const threshold3 = 500;

addEventListener("scroll", (event) => {
    const scrollOffset = window.pageYOffset
    console.log(scrollOffset)

    if(scrollOffset > threshold && scrollOffset < threshold2){
        cards1.forEach(card => {
            card.classList.add('visible')
            card.classList.remove('hidden')
        })
    } else {
        cards1.forEach(card => {
            card.classList.remove('visible');
            card.classList.add('hidden');
        })
    }

    if(scrollOffset > threshold2  && scrollOffset < threshold3){
        cards2.forEach(card => {
            card.classList.add('visible')
            card.classList.remove('hidden')
        })
    } else {
        cards2.forEach(card => {
            card.classList.remove('visible');
            card.classList.add('hidden');
        })
    }

    if(scrollOffset > threshold3){
        cards3.forEach(card => {
            card.classList.add('visible')
            card.classList.remove('hidden')
        })
    } else {
        cards3.forEach(card => {
            card.classList.remove('visible');
            card.classList.add('hidden');
        })
    }
})