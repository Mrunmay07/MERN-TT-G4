// by default ek function ki return value hoti ha i-> undefined
// by new XMLHttpRequest() --> ek opbject return karta hai 

function sayHi(){
    console.log('HI')
}

const image = document.querySelector('img')
const button = document.querySelector('button')


button.addEventListener('click' , () => {
    const xhr = new XMLHttpRequest();
    console.log(xhr)

    xhr.responseType = 'json'

   /*  xhr.addEventListener('load' , () => {
        image.src = xhr.response.message;
        console.log(xhr.response);  
    }) */   // not the write tarika to do it 

    xhr.onload =     () => {
        image.src = xhr.response.message;
        console.log(xhr.response);
    }

    xhr.open('GET' , 'https://dog.ceo/api/breeds/image/random');
    xhr.send();
})    


