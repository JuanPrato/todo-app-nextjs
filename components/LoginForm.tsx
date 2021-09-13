import {NextPage} from "next";

const LoginForm: NextPage = () => {

    return (
        <div className="card p-3">
            <h2 className="title">LOGIN</h2>
            <form onClick={(e) => e.preventDefault()}>
                <input type="text"/>
                <button className={"btn btn-primary"}>Ingresar</button>
            </form>
        </div>
    );

}

export default LoginForm;