import { useState } from "react";
import BtnGera from "../components/Geradores/BtnGera"
import Header from "../components/Header/Header"    

//const ALFABETO = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 'q', "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//const NUMEROS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//const SIMBOLOS = ["!", "@", "#", "$", "&", "_", "-", "/", "?"];

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
    const gerarSenha = (): void => {
        // separa as configurações desejadas para criar a senha..
        /*const configSenha = {
            qntdCaracteres: qntdCaracteres == 0 ? 5 : qntdCaracteres,
            carEspecial: carEspecial,
            numeros: contemNum
        }; */
        
        // TERMINAR LÓGICA DA CRIAÇÃO DE SENHA

        setSenhaGerada(String(carEspecial));
    }


    return (
        <>
            <Header />

            <main className="
                 flex 
                  gap-5
                  items-center
                  flex-col
                  mt-16">
                <h1 className="
                    text-red-500
                    text-3xl
                    font-bold">
                    AINDA EM PRODUÇÃO..
                </h1>

                <h1> Gerar senha </h1>

                { /* QNTD DE CARACTERES */ }
                <label htmlFor="inQntdCar">
                    Quantidade de caracteres desenhados: 

                    <input 
                        type="number" 
                        id="inQntdCark"
                        placeholder="O padrão será 5"
                        className="border-1" 
                        onInput={alteraQntd}/>
                </label>

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

                <BtnGera funcao={gerarSenha} />

                <input 
                    type="text" 
                    id="inCNPJ" 
                    placeholder="O CNPJ vai aparecer aqui.." 
                    disabled={true}  
                    value={senhaGerada}
                    className="border-1"/>
            </main>
        </>
    )
}

export default GeraSenha