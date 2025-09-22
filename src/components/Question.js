import { useState } from "react";
import './Question.css';
function Question({data,onAnswer}){
    const[selected,setSelected] =useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        onAnswer({question_id:data.id,answer:selected});
        setSelected("");

    };
    return(
        <form onSubmit={handleSubmit} className="question-form">
            <h3>{data.Question}</h3>
            {data.Options.map((opt,idx)=>(
                <div key={idx} className="option">
                    <input type="radio" name="option" value={opt} checked={selected===opt} onChange={(e)=>setSelected(e.target.value)} required/>
                    {opt}
                </div>
            ))}
            <button className="sub-btn" type="submit">Next</button>
        </form>
    );
}
export default Question;