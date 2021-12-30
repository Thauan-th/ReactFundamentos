import React ,{useState}from "react";
import IndiretaFilho from "./IndiretaFilho";
export default props=>{
    const [nome,setNome] = useState('?');
    const [idade , setIdade ]= useState(10);
    const [cabelo,setCabelo] =useState(false);
    function passarInfos(nome,idade,cabelo){
        setNome(nome);
        setIdade(idade);
        setCabelo(cabelo);
    }
    return(
        <div>
            <div>
                <span>{nome} </span>
                <span>{idade} </span>
                <span> {cabelo ? 'Tem cabelo':'Com cabelo' }</span>
            </div>
            <IndiretaFilho quandoClicar={passarInfos}/>
        </div>
    )
}