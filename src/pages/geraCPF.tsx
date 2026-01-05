import { useState } from "react";
import Header from "../components/Header/Header";

function GeraCPF() {
    // CPF que será alterado conforme o usuário clica no botão..
    const [cpfGerado, setCpfGerado] = useState<string>('');

    // cria um CPF contendo números aleatórios..
    const gerarCPF = (): string => {
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
        let auxCalculo = 10; // número auxiliar para calcular
        let produtoNums = 0; // produto usado para o cálculo
        for(let num in numsCpf){
            produtoNums += numsCpf[num] * auxCalculo;
            auxCalculo--;
        }
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
        auxCalculo = 11;
        produtoNums = 0;
        for(let num in numsCpf){
            produtoNums += numsCpf[num] * auxCalculo;
            auxCalculo--;
        }

        // novamente, o resto da divisão por 11..
        resto = produtoNums % 11;
        // insere conforme o resultado do resto
        resto < 2 ? cpf += 0 : cpf += 11 - resto;

        return cpf;
    }

    // função para pegar um CPF aleatório válido
    const novoCpfValido = () => {
        //CPF que será gerado
        let cpf: string = gerarCPF();

        setCpfGerado(cpf);
        console.log("Teste: ", cpf);
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

                <button className="
                            py-1
                            px-2
                            cursor-pointer
                            text-white
                            font-bold
                            bg-red-500
                            duration-300
                            ease-in
                            hover:rounded-full"
                            onClick={ () => novoCpfValido()}>
                    Gerar:
                </button>

                <input type="text" id="inCPF" placeholder="O CPF vai aparecer aqui.." disabled={true}  className="border-1" value={cpfGerado}/>
            </main>
        </>
    )
}

export default GeraCPF;