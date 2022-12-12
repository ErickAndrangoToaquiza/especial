import { useState } from "react";

function UsarHookEstado(props) {
    const [valor, setValor] = useState(0);
    return (
        <>
            <div>Valor Estado: {valor}</div>
            <button onClick={() => setValor(Math.floor(Math.random() * 25))}>
                Actualizar
            </button>
        </>
    );
}


export default UsarHookEstado;


import { useState, React } from "react";

function UsarHookEstado(props) {
    const [color, setColor] = useState("blue");
    const colorsList =["red","yellow","blue","green"]
    return (
        <div>
          <h1 style ={{backgroundColor : color}}>Azul</h1>
        
            <button style ={{backgroundColor: "yellow"}}onClick ={()=>setColor(colorsList[1])}>amarillo</button>
            <button style ={{backgroundColor: colorsList[0]}}onClick ={()=>setColor(colorsList[0])}>rojo</button>
            <button style ={{backgroundColor: "green"}}onClick ={()=>setColor(colorsList[3])}>verde</button>
            </div>
              
   
        
    );
    
}


export default UsarHookEstado;

import { useEffect, useState } from "react";
const EjercicioUseEffect = () => {
  const [dato, setDato] = useState(0);
  useEffect(
    () => setDato((valorActual) => valorActual + 1)
  );
  return <div>Dato: {dato}</div>;
};
export default EjercicioUseEffect;