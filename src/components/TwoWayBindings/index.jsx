import React from 'react';
import {useState} from "react"
const courses = [
    {
        id: 1,
        name: "Javascript"
    },
    {
        id: 2,
        name: "ReactJS"
    },
    {
        id: 3,
        name: "HTML, CSS"
    }
]
const TwoWayBindings = () => {
    const [checked, setChecked] = useState([]);
    const handleCheck = (id)=>{
        const isChecked = checked.includes(id);
        if(isChecked){
            return setChecked(prev => prev.filter(item => item !== id))
        }else{
            return setChecked(prev => [...prev, id]);
        }

    }
    const handleSubmit = ()=>{
        console.log(checked.sort());
    }
    return (
        <div >
            <h1>Two way bindings</h1>
            {
                courses.map(course=>
                <div key={course.id}>
                    <input 
                    type="checkbox" 
                    id={course.id}
                    checked={checked.includes(course.id)}
                    onChange={()=>handleCheck(course.id)}
                    />
                    <label htmlFor={course.id}>{course.name}</label>
                </div>)
            }
            <button onClick={handleSubmit}>Register</button>
        </div>
    );
}

export default TwoWayBindings;
