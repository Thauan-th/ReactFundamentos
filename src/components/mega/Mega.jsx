import React ,{useState} from "react";
import './Mega.css';
export default props=>{
    function gerarNumeros(qtde){
        const numeros = Array(qtde).fill(0).reduce((nums)=>{
            const novoNumero =  gerarNumeroNaoContido(1,100,nums)
            return [...nums, novoNumero]},[]).sort((n1,n2)=>n1-n2)   
        return numeros;
        }
    
    
    function gerarNumeroNaoContido(min,max,array){
        const aleatorio = parseInt(Math.random()*(max+1-min))+min;
        return array.includes(aleatorio)?gerarNumeroNaoContido(min,max,array):aleatorio
    }
    
    const [qtde,setQtde] = useState(props.qtde || 6)
    const numerosIniciais = Array(props.qtd || 6).fill(0)
    const[numeros,setNumeros]=useState(numerosIniciais)
    return (
        <div className="Mega">
            <h2>MegaDaVirada</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label >Qtd Numeros</label>
                <input type="number" min={0} value={qtde} onChange={e=>{
                    setQtde(+e.target.value)
                    setNumeros(gerarNumeros(+e.target.value))
                    }} />
            </div>
            <button onClick={()=>setNumeros(gerarNumeros(qtde))}>Gerar Numeros</button>
        </div>
    )
}