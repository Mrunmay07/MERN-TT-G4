

// so when we try to call a function we call it like this 
function multiply(x , y){
    return x * y;
}

// but if we are trying to call a function like this 
// but there is a certain way to define a function if we want to call like this 

debugger

function multiply(x){
    return function(y){
        return x * y;
    }
}

multiply(2)(3);

// because when we try to call curried function , a closure is also formed 
// lets see BTS what happens in currying 

// so lets try about

