import { useState } from 'react';
import './StudentForm.css';

function StudentForm({ onSubmit, onViewResults }) {
  const [form, setForm] = useState({ name: "", rollno: "", subject: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input className='name' name="name" placeholder='Name' onChange={handleChange} required />
      <input className='rollno' name="rollno" placeholder='Roll No' onChange={handleChange} required />
      <select className='subject' name="subject" onChange={handleChange} required>
        <option value="">Select Subject</option>
        <option value="mern">Mern</option>
        <option value="photoshop">Photoshop</option>
        <option value="hardware">Hardware</option>
        <option value="networking">Networking</option>
        <option value="html">HTML</option>
        <option value="java">Java</option>
      </select>

      <button className='sub-btn' type="submit">Start Quiz</button>
      <button
        type="button"
        className="view-btn"
        onClick={onViewResults}
        style={{ marginLeft: "10px", background: "#28a745", color: "#fff", padding: "8px 14px", borderRadius: "6px", border: "none", cursor: "pointer" }}
      >
        View All Results
      </button>
    </form>
  );
}

export default StudentForm;
