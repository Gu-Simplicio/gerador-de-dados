import { useState } from "react";
import BtnGera from "../components/Geradores/BtnGera"
import Header from "../components/Header/Header"    
import InputGera from "../components/Geradores/InputGera";

const ALFABETO = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 'q', "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const NUMEROS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const SIMBOLOS = ["!", "@", "#", "$", "&", "_", "-", "/", "?"];

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
        const configSenha = {
            qntdCaracteres: qntdCaracteres == 0 ? 5 : qntdCaracteres,
            carEspecial: carEspecial,
            numeros: contemNum
        }; 

        // caracteres da senha
        let carSenha: Array<string> = new Array<string>();

        // INSERE O ALFABETO NA SENHA
        ALFABETO.forEach(a => {
            // gera um número aleatório entre 0 e 1
            const numChecagem = Math.floor(Math.random() * 2);
            // determina se a letra estará em maiúsculo ou minúsculo
            const letra = numChecagem == 1 ? a.toUpperCase() : a;

            carSenha.push(letra);
        }) 

        // CASO A SENHA CONTENHA CARACTERES ESPECIAIS
        if(configSenha.carEspecial) {
            SIMBOLOS.forEach(s => {
                carSenha.push(s);
            });
        }

        // CASO A SENHA CONTENHA NÚMEROS
        if(configSenha.numeros) {
            NUMEROS.forEach(n => {
                carSenha.push(n);
            });
        }

        // CRIAÇÃO DA SENHA
        let novaSenha: string = "";
        for(let i = 0; i < configSenha.qntdCaracteres; i++) {
            // gera um index aleatório para pegar um item do array
            const index = Math.floor(Math.random() * carSenha.length);

            novaSenha += carSenha[index];
        }
    
        setSenhaGerada(novaSenha);
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

                <h1> Gerar senha </h1>

                <div className="
                        flex gap-10">
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
                    flex justify-center gap-10">
                    <BtnGera funcao={gerarSenha} />

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