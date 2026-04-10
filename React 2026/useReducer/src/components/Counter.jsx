import { useReducer } from "react"

function Counter(){
    function reducer(state, action){
        
    }
    const [count , dispatch] = useReducer(reducer , 0)

    return(
        <>
            <h1>0</h1>
            <button onClick={() => dispatch({type:"INCREMENT"})}>INCREMENT</button>

            <button onClick={() => dispatch({type:"DECREMENT"})}>DECREMENT</button>
        </>
    )
}

export default Counter