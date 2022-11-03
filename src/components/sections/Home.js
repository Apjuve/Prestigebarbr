import React from 'react'

function home() {
  return (
    <div className="welcome__container">
      <h1 className="welcome__title">Walk-Ins Welcome</h1>

      <p className="welcome__availability">Monday - Saturday</p>
      <div className="welcome__btn-background">
        <button className="welcome__button">Book Appointment</button>
      </div>
    </div>
  )
}

export default home