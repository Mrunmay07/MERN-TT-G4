const para = document.querySelector('p')
para.setAttribute('id' , 'para-1')

const button = document.querySelector('button')


button.addEventListener('click' , () => {
   /*  para.style.margin = '4rem'
    para.style.backgroundColor = 'coral'
    para.style.border = '2px solid black'
    para.style.padding = '4rem' */

    /* para.style.cssText = "margin:4rem; background-color:coral; border :2px solid red; padding:4rem;" */
    
    para.classList.add('active')
})
