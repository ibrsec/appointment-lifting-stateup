

import React from 'react'
import './Content.css';

const Content = (props) => { 
  return (

    <section className="doctor-container bg-secondary">
    <div className="container  py-4">
        {props.children}
    </div>
    </section>
  )
}

export default Content