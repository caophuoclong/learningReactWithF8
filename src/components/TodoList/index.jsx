import React from 'react';
import { useState } from 'react';
const List = ({handleDelTask,children})=>{
    return(
        children.map((task,index)=>
        <li style={{listStyleType: "none"}} key={index}>
            <span>{task.taskContent}</span>
            <button style={{marginLeft: "10px"}} onClick={()=>handleDelTask(index)}>Remove</button>
        </li>)
    )
}
const TodoList = () => {

    const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("tasks"))|| []);
    const [task, setTask] = useState("");
    
    const handleAddTask = ()=>{
        const item = {
            id: taskList.length,
            taskContent: task,
        }
        if(task){
            
            setTaskList(prev => {
                const newTask = [...prev, item];
                localStorage.setItem("tasks", JSON.stringify(newTask));
                return newTask;
            });
            
        }
        setTask("");
    }
    const handleDelTask = (id)=>{
        setTaskList(prev => {
            const newTask = prev.filter((item,index) => index !== id);
            localStorage.setItem("tasks", JSON.stringify(newTask));
            return newTask
        });
        

    }
    return (
        <div>
            <h1 style={{textAlign: "center"}}>Todo List</h1>
            <div style={{textAlign: "center"}}>
                <input style={{margin: "5px"}} type="text" value={task} onChange={(e)=>{
                    setTask(e.target.value);
                }} onKeyDown={(e)=>{
                    if(e.key === "Enter"){
                        handleAddTask();
                    }
                }}/>
                <button onClick={handleAddTask} style={{margin: "5px"}}>Add</button>
            </div>
            <ul>
                <List handleDelTask={handleDelTask}>{taskList}</List>
            </ul>
        </div>
    );
}

export default TodoList;
