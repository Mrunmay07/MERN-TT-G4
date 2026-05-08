// Actions 
const ADD_TASK = 'task/add'
const DELETE_TASK = 'task/delete'

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