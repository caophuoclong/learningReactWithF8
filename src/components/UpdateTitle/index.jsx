import React, { useState } from 'react';
import { useEffect } from 'react';

// 
// 1. useEffect(callback);
// - Callback is excuted when component re-render;
// 2. useEffect(callback, []);
// 3. useEffect(callback, [deps]);
// =======================================
// 1. Callback always called after mounted


const tabs = ["posts", "comments", "albums", "todos", "users", "photos"];

const UpdateTitle = () => {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState("posts");
    // Use one time
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res=>res.json())
            .then(posts=>{
                setPosts(posts);
            })
    },[type])
    return (
        <div>
            {
                tabs.map(tab=>
                    <button 
                        key={tab}
                        style={type === tab ?
                             {
                                    color: "whitesmoke",
                                    backgroundColor: "burlywood"
                                } : 
                             {}
                            }
                        onClick={()=>setType(tab)}
                    >
                        {tab}
                    </button>
                    )
            }
            <h1>Update Title</h1>
            <input type="text" value={title} onChange={e=>setTitle(e.target.value)} />
            <ul>
                {posts.map(post=>(<li key={post.id}>
                    {post.title || post.name}
                </li>))}
            </ul>
        </div>
    );
}

export default UpdateTitle;
