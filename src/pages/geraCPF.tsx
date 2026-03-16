import { useState } from "react";
import Header from "../components/Header/Header";
import BtnGera from "../components/Geradores/BtnGera";
import InputGera from "../components/Geradores/InputGera";
import TituloPag from "../components/Titulo/TituloPag";
import gerarCPF from "../services/gerarCPF";

function GeraCPF() {
    // CPF que será alterado conforme o usuário clica no botão..
    const [cpfGerado, setCpfGerado] = useState<string>('');

    // chama a função que gera um novo CPF de services
    const novoCPF = (): void => setCpfGerado(gerarCPF());

    return (
        <>
            <Header />

            <main className="
                  flex 
                  gap-5
                  items-center
                  flex-col
                  mt-10">
                <TituloPag 
                    titulo="CPF"/>

                <div className="
                    w-full
                    flex justify-center gap-10">
                    <BtnGera funcao={novoCPF}/>

                    <InputGera
                        id="inCPF"
                        placeholder="O CPF vai aparecer aqui.."
                        value={cpfGerado}
                        />
                </div>
            </main>
        </>
    )
}

export default GeraCPF;