import React, { useState } from 'react'
import DatePicker from "react-datepicker";

import CountdownTimer from "../../components/CountdownTimer";

import "react-datepicker/dist/react-datepicker.css";
import "./styles.css"

const DropZone = () => {
    const [countdownDate, setCountdownDate] = useState("")
    return (
        <div className="dropzone-container">
            <div className="dropzone-container-inner">
                <DatePicker
                    className={`dropzone-datepicker ${countdownDate ? "hide" : ""}`}
                    disabled={countdownDate}
                    dateFormat="MM/dd/yyyy"
                    placeholderText="Select a date"
                    selected={countdownDate}
                    onChange={date => setCountdownDate(date)}
                />
                <h1 className="dropzone-header">Leezy Boost 103</h1>
                <CountdownTimer date={countdownDate} />
                <h5 className="dropzone-subheader">Until drop</h5>
            </div>
        </div>
    )
}

export default DropZone
