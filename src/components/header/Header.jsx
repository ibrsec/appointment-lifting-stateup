import React from "react";
import './Header.css';
const Header = () => {
  return (
    <header className="bg-success">
      <div className="container d-flex align-items-center justify-content-center flex-column gap-3 py-4">


        <div className="d-flex align-items-center gap-2">
          <img
            src="https://img.freepik.com/free-vector/hospital-logo-design-vector-medical-cross_53876-136743.jpg" className="logo rounded-circle"
            alt=""
          />
          <h1 className="text-info ">Medic Hospital</h1>
        </div>


        <button className="btn btn-dark text-warning px-5 py-2 opacity-75">Our Doctors</button>


      </div>
    </header>
  );
};

export default Header;
