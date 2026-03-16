import { useState } from "react";
import Header from "../components/Header/Header";
import BtnGera from "../components/Geradores/BtnGera";
import InputGera from "../components/Geradores/InputGera";
import TituloPag from "../components/Titulo/TituloPag";
import gerarCNPJ from "../services/cnpjService";

function GeraCNPJ() {
    // CNPJ que será alterado conforme o usuário clicar no botão..
    const [cnpjGerado, setCnpjGerado] = useState<string>("");

    const novoCNPJ = (): void => setCnpjGerado(gerarCNPJ());

    return (
        <>
            <Header />

            <main className="
                 flex 
                  gap-5
                  items-center
                  flex-col
                  mt-16">
                <TituloPag
                    titulo="CNPJ"
                    />

                <div className="
                    w-full
                    flex justify-center gap-10">
                    <BtnGera funcao={novoCNPJ} />
                
                    <InputGera
                        id="inCNPJ"
                        placeholder="O CNPJ vai aparecer aqui.."
                        value={cnpjGerado}
                        />
                </div>
            </main>
        </>
    )
}

export default GeraCNPJ;