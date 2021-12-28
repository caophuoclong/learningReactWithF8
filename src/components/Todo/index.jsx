import React, { useRef } from 'react';
import { useStore, setJob, addJob, delJob } from '../../store';
const Index = () => {
  const inputRef = useRef();
  const [state, dispatch] = useStore();
  const { todoInput, todos } = state;
  const handleAddJob = () => {
    dispatch(addJob(todoInput));
    dispatch(setJob(''));
    inputRef.current.focus();
  };
  return (
    <div>
      <h1>Todo List</h1>
      <input
        ref={inputRef}
        type="text"
        value={todoInput}
        onChange={(e) => dispatch(setJob(e.target.value))}
      />
      <button onClick={handleAddJob}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <span
              style={{ marginLeft: '20px' }}
              onClick={() => {
                dispatch(delJob(index));
              }}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
