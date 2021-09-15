import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getTasks } from "../../redux/actions/tasks";
import { store } from "../../redux/store";
import styles from "../../styles/Tasks.module.css";
import Task from "./Task";
import { Task as TaskType} from "../../api/models/types";
import TaskDetailModal from "./TaskDetailModal";

const Tasks = () => {

    const [tasks, useTasks]: [TaskType[], any] = useState([]);
    const [selectedTask, setSelectedTask] : [TaskType | undefined, any] = useState(undefined);
    const [show, setShow] = useState(false);

    const clickTask = (task: TaskType) => {
        setSelectedTask(task);
        setShow(true);
        console.log(selectedTask);
    }

    const updateTasks = (newTasks: TaskType[]) => {
        useTasks(newTasks);
        if (selectedTask) setSelectedTask(newTasks.find((task:TaskType) => task.id === (selectedTask as TaskType).id));
    }

    useEffect(() => {
        getTasks().then((tasks) => {
            store.dispatch(tasks);
            updateTasks(store.getState().tasks.tasks);
        });
        store.subscribe(() => {
            const storeTasks = store.getState().tasks.tasks;
            updateTasks(storeTasks);
        });
    }, []);

    return (
        <div className={styles.body + " mx-auto mt-4"}>
            {tasks.map(t => <Task key={t.id} task={t} click={clickTask}/>)}
            <TaskDetailModal
                task={selectedTask}
                setTask={setSelectedTask}
                show={show}
                setShow={setShow}
            />
        </div>
    );

}

export default Tasks;