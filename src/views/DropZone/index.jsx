import React from 'react'

import CountdownTimer from "../../components/CountdownTimer";

import "./styles.css"

const DropZone = () => {
    return (
        <div className="dropzone-container">
            <div className="dropzone-container-inner">
                <h1 className="dropzone-header">Leezy Boost 103</h1>
                <CountdownTimer />
                <h5 className="dropzone-subheader">Until drop</h5>
            </div>
        </div>
    )
}

export default DropZone
