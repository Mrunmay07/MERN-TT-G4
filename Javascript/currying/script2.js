// Debouncing

debugger 
const inputElement = document.querySelector('input')

function debounce(func ,wait){
    return function(e){
       setTimeout(() => func(e) , wait)
    }
}

const callApi = (e) => {
    console.log("Calling API",e.target.value);
}

const debouncedCallAPI = debounce(callApi , 1000)


inputElement.addEventListener('input' , debouncedCallAPI)


