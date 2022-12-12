import React from "react";
import "./style.css";
import UsarHookEstado from './UsarHookEstado';
function App() {
  return <div>
    <UsarHookEstado/>
  </div>
  }
  
  export default App;

  import { useEffect, useState } from "react";
  import { useState, React } from "react";

  function UsarHookEstado(props) {
    const [color, setColor] = useState("");
    const colorsList =["red","yellow","blue","green"]
    return (
        <div>
          
          <h1 style ={{display: "flex",  width: "100px", height: "100px", backgroundColor: "red", borderRadius: "50%"}}>{color}</h1>
          <h1 style ={{display: "flex",  width: "100px", height: "100px", backgroundColor: "red", borderRadius: "0%"}}>{color}</h1>
        
            <button style ={{backgroundColor: "yellow"}}onClick ={()=>setColor(colorsList[1])}>amarillo</button>
            <button style ={{ }} 
              onClick ={()=>setColor(colorsList[0])}>rojo</button>
            <button style ={{backgroundColor: "green"}}onClick ={()=>setColor(colorsList[3])}>verde</button>
            </div>
              
    
    );
    
}
export default UsarHookEstado;
