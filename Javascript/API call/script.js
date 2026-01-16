let word = 'hello'

const apicall = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
.then((res) => {
    return res.json()   
})
.then((data) => {
    console.log(data[0].meanings)
})
console.log(apicall)
