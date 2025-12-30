function sayHi(){
    console.log('Hi')
}

let a = sayHi
function introduce(b ){
    b()
}

introduce(sayHi)