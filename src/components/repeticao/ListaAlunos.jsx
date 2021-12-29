import React from "react";
import alunos from '../../data/alunos'
export default props=>{
    const Lis = alunos.map(aluno=>{
        return <li key={aluno.id}>{aluno.id}) {aluno.nome}  Nota: {aluno.nota} </li>
    });
    return (
        <div>
            <ul style={{listStyle:'none'}}>{Lis}</ul>
        </div>
    )
}