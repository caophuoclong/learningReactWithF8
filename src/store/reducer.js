import { SET_JOB, ADD_JOB, DELETE_JOB } from './constants';

const initState = {
    todos: [],
    todoInput: '',
};

const reducer = (state, action) => {
    let newState;
    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                todoInput: action.payload
            }
            break;
        case ADD_JOB:
            newState = {
                ...state,
                todos: [...state.todos, action.payload]
            }
            break;
        case DELETE_JOB:
            const letState = [...state.todos];
            letState.splice(action.payload, 1);
            newState = {
                ...state,
                todos: letState
            }
            break;
        default:
            throw new Error('Invalid action!!!!');

    }
    return newState;
};
export { initState };
export default reducer;
