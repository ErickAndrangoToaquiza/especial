function UsarHookEstado(props) {
    const [color, setColor] = useState("");
    const colorsList =["red","yellow","blue","green"]
    return (
        <div>
          
          <h1 style ={{backgroundColor : color}}>{color}</h1>
        
            <button style ={{backgroundColor: "yellow"}}onClick ={()=>setColor(colorsList[1])}>amarillo</button>
            <button style ={{backgroundColor: colorsList[0]}}onClick ={()=>setColor(colorsList[0])}>rojo</button>
            <button style ={{backgroundColor: "green"}}onClick ={()=>setColor(colorsList[3])}>verde</button>
            </div>
              
    
    );
    
}
export default UsarHookEstado;
