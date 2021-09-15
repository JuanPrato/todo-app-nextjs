import { getCurrentUser } from "../../api/auth";
import * as types from "../types";

export const setUser = () => ({
    type: types.SET_USER,
    payload: getCurrentUser()
});