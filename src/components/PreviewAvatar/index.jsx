import React, { useEffect, useState } from 'react';

const PreviewAvatar = () => {
    const [pictures, setPictures] = useState([]);
    useEffect(()=>{
        return ()=>{
           pictures && pictures.map(picture=>{
            URL.revokeObjectURL(picture.url);
           }   
        );
        }
    },[pictures])
    const handleUpLoadFile = (event)=>{
        setPictures([]);
        const files = event.target.files;

        for(let i = 0; i < files.length; i++){
            const file = files[i];
            file.url = URL.createObjectURL(file);
            setPictures(prev => [...prev, file ]);
        }
    }
    return (
        <div>
            <h1>Preview Avatar</h1>
            <label htmlFor="file" style={{border: '1px solid black', backgroundColor: "white", color: "black", padding: "5px", margin: "5px", cursor: "pointer", display: "block"}}>Choose Picture</label>
            <input id="file" multiple hidden type="file" onChange={handleUpLoadFile} />
            {pictures && pictures.map(picture=><img key={picture.name} src={picture.url} alt="" width="80%" />)}
        </div>
    );
}

export default PreviewAvatar;
