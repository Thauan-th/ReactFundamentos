import React,{useState} from "react";
import './Input.css';   
export default props =>{
    const [valor,setValor] = useState('Inicial'); 
    function mudar(e){
        setValor(e.target.value)
    }
    return (
        <div className="Input">
                <h2>{valor}</h2>
            <div style={{
                display:"flex",
                flexDirection :'column'
            }}>
                <input type="text" value={valor} onChange={mudar} />
                <input type="text" value={valor} readOnly />
                <input type="text" value={undefined} placeholder="Nao Controlado" />
            </div>
        </div>
    )
}