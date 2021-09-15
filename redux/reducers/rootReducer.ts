import { combineReducers } from "redux";
import tasks from "./tasks";
import user from "./user";

const rootReducer = combineReducers({tasks, user});

export default rootReducer;