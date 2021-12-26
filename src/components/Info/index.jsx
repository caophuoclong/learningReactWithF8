import React from "react";
import { useState } from "react";

const Info = () => {
  const initialState = {
    name: "Phuoc Long",
    age: "18",
  };
  const [info, setInfo] = useState(initialState);
  return (
    <div>
      <h1>Infomation</h1>
      <h2>{JSON.stringify(info)}</h2>
      <button onClick={()=>{
          setInfo({
              ...info,
              hobby: "Yeuuuu"
          })
      }}>Add hobby</button>
    </div>
  );
};

export default Info;
