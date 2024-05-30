import React, { useState } from "react";
import "./style.css";
import Date from "../../assets/Select_date-01.svg";
import Time from "../../assets/Set_time-01.svg";
import Calendar from "../Calender";  // Ensure the import path is correct

function DateTime() {
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div id="time-container">
      <div id="date" onClick={toggleCalendar} style={{ cursor: "pointer" }}>
        <img src={Date} alt="Select date" />
        <span>28 May 2024</span>
      </div>
      <div id="time">
        <img src={Time} alt="Set time" />
        <span>10:00 PM - 12:00 PM</span>
      </div>
      {showCalendar ? <Calendar />: <></>}
    </div>
  );
}

export default DateTime;
