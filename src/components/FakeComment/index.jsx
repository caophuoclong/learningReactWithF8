import React, { useEffect, useState } from 'react';
const lessons = [
    {
        id: 1,
        name: "Learning React"
    },
    {
        id: 2,
        name: "Learning JS",
    },
    {
        id: 3,
        name: "Learning React Native"
    }
]
const FakeComment = () => {
    const [current, setCurrent] = useState(1);
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        const handleComment = ({detail})=>{
            setComments(prev => [...prev, detail])
        }
        window.addEventListener(`lesson-${current}`,handleComment)
        return ()=>{
            window.removeEventListener(`lesson-${current}`,handleComment)
            console.log("Clean up function")
        }
    },[current])
    function handleEnterLesson(id){
        setCurrent(id);
        
        current !== id && setComments([]);
    }
    return (
        <div>
            <h1>Fake Comment</h1>
            {
                lessons.map(lesson=>
                <div 
                key={lesson.id} 
                style={current === lesson.id?{
                    color: "red"
                }:{}}
                onClick={()=>{
                    handleEnterLesson(lesson.id)
                }}
                >
                    {lesson.name}
                    <ul>
                        {
                            current === lesson.id ? (comments && comments.map((comment, index)=>
                            <li key={index}>{comment}</li>
                            )) : null
                        }
                    </ul>
                    
                </div>
                    
                )
            }
        </div>
    );
}

export default FakeComment;
