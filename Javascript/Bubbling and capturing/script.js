const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

green.addEventListener('click' , () => {
    console.log('Green clicked')
})

pink.addEventListener('click' , (e) => {
    e.stopPropagation()
    console.log('pink clicked')
})

blue.addEventListener('click' , (e) => {
    e.stopPropagation()
    console.log('blue clicked')

})

