import logo from './logo.svg';
import './App.css';
import UsarHookEstado from '../componentes/UsarHookEstado';

function App() {
  return <div>
    <UsarHookEstado />
  </div>
}

export default App;

function UsarHookEstado(props) {
  const [valor, setValor] = useState(0);
  const numerosList = ["1", "2", "3", "4"]
  return (
    <div>
      <h1> Valor Estado: {valor} </h1>

      <button style={{}} onClick={() => setValor(numerosList[1])}>1</button>
      <button style={{}} onClick={() => setValor(numerosList[2])}>2</button>
      <button style={{}} onClick={() => setValor(numerosList[3])}>3</button>
    </div>
  )
};


function UsarHookEffectDependenciaVacia(props) {
  const UsarHookEffectDependenciaVacia = () => {
    const [datos, setDatos] = useState([]);

    useEffect(
      () => setDatos(restaurantes),
      []
    );



    const listaElementosHtml = datos((item) => (
      <li key={item.id}>{item.name}</li>
    ));

    return <ul>{listaElementosHtml}</ul>;
  }
};

export default UsarHookEffectDependenciaVacia;
import { useEffect, useState } from "react";
const EjercicioUseEffect = () => {
  const [dato, setDato] = useState(0);
  useEffect(
    () => setDato((valorActual) => valorActual + 1)
  );
  return <div>Dato: {dato}</div>;
};
export default EjercicioUseEffect;


import React from "react";
import "./style.css";
import UsarHookEstado from './UsarHookEstado';
function App() {
  return <div>
    <EjercicioSumaRestaReset/>
  </div>
  }
  
  export default App;

  import { useEffect, useState } from "react";
  import { useState, React } from "react";

 export default function EjercicioSumaRestaReset (props){
  const [color, setColor] = useState("");
  const colorsList =["red","yellow","blue","green"]
   const [dato, setDato] =useState (0);
   
  return (
    <>
    <ComponenteUno valor ={dato}/>
    <div> Valor Padre: {dato}</div>

    
    <button style ={{backgroundColor: "yellow"}}onClick ={()=>setColor(colorsList[1])}>amarillo</button>
    <button style ={{ }} onClick ={()=>setColor(colorsList[0])}>rojo</button>
    <button style ={{backgroundColor: "green"}}onClick ={()=>setColor(colorsList[3])}>verde</button>
            
    </>
  );
 }

 function ComponenteUno(props){
  const [datoHijo, setDatoHijo] =useState (0);
  useEffect(
    ()=>setDatoHijo(),[props.valor]
  )
  return (
    <>
    
    </>
  );
 }



 import { useEffect, useState } from "react";
 import { useState, React } from "react";

export default function ListaProductosDisponibles (props){
 const [producto, setProducto] = useState("");
 const productList =["cuaderno","esfero","lapiz","marcador"]
  
  
 return (
   <>
   <ComponenteUno valor ={producto}/>
   <div> Lista de productos disponibles: {producto}</div>

   
   <button style ={{}}onClick ={()=>setProducto(productList[0])}>cuaderno</button>
   <button style ={{}} onClick ={()=>setProducto(productList[1])}>esfero</button>
   <button style ={{}}onClick ={()=>setProducto(productList[2])}>lapiz</button>
   <button style ={{}}onClick ={()=>setProducto(productList[3])}>marcador</button>
           
   </>
 );
}

function ComponenteUno(props){
 const [datoHijo, setDatoHijo] =useState (0);
 useEffect(
   ()=>setDatoHijo(props.valor),[props.valor]
   
   
  
 )

 return(
   <>
   Lista de productos agregados : {datoHijo}
   </>
 
 );
}


import React from "react";
import "./style.css";
import UsarHookEstado from './UsarHookEstado';
function App() {
  return <div>
    <UsarHookEstado/>
  </div>
  }
  
  export default App;

  import {useState} from 'react';

const productoDatos = [
    {id:1,nombre:"Producto 1",precio:200.0},
    {id:2,nombre:"Producto 2",precio:130.30},
    {id:3,nombre:"Producto 3",precio:20},
];

function ProductoLista(){
    
    const [productosSeleccionados,setProductosSeleccionados] = useState([]);

    const handlerSeleccion=(producto)=>{
        console.log(producto);
        //setProductosSeleccionados((listaActual)=>listaActual.push(producto));

       /*  const listaNueva = [...productosSeleccionados];
        listaNueva.push(producto);
        console.log(listaNueva);
        setProductosSeleccionados(listaNueva); */
        setProductosSeleccionados((listaActual)=>{
            const listaNueva = [...listaActual];
            listaNueva.push(producto)
            return listaNueva;
        });
    }

    const listaProductosDisponibles = productoDatos.map((producto) => <ProductoSeleccion 
        key={producto.id}
        producto={producto}
        funcionProductoSeleccionado={handlerSeleccion}    
    />);

    console.log(productosSeleccionados);

    const listProductosSeleccionados = productosSeleccionados.map(
            (producto) => <li key={producto.id}>{producto.nombre}</li>
    );

    return <>
        <h3>Lista de productos seleccionados</h3>
         <ul>{listProductosSeleccionados}</ul>

        <h3>Lista de productos disponibles</h3>
        {listaProductosDisponibles}
    </>
}

function ProductoSeleccion({producto,funcionProductoSeleccionado}){
    return <div>
        Nombre: {producto.nombre} Precio: {producto.precio} 
        <button onClick={(e)=>funcionProductoSeleccionado(producto)} >Seleccionar</button>
    </div>
}

export default ProductoLista;