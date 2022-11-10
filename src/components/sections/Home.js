import React from 'react'

function home() {
  return (
    <div className="welcome__container">
      <h1 className="welcome__title">Walk-Ins Welcome</h1>

      <p className="welcome__availability">Mon-Tues-Thurs  - 10AM-8PM</p>
      <p className="welcome__availability">Wed  -   Closed</p>
      <p className="welcome__availability">Fri-Sun - 9AM-8PM</p>
      <div className="welcome__btn-background">
        <button className="welcome__button">Book Appointment</button>
      </div>
    </div>
  )
}
 
export default home