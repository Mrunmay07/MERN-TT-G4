import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../store/Store";

function Todo() {

    // state -> useState()
    const [task , setTask] = useState('')

  const todos = useSelector((state) => state.task);
  // todos -> Array = ['Coding' , 'sleeping']

  // dispatch hook 
  const dispatch = useDispatch() // function 
  

  function handleSubmit(e){
    e.preventDefault()
    dispatch(addTask(task))
  }

  function handleChange(e){
    setTask(e.target.value)
  }

  function handleDelete(id){
    dispatch(deleteTask(id))
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Todo Application</h2>

        <input type="text" value={task} onChange={handleChange} />
        <button>Add</button>
      </form>

      <ul>
        {todos.map((curr, index) => {
          return (
            <div>
              <p>
                {index} {curr}
              </p>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
