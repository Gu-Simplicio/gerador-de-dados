import { useState } from "react";
import BtnGera from "../components/Geradores/BtnGera"
import Header from "../components/Header/Header"    
import InputGera from "../components/Geradores/InputGera";
import TituloPag from "../components/Titulo/TituloPag";
import gerarSenha from "../services/senhaService";

function GeraSenha() {
    // quantidade de caracteres que a senha terá
    const [ qntdCaracteres, setQntdCaracteres ] = useState<number>(0);
    // altera a qntd de caracteres necessários
    const alteraQntd = (event: React.FormEvent<HTMLInputElement>) => { 
        setQntdCaracteres(Number(event.currentTarget.value));
    }

    // altera a opção de conter números ou não
    const [contemNum, setContemNum] = useState<boolean>(false);

    // contém opção de ter caractere especial na senha
    const [ carEspecial, setCarEspecial ] = useState<boolean>(false);
    
    // SENHA QUE SERÁ GERADA
    const [senhaGerada, setSenhaGerada] = useState<string>("");
    
    const novaSenha = (): void => setSenhaGerada(gerarSenha(
        qntdCaracteres,
        carEspecial,
        contemNum
    ));

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
                    titulo="Senha"
                    />

                <div className="
                        flex gap-10 flex-wrap justify-center">
                    { /* QNTD DE CARACTERES */ }
                    <label htmlFor="inQntdCar" className="
                                                    flex flex-col">
                        Quantidade de caracteres desenhados: 

                        <input 
                            type="number" 
                            id="inQntdCark"
                            placeholder="O padrão será 5"
                            className="border-1 border-red-600 rounded" 
                            onInput={alteraQntd}/>
                    </label>

                    <div className="
                            flex flex-col">
                        { /* CARACTERES ESPECIAIS */ }
                        <label htmlFor="inCarEsp">
                            <input 
                                type="radio" 
                                id="inCarEsp"
                                checked={carEspecial} 
                                onClick={() => setCarEspecial(!carEspecial)}/>

                            Adicionar carac. especiais
                        </label>

                        { /* NÚMEROS */ }
                        <label htmlFor="inContemNum">
                            <input 
                                type="radio" 
                                id="inContemNum"
                                checked={contemNum} 
                                onClick={() => setContemNum(!contemNum)}/>

                            Adicionar números
                        </label>        
                    </div>
                </div>

                <div className="
                    w-full
                    flex flex-wrap justify-center gap-10">
                    <BtnGera funcao={novaSenha} />

                    <InputGera
                        id="inCNPJ"
                        placeholder="A senha vai aparecer aqui.."
                        value={senhaGerada}
                        />
                </div>
            </main>
        </>
    )
}

export default GeraSenha