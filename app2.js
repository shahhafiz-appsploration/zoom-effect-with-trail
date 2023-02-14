const cardGroups = document.querySelectorAll('.card-group')
const allCards = document.querySelectorAll('.cards')
const adFormat = document.querySelector('.ad-format')
const cards1 = cardGroups[0].querySelectorAll('.card')
const cards2 = cardGroups[1].querySelectorAll('.card')
const cards3 = cardGroups[2].querySelectorAll('.card')

const threshold = 300;
const threshold2 = 600;
const threshold3 = 900;

let queues = []

var Queue = function (cardNumber, status) {
    this.isWaiting = true
    this.card = cardNumber
    this.status = status
};

Queue.prototype.getIsWaiting = function () {
    return this.isWaiting;
}

Queue.prototype.setIsWaiting = function (value) {
    return this.isWaiting = value;
}

Queue.prototype.getStatus = function () {
    return this.status;
}

Queue.prototype.getCardNumber = function () {
    return this.card;
}

addEventListener('scroll', event => {
    const scrollOffset = window.pageYOffset
    console.log(scrollOffset)

    if(scrollOffset < threshold){
        if(queues.length == 0 ||  queues[queues.length - 1].getCardNumber() !== 0){
            queues.push(new Queue(0, 'hidden'))
        }
    } else if (scrollOffset >= threshold && scrollOffset < threshold2){
        if(queues.length == 0 || queues[queues.length - 1].getCardNumber() !== 1){
            console.log('queue 1 added')
            queues.push(new Queue(1, 'hidden'))
        }
    } else if (scrollOffset >= threshold2 && scrollOffset < threshold3){
        if(queues.length == 0 || queues[queues.length - 1].getCardNumber() !== 2){
            console.log('queue 2 added')
            queues.push(new Queue(2, 'hidden'))
        } 
    } else if (scrollOffset >= threshold3){
        if(queues.length == 0 || queues[queues.length - 1].getCardNumber() !== 3){
            console.log('queue 3 added')
            queues.push(new Queue(3, 'hidden'))
        }
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

function animateCard(q){
    console.log('animating card')
    return new Promise(resolve => {
        if(q.getCardNumber() === 0){
            cards1.forEach(card => {
                setCardHidden(card)
            })
        } else if(q.getCardNumber() === 1){
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
        } else if(q.getCardNumber() === 2){
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
        } else if(q.getCardNumber() === 3){
            cards2.forEach(card => {
                setCardSeen(card)
            })
    
            cards3.forEach(card => {
                setCardVisible(card)
            })
        }
        setTimeout(() => {
            resolve(true);
        }, 2000);
    });
}


let isShowing = false;
async function consumeQueue(){
    if(isShowing === false){
        for (q of queues) {
            if(q.getIsWaiting() === true){
                isShowing = true
                await animateCard(q)
                q.setIsWaiting(false)
                isShowing = false
            }
        }
    }

}

function animate() {
    consumeQueue();
    requestAnimationFrame(animate);
}

animate();