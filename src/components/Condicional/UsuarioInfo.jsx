import React from "react";
import IF ,{Else} from "./IF";
export default props=>{
    const user = props.usuario||{};
    return (
        <div>
            {/* <IF test={user.nome!=''}>
                Seja Bem-vindo <strong>{user.nome}</strong><br></br>{user.email}
            </IF>
            <IF test={!user.nome}>
                Seja Bem-vindo <strong>AMIGAO</strong>
            </IF>
            <IF test={!user.nome}>
                Seja Bem-vindo <strong>AMIGAO</strong>
            </IF> */}
            <IF test={user.nome}>
                Seja Bem-vindo <strong>{user.nome}</strong>
                <Else>
                    Seja Bem-vindo <strong>AMIGAO</strong>
                </Else>
            </IF>
        </div>
    )
}