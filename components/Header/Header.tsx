import { useState } from "react";
import styles from "../../styles/Header.module.css";
import AddTaskModal from "./AddTaskModal";

const Header = () => {

    const [show, setShow] = useState(false);

    return (
        <>
            <div className="card mt-4 p-3">
                <h2 className="title mb-3">My Day</h2>
                <div className="separator"><span></span></div>
                <div className={styles.buttons_section}>
                    <button className="btn btn-primary mt-3 mb-1" onClick={() => setShow(true)}>ADD TASK</button>
                </div>
            </div>
            <AddTaskModal show={show} setShow={setShow}/>
        </>
    );
}

export default Header;