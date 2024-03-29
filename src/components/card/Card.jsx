import React from "react";
import "./Card.css";
import DoctorModal from "../modal/DoctorModal";

const Cardd = (props) => { 
  const img = props.doctorImg;
  const name = props.doctorName;
  const dep = props.doctorDep; 

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
    <div className="card doctorCard" style={{ width: "300px", height: "300px" }} onClick={() => setModalShow(true)}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{dep}</li>
      </ul>
    </div>

    <DoctorModal 
      show={modalShow}
      onHide={() => setModalShow(false)}
      setModalShow={setModalShow}
      doctorName={name}
      setAppoint={props.setAppoint}
      appoint={props.appoint}
    />
    </>

  );
};

export default Cardd;
