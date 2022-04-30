import React from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import "./MagicPayModal.css";

export default function Magicpaymodal(props) {

    const formik = useFormik({
        initialValues: {
            amount: "8.00",
        },
        onSubmit: values => {
            console.log(values.amount);
            props.checkingAccountUpdate(values.amount);
            props.handleClose();
        },
    });

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>MagicalPay</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Select account to apply funds</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option value="1">Checking</option>
                                <option value="2">Savings</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Label htmlFor="addThisMoney">Amount</Form.Label>
                        <Form.Control
                            name="amount"
                            onChange={formik.handleChange}
                            type="number" min="1" step="any"
                            id="addThisMoney"
                            aria-describedby="passwordHelpBlock"
                            defaultValue={formik.values.amount}
                        />
                        <Form.Text id="passwordHelpBlock" muted>
                            Please input the amount of money you'd like added to your account.
                        </Form.Text>



                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Reason for deposit</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button type="submit" variant="primary" onClick={formik.handleSubmit}>
                            Save Changes
                        </Button>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
