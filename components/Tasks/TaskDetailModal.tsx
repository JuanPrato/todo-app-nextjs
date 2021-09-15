import { faCalendar, faShoePrints } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Dispatch, useState } from "react";
import { Button, Col, Form, Modal, Row, Table } from "react-bootstrap";
import { Task } from "../../api/models/types";
import { addStep } from "../../redux/actions/tasks";
import { store } from "../../redux/store";

const TaskDetailModal = ({task, setTask, show, setShow} : {task: Task | undefined, setTask: Dispatch<Task | undefined>, show: boolean, setShow: Dispatch<boolean>}) => {

    const [onAdd, setOnAdd] = useState(false);
    const [value, setValue] = useState("");

    const close = () => {
        setShow(false);
        setTask(undefined);
    }

    const addConfirm = () => {
        setOnAdd(false);

        addStep(task!, value).then((r) => {
            setTask(task);
            store.dispatch(r);
        });
    }

    return (
        <>
            <Modal show={show} onHide={close}>
                <Modal.Header className="bg-primary bb-secondary">
                    <div className="d-flex justify-content-between w-100">
                        <h3>{task?.title}</h3>
                        <h3>{task?.priority}</h3>
                    </div>

                </Modal.Header>
                <Modal.Body className="bg-primary">
                    <h5 className="mb-2">General state</h5>
                    <div className="d-flex justify-content-around p-2">
                        <div className={"d-flex align-items-center"}>
                            <FontAwesomeIcon icon={faCalendar} className="me-2"/>
                            <h5>{task?.expire.toDate().toLocaleDateString()}</h5>
                        </div>
                        <div className={"d-flex align-items-center"}>
                            <FontAwesomeIcon icon={faShoePrints} className="me-2"/>
                            <h5>{task?.currentStep}/{task?.steps.length}</h5>
                        </div>
                    </div>
                    <h5 className="mb-2">Description</h5>
                    <p>{task?.description}</p>
                    <h5 className="mt-2">Steps</h5>
                    <Table striped bordered hover variant="dark" size="sm" className="mt-2">
                        <thead>
                            <tr >
                                <th className="text-center">X</th>
                                <th>DESCRIPTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {task?.steps.map((s, i) => 
                                <tr key={i}>
                                    <td><Form.Check type="checkbox" checked={i < task.currentStep} className="d-flex justify-content-center" onChange={console.log}/></td>
                                    <td>{s}</td>
                                </tr>)
                            }
                            {
                                onAdd && <tr>
                                    <th><Button onClick={addConfirm}>+</Button></th>
                                    <th className="p-2"><Form.Control type="text" onChange={(e) => setValue(e.currentTarget.value)}/></th>
                                </tr>
                            }
                                <tr>
                                    <th></th>
                                    <th><Button onClick={() => setOnAdd(!onAdd)}> {onAdd ? "Cancel" : "Add step"}</Button></th>
                                </tr>
                        </tbody>
                    </Table>
                    <img src="https://th.bing.com/th/id/OIP.oPSsmEYxtk8zhU48yoxdFQHaDt?pid=ImgDet&rs=1" alt="CARNEE!!" />
                </Modal.Body>
                <Modal.Footer className="bg-primary bt-secondary">
                    <Button>MARK AS COMPLETE</Button>
                    <Button variant="danger">DELETE</Button>
                </Modal.Footer>
            </Modal>
        
        </>
    );

}

export default TaskDetailModal;