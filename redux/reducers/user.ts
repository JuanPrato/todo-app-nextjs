import * as types from "../types";

const user = (
    state : any = {
        user: null
    }, action: {type: any, payload: any}
) => {
    switch (action.type) {
        case types.SET_USER:
            return {
                ...state,
                user: action.payload
            }
    
        default:
            return state;
    }
}

export default user;