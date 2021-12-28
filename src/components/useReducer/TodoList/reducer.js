import { SET_JOB, ADD_JOB, DELETE_JOB } from "./constants"

export const initState = {
    job: '',
    jobs: [],
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
            preJobs.splice(action.payload, 1);
            return {
                ...state,
                jobs: preJobs
            }

        default:
            throw new Error(`Invalid action ${action.type}`);
    }
};

export default reducer;