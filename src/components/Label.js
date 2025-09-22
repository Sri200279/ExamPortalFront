import React from "react";
import './Label.css';
import logo from "./logo.jpg";
import logo1 from "./logo1.jpg";


export default function Label() {
  return (
    <div className="exam-portal-label"> 
      <img src={logo} alt="Apex Institute Logo" className="apex-logo" /> 
      <div className="text-container">
        <h1>Apex Spoken English And Computer Institute</h1>
        <p>Official Exam Portal</p>
      </div>
      <img src={logo1} alt="Apex Institute Logo" className="apex-logo" /> 
    </div>
  );
}