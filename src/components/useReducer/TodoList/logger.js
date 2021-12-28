const logger = (reducer) => {
    return (prevState, action) => {
        console.group(action.type);
        console.log("Prev state: ", prevState);
        console.log("Action: ", action.type)
        const newState = reducer(prevState, action)
        console.log("New State: ", newState);
        console.groupEnd();
        return newState;
    }
}
export default logger;