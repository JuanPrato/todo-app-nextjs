import {NextPage} from "next";
import { useEffect } from "react";
import { getCurrentUser, loginWithGoogle } from "../../api/auth";
import { setUser } from "../../redux/actions/user";
import { store } from "../../redux/store";
import styles from "../../styles/Login.module.css";

const LoginForm: NextPage = () => {

    const login = async () => {
        await loginWithGoogle();

        store.dispatch(setUser());

        if (store.getState().user.user && window.location.pathname !== "/home") {
            window.location.href = "/home"
        }
    }

    useEffect(() => {
        store.dispatch(setUser());
        if (store.getState().user.user) {
            window.location.href = "/home"
        }
    }, []);

    return (
        <div className={"card p-3 " + styles.box}>
            <h2 className="title">LOGIN</h2>
            <button className={"btn btn-primary"} onClick={login} >Log In With Google</button>
        </div>
    );

}

export default LoginForm;