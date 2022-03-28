import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ background: "none", boxShadow: "none", maxHeight: "100%" }}
            dialogClassName="modal-100w"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Rock Paper Scissors Lizard Spock Game Rules:
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <center>
                    <img height="600px" width="600px" src="https://lh6.googleusercontent.com/-Icbucqm33II/TX_n72oLQSI/AAAAAAAAAdo/mS24jzqwpAs/s1600/IMGP7697+big+bang+tshirt+01.jpg" />
                    <ul>
                        <li></li>
                    </ul>
                </center>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


const Rules = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Game Rules:
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default Rules