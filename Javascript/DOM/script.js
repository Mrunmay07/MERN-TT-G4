const card = document.querySelector(".card");
const container = document.querySelector(".container");
const addButton = document.querySelector('button')

/* for(let i = 1 ; i<= 10 ; i++){
    const newCard = card.cloneNode(true)
    newCard.innerText = i;
    container.appendChild(newCard)
} */

/* const newCard = card.cloneNode(true);

container.appendChild(newCard); */

/* addButton.addEventListener('click' , () => {
  card.classList.add('active')
})
 */

let count = 0;
addButton.addEventListener('click' , () => {
    count++;
    /* const newCard = card.cloneNode()
    newCard.innerText = count;
    container.appendChild(newCard) */
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count
    container.appendChild(newCard)
    console.log(newCard)

})

