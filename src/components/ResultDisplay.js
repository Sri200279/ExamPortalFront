import axios from 'axios';
import React, { useEffect } from 'react';
import './ResultDisplay.css';

function ResultDisplay({ student, score, totalquestion }) {
  useEffect(() => {
    axios.get("https://examportal-q00f.onrender.com/result").then((res) => {
      console.log("All results from DB:", res.data);
    });
  }, []);

  return (
    <div className='result-display'>
      <h2>Quiz Result</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Roll No:</strong> {student.rollno}</p>
      <p><strong>Subject:</strong> {student.subject}</p>
      <p><strong>Score:</strong> {score}/{totalquestion}</p>
    </div>
  );
}

export default ResultDisplay;
