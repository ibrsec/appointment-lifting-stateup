import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const DoctorModal = (props) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const [inputDate, setInputDate] = useState("");
  const tarihDegisiklikFonksiyonu = (e) => {
    setInputDate(e.target.value);
  }; 
  
 

const handleSubmit = ((e) => {
  e.preventDefault();


  props.setAppoint(
    [
    ...props.appoint,
    {
      id: (props.appoint[props.appoint.length-1].id + 1),
      patient: inputValue,
      day: new Date(inputDate),
      consulted: false,
      doctor: props.doctorName
    }
  ]
  )
  props.setModalShow(false); 

})
 




  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-danger">
          Appointment for {props.doctorName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicPatient">
            <Form.Label className="fw-bold">Patient Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              onChange={handleChange}
              value={inputValue}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label className="fw-bold">Day&Time</Form.Label>
            <Form.Control
              type="datetime-local"
              onChange={tarihDegisiklikFonksiyonu}
              value={inputDate}
            />
          </Form.Group>

          <div className="d-flex justify-content-center align-items-center gap-2">
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button className="btn-danger" onClick={props.onHide}>
              Close
            </Button>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default DoctorModal;
