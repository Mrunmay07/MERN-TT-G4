import { useReducer } from "react"

function Counter(){

    // STEP 1 : Define Initial Step
    const initialState = {
        count : 0,
        count2 : 1
    }

    function reducer(state , action){
       switch (action.type) {
        case "INCREMENT":
            return {...state ,count : state.count + action.payload}
            break;

        case "DECREMENT":
            return {...state , count : state.count - 1}

        default:
            break;
       }
    }
    // STEP-2:
    const [state , dispatch] = useReducer(reducer , initialState)
    
    return(
        <>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({type : "INCREMENT" , payload:3})}>INCREMENT</button>
            <button onClick={() => dispatch({type:"DECREMENT"})}>DECREMENT</button>
        </>
    )
}

export default Counter