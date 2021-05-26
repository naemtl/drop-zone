import React from 'react'

import DropZone from "../DropZone";
import Navbar from "../Navbar";

import "./styles.css"

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <DropZone />
    </div>
  )
}

export default App
