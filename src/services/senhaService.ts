// configurações globais para senhas
const ALFABETO = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 'q', "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const NUMEROS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const SIMBOLOS = ["!", "@", "#", "$", "&", "_", "-", "/", "?"];

export default function gerarSenha(qntdCaracteres: number, carEspecial: boolean, contemNum: boolean): string {
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

    return novaSenha;
}