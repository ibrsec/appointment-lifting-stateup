import Header from "./components/header/Header";
import Cardd from "./components/card/Card.jsx";

import { appointmentData, doctorData } from "./helper/data.jsx";
import AppointmentCard from "./components/appointments/AppointmentCard.jsx";
import { useState } from "react";

function App() { 

  const [appointmentDatam, setAppointmentDatam] = useState(appointmentData); 

  return (
    <div className="App">
      <Header />
      <section className="doctor-container bg-secondary">
        <div className="container  py-4">
          {doctorData.map((doctor) => {
            return (
              <Cardd
                key={doctor.id}
                doctorName={doctor.name}
                doctorDep={doctor.dep}
                doctorImg={doctor.img}
                setAppoint={setAppointmentDatam}
                appoint={appointmentDatam}
              />
            );
          })}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container py-4">
          <h1 className="text-warning text-center">Appointment List</h1>

          {appointmentDatam.map((item) => (
            <AppointmentCard
              key={item.id}
              itemID={item.id}
              doctorName={item.doctor}
              patientname={item.patient}
              day={item.day}
              consulted={item.consulted}
              setAppoint={setAppointmentDatam}
              appoint={appointmentDatam}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
