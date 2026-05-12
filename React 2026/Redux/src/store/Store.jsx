import { composeWithDevTools } from "@redux-devtools/extension"
import { createStore } from "redux"

// Actions 
const ADD_TASK = 'task/add'
const DELETE_TASK = 'task/delete'
const UPDATE_TASK = 'task/update'

const initialState = {
    task:[]
}

function reducer(state = initialState , action){

    switch (action.type) {
        case ADD_TASK:
            return {...state , task:[...state.task , action.payload]}

        case DELETE_TASK:
            const updatedTask = state.task.filter((curr , index) => {
                return index !== action.payload
            })
            return {...state , task:updatedTask}
    }
}

// Creating a Global Store
export const store = createStore(reducer ,composeWithDevTools())
console.log(store) // Object

//Action Creators
export function addTask(data){
    return {type:ADD_TASK, payload:data}
}

export function deleteTask(id){
    return {type:DELETE_TASK , payload:id}
}

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addTask('Coding'))

store.dispatch(addTask('Gaming'))

store.dispatch(addTask('Sleeping'))

store.dispatch(deleteTask(1))


