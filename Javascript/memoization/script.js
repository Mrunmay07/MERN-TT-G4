debugger
function getYourMemoizedFuntion(){
    const cache = {} // Empty object

    function doHeavyCalculation(x){
    if(cache.x) return cache.x
    
    const startTime = Date.now()
    let currentTime = startTime
    while(startTime + 1000 > currentTime){
        currentTime = Date.now()
        console.log('Calculating....' , (currentTime - startTime))
    }
    const result = +Math.sqrt(x).toFixed(3)
    cache.x = result
    return result
}
 return doHeavyCalculation
}

const memoizeDoHeavyCalculation = getYourMemoizedFuntion()
memoizeDoHeavyCalculation()


