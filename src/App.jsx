import React from "react";
import './App.css';
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import DiretaPai from "./components/Comunicacao/DiretaPai";
import UsuarioInfo from "./components/Condicional/UsuarioInfo";
import ParOuImpar from './components/Condicional/ParOuImpar'
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro'
import IndiretaPai from "./components/Comunicacao/IndiretaPai";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Familia from "./components/basicos/Familia";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Card from "./components/basicos/layout/Card";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import Aleatorio from "./components/basicos/Aleatorio";
import Mega from "./components/mega/Mega";
export default function App(){
    return (
    <div className="App">
         <h1>FUNDAMENTOS REACT</h1>
         <div className="Cards">
            <Card titulo="Numero Aleatorio" color="#FA6900">
            <Aleatorio min={1} max={1000}></Aleatorio>
            </Card>  
            <Card titulo="Primeiro Componente" color="#E94C6F">
            <Primeiro></Primeiro>
            </Card>
            <Card titulo="Com Parametro" color="#E8B71A">
            <ComParametro title='TituloEXM'/> 
            </Card>
            <Card titulo="Familia" color="pink">
                <Familia sobrenome="Clifford">
                    <FamiliaMembro nome="Insulina"></FamiliaMembro>
                    
                    <FamiliaMembro nome="Claudio"></FamiliaMembro>
                    <FamiliaMembro nome="Pedro"></FamiliaMembro>
                    
                </Familia>
            </Card>
            <Card titulo="Repetiçao Alunos" color="#3A9AD9">
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo="Repetiçao Produtos" color="#FF432E">
                <TabelaProdutos />
            </Card>
            <Card titulo="Renderizaçao Condicional" color="#AF432E">
                <ParOuImpar numero={10} />
                <UsuarioInfo usuario={{nome:'Thauan' , email:"Thauan@andre.com"}} />
                <UsuarioInfo />
            </Card>
            <Card titulo="Comunicacao Direta" color="#FF4300">
                <DiretaPai></DiretaPai>
            </Card>
            <Card titulo="Comunicacao Indireta" color="#020202">
                <IndiretaPai></IndiretaPai>
            </Card>
            <Card titulo="Componente Controlado" color="#E45F56">
                <Input></Input>
            </Card>
            <Card titulo="Contador" color="#E45F56">
                <Contador numeroInicial={0} passo={2}></Contador >
            </Card>
            <Card titulo="MegaSena" color="#Ef5526">
                <Mega qtde={8}></Mega>
            </Card>
        </div>

    </div>
    )
}