const cards = document.querySelectorAll('.card')

const threshold = 100;

const timeout = {
    c1: 200,
    c2: 300,
    c3: 400,
    c4: 500
}

addEventListener("scroll", (event) => {
    const scrollOffset = window.pageYOffset
    console.log(scrollOffset)

    if(scrollOffset > threshold){
        cards.forEach(card => {
            card.classList.add('visible')
            card.classList.remove('hidden')
        })
    } else {
        cards.forEach(card => {
            card.classList.remove('visible');
            card.classList.add('hidden');
        })
    }
})