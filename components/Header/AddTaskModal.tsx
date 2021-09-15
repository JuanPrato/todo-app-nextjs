import React, { Dispatch, MutableRefObject, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { addTask } from "../../redux/actions/tasks";
import { store } from "../../redux/store";

const AddTaskModal = ({show, setShow} : {show: boolean, setShow: Dispatch<boolean>}) => {

    const initialValue: any = {
        'title': "",
        'description': "",
        'steps': [
            "Complete steps"
        ],
        'priority': 1,
        'expire': new Date(),
        'image': null,
        'currentStep': 0
    };

    const [value, setValue] = useState(initialValue);
    const [validate, setValidate] = useState(false);
    const [onSubmit, setOnSubmit] = useState(false);

    const manageChange = (property: string, newValue: any) => {
        let newState = {...value};
        newState[property] = newValue;
        setValue(newState);
    }

    const close = () => {
        setShow(false);
        setValue(initialValue);
    }

    const save = (e : any) => {
        if (onSubmit) return;
        setOnSubmit(true)
        e.preventDefault();
        e.stopPropagation();
        const form = e.currentTarget;
        setValidate(true);
        
        if (form.checkValidity() === false ) {
            return;
        }

        addTask(value).then(t => {
            store.dispatch(t);
            close();
        })
        setOnSubmit(false);
    }

    return (
        <>
            <Modal show={show} onHide={close}>
                <Form noValidate onSubmit={save} validated={validate}>
                <Modal.Header className="bg-primary bb-secondary">
                    <h3 className="title">ADD TASK</h3>
                </Modal.Header>
                <Modal.Body className="bg-primary bb-secondary">
                        <Form.Group className="mt-2" controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Buy meat" value={value.title} onChange={(e) => manageChange('title', e.currentTarget.value)} required/>
                        </Form.Group>
                        <Form.Group className="mt-2" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} value={value.description} onChange={(e) => manageChange('description', e.currentTarget.value)} required minLength={10}/>
                        </Form.Group>
                        <Form.Group className="mt-2" controlId="priority">
                            <Form.Label>Priority</Form.Label>
                            <Row>
                                <Col xs={2}>
                                    <Form.Control value={value.priority} onChange={(e) => manageChange('priority', e.currentTarget.value)} />
                                </Col>
                                <Col xs={10}>
                                    <Form.Range
                                        value={value.priority}
                                        onChange={(e) => manageChange('priority', e.currentTarget.value)} 
                                        min={1} 
                                        max={10} 
                                    />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="mt-2">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Form.Group className="mt-2">
                            <Form.Label>Expire day</Form.Label>
                            <Form.Control type="date" value={value.expire.toISOString().split('T')[0]} onChange={(e) => manageChange('expire', new Date(e.currentTarget.value))}/>
                        </Form.Group>
                </Modal.Body>
                <Modal.Footer className="bg-primary border-top-0">
                    <Button type="submit">Save</Button>
                </Modal.Footer>
                </Form>
            </Modal>
        </>
    );

}

export default AddTaskModal;