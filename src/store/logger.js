
const logger = (reducer) => {

    return (prevState, action) => {
        console.group(action.type);
        console.log("Previous state: ", prevState);
        console.log("Action: ", action.type);
        const newState = reducer(prevState, action);
        console.log("New state: ", newState);
        console.groupEnd();
        return newState;
    }
}

export default logger;