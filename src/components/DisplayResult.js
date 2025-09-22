import axios from 'axios';
import React,{useEffect}from 'react';
import './DisplayResult.css';

function ResultDisplay() {
    const [data,setData] = React.useState([{name:"",rollno:"",subject:"",score:0}]);
    useEffect(()=>{
        axios.get("https://examportal-q00f.onrender.com/result").then((res)=>{
 
            setData(res.data);

        })
    },[]);
    
    return(
        <div className='result-display'>
            <h2>Quiz Result</h2>
            {data.map((item,idx)=>(
                <div key={idx} className='result-item' style={{display:"flex", gap:"20px"}}>
                    <p>Name:{item.name}</p>
                    <p>Roll No:{item.rollno}</p>
                    <p>Subject:{item.subject}</p>
                    <p>Score:{item.score}</p>
                </div>
            ))}

        </div>
    );
}
export default ResultDisplay;