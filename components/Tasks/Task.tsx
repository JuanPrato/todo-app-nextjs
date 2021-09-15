import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../../styles/Task.module.css";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faShoePrints, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Task as TaskType } from "../../api/models/types";

const Task = ({task, click}: {task: TaskType, click: (task: TaskType) => void}) => {

    return (
        <div className={"mb-4 p-3 card " + styles.body} onClick={() => click(task)}>
            <div className={styles.header}>
                <h4>{task.title}</h4>
                <div className={styles.icons}>
                    <h5>{task.priority}</h5>
                    <FontAwesomeIcon icon={faCheck}/>
                </div>
            </div>
            <div className="separator"><span></span></div>
            <div className={styles.card_body + " content-fluid row"}>
                <div className={styles.body_item + " col-xl-3 col-lg-6"}>
                    <p>{task.description.length > 60 ? `${task.description.slice(0, 57)}...` : task.description}</p>
                </div>
                <div className={styles.body_item + " col-xl-3 col-lg-6 " + styles.items}>
                    <div className={styles.items_item}>
                        <input type="checkbox" id="lastStep" className="me-2 form-check-input"/>
                        <h6 className="mt-1">{task.steps[task.currentStep]}</h6>
                    </div>
                    <div className={styles.items_item}>
                        <FontAwesomeIcon icon={faCalendar} className="me-2"/>
                        <h5>{task.expire.toDate().toLocaleDateString()}</h5>
                    </div>
                    <div className={styles.items_item}>
                        <FontAwesomeIcon icon={faShoePrints} className="me-2"/>
                        <h5>{task.currentStep}/{task.steps.length}</h5>
                    </div>
                </div>
                <div className={styles.body_item + " col-xl-6 " + styles.image_column}>
                    <img src="https://th.bing.com/th/id/OIP.oPSsmEYxtk8zhU48yoxdFQHaDt?pid=ImgDet&rs=1" alt="carne"/>
                </div>
            </div>
            <div className="separator"><span></span></div>
            <div className={"row"}>
                <button className="btn btn-primary col-lg ms-2 me-2">MARK AS COMPLETE</button>
                <button className="btn btn-danger col-lg ms-2 me-2">DELETE</button>
            </div>
        </div>
    )

}

export default Task;