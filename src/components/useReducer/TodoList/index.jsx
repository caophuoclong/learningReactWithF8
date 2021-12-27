import { useReducer, useRef } from 'react';

const initState = {
  job: '',
  jobs: [],
};
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'del_job';

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};
const addJob = () => {
  return {
    type: ADD_JOB,
  };
};

const delJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, state.job],
      };

    case DELETE_JOB:
        const preJobs = [...state.jobs];
        preJobs.splice(action.payload,1);
        return {
            ...state,
            jobs:  preJobs
        }

    default:
      throw new Error(`Invalid action ${action.type}`);
  }
};

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const inputRef = useRef();
  const handleAddJob = () => {
    if (state.job) {
      dispatch(addJob());
      dispatch(setJob(''));
      inputRef.current.focus();
    }
  };
  const handleDelJob = (index) => {
    dispatch(delJob(index));
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Todo List</h1>
      <div style={{ textAlign: 'center' }}>
        <input
          ref={inputRef}
          style={{
            padding: '5px',
            borderRadius: '10px',
            fontSize: '16px',
            fontWeight: '500',
            fontStyle: 'italic',
            margin: '0px 10px',
          }}
          type='text'
          value={state.job}
          onChange={(e) => {
            dispatch(setJob(e.target.value));
          }}
          onKeyDown={(e) => {
            e.key === 'Enter' && handleAddJob();
          }}
          placeholder='Enter job...'
        />
        <button
          style={{
            padding: '5px 10px',
            borderRadius: '10px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            border: '0.5px solid #f5f5f5',
            boxShadow:
              '20px 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            backgroundColor: 'white',
          }}
          onClick={handleAddJob}
        >
          Add
        </button>
      </div>
      <ul>
        {state.jobs.map((job, index) => (
          <li
            key={index}
            style={{
              listStyleType: 'none',
              boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
              backgroundColor: 'white',
              padding: '5px 10px',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: '500',
              cursor: 'pointer',
              border: '0.5px solid black',
              width: '70%',
              marginLeft: '30px',
              position: 'relative',
              margin: "10px 0px"
            }}
          >
            {job}
            <span
                style={{
                    position: "absolute",
                    right: 10,
                }}
                onClick={()=>{
                    handleDelJob(index)
                }}
            >&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
