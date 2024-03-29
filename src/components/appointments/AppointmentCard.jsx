import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./Appointment.css";
const AppointmentCard = (props) => {
  const time = `${props.day.getHours()}:${props.day.getMinutes()}:${props.day.getSeconds()}`; 
 

  const handleDeleteClick = (e) => {
    props.setAppoint(
      props.appoint.filter((item) => item.id != e.target.getAttribute("itemID"))
    );
  };

  const handleDoubleClick = (e) => { 
    const currentAppointment = props.appoint.filter(item => item.id == e.target.closest("#appointment").getAttribute("itemID"))[0];  
    
props.setAppoint(
[
  ...props.appoint.map(item => {
if(item.id == currentAppointment.id){
  item.consulted = !currentAppointment.consulted;
}

    return item;


  })
]
  
);
 
  };
  return (
    <Card
      className="my-2"
      id="appointment"
      onDoubleClick={handleDoubleClick}
      itemID={props.itemID}
    >
      <ListGroup
        variant="flush"
        className="d-flex flex-row justify-content-between align-items-center"
      >
        <ListGroup.Item>
          <h3 className="text-danger">{props.patientname}</h3>
          <h4>{props.doctorName}</h4>
        </ListGroup.Item>
        <ListGroup.Item>
          <p>Date: {props.day.toDateString()}</p>
          <p>Time: {time}</p>
        </ListGroup.Item>
        <ListGroup.Item
          className="p-2 bg-dark rounded-circle me-3 opacity-75"
          style={{ cursor: "pointer" }}
          onClick={handleDeleteClick}
          itemID={props.itemID}
        >
          ❌
        </ListGroup.Item>
      </ListGroup>
      {props.consulted && <span className="consulted">Consulted</span>}
    </Card>
  );
};

export default AppointmentCard;
