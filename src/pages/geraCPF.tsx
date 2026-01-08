import { useState } from "react";
import Header from "../components/Header/Header";
import BtnGera from "../components/Geradores/BtnGera";

function GeraCPF() {
    // CPF que será alterado conforme o usuário clica no botão..
    const [cpfGerado, setCpfGerado] = useState<string>('');

    // cria um CPF contendo números aleatórios..
    const gerarCPF = (): void => {
        // letras do CPF..
        let cpf = "";
        // números do CPF, para gerar os 2 últimos números
        let numsCpf: Array<number> = new Array<number>();

        // gera o CPF com números aleatórios..
        let auxLoop = 0;
        do {
            if(auxLoop == 3 || auxLoop == 7) { // pontos da frase do CPF
                cpf += ".";
            } else if(auxLoop == 11) { // traço do CPF
                cpf += "-"
            } else { // números do CPF
                // gera um número aleatório de 0 à 9
                const numAleatorio = Math.floor(Math.random() * 10);
                // insere o número aleatório no cpf
                cpf += numAleatorio;
                // adiciona o número nos números do CPF
                numsCpf.push(numAleatorio);
            }

            auxLoop++;
        }while(auxLoop <= 11);

        // CÁLCULO DO PRIMEIRO DÍGITO VERIFICADOR..
        // pesos necessários para calcular
        let pesos: Array<number> = new Array(10, 9, 8, 7, 6, 5, 4, 3, 2, 1);
        let produtoNums = 0; // produto usado para o cálculo
        
        for(let num in numsCpf) produtoNums += numsCpf[num] * pesos[num];
        // recebe o resto da divisão, para gerar o primeiro número
        let resto = produtoNums % 11;

        // insere o número com base no resultado do resto
        if(resto < 2) {
            cpf += 0;
            numsCpf.push(0);
        } else {
            cpf += 11 - resto;
            numsCpf.push(11 - resto);
        }

        // CÁLCULO DO SEGUNDO DÍGITO VERIFICADOR..
        pesos.unshift(11); // adiciona um peso novo
        produtoNums = 0;
        for(let num in numsCpf) produtoNums += numsCpf[num] * pesos[num];

        // novamente, o resto da divisão por 11..
        resto = produtoNums % 11;
        // insere conforme o resultado do resto
        resto < 2 ? cpf += 0 : cpf += 11 - resto;

        setCpfGerado(cpf); //altera o CPF
    }

    return (
        <>
            <Header />

            <main className="
                  flex 
                  gap-5
                  items-center
                  flex-col
                  mt-10">
                <h1> Gerar CPF </h1>

                <BtnGera funcao={gerarCPF}/>

                <input type="text" id="inCPF" placeholder="O CPF vai aparecer aqui.." disabled={true}  className="border-1" value={cpfGerado}/>
            </main>
        </>
    )
}

export default GeraCPF;