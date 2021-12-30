import './Contador.css'
import Botoes from './Botoes';
import Display from './Display';
import React from "react";
import PassoForm from './PassoForm';
class Contador extends React.Component {
    state ={
        numero :this.props.numeroInicial ||0,
        passo :this.props.passo || 5
    };
    inc=()=>{
        this.setState({
            numero:this.state.numero + this.state.passo,
        })
    }
    dec=()=>{
        this.setState({
            numero:this.state.numero - this.state.passo,
        })
    }
    setPasso =(e)=>{
        this.setState({
            passo:+e.target.value
        })
    }
    render(){
        return(
            <div className='Contador'>
                <h2>Contador</h2>
                <Display numero={this.state.numero}></Display>
                <div>
                    <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>
                </div>
                <Botoes inc={this.inc} dec={this.dec}></Botoes>
                
            </div>
        )
    }
}
export default  Contador