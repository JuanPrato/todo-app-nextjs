import * as types from "../types";

const tasks = (
    state : any = {
        tasks: []
    }, action: {type: any, payload: any}
) => {
    switch (action.type) {
        case types.SET_TASKS:
            return {
                ...state,
                tasks: action.payload
            };
        case types.ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks.tasks, action.payload]
            };
        default:
            return state;
    }
}

export default tasks;