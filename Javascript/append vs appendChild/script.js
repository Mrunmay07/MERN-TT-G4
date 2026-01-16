let container = document.querySelector('.container')
let heading = document.querySelector('h1')
let button = document.querySelector('button')
let card = document.querySelector('.card')


let count = 0;
button.addEventListener('click' , () => {
    /* count++;
    const newCard = card.cloneNode()
    newCard.innerText =  count
    container.appendChild(newCard) */
    count++

    // create card
    const card = document.createElement('div')
    // style apply 
    card.classList.add('card')
    // text content
    card.innerText = count
    //appendChild
    container.appendChild(card)
})

