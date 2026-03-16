// função que gera um novo CNPJ 
export default function gerarCNPJ(): string {
    // letras do CNPJ
    let cnpj: string = "";
    // números do CNPJ, serão usados para gerar os últimos números
    let numsCnpj: Array<number> = new Array<number>();

    let auxLoop = 0;
    do{
        if(auxLoop == 2 || auxLoop == 6) {                
            cnpj += ".";
        } else if (auxLoop == 10) { 
            cnpj += "/";
        } else {
            // gera um número aleatório entre 0 e 9
            const numAleatorio = Math.floor(Math.random() * 10);

            cnpj += numAleatorio;
            numsCnpj.push(numAleatorio);
        }

        auxLoop++;
    }while( auxLoop <= 10 );
    //insere o valor padrão após a /
    cnpj += "0001-";
    numsCnpj.push(0, 0, 0, 1); // insere os últimos 4 números anteriores aos dígitos verificadores
    
    // CÁLCULO DO PRIMEIRO DÍGITO VERIFICADOR
    let somaProdutos = 0; // soma dos resultados dos cálculos necessários
    let pesos: Array<number> = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]; // pesos usados nos cálculos
    
    // executa a soma dos produtos..
    for(let num in numsCnpj) somaProdutos += numsCnpj[num] * pesos[num];

    let resto = somaProdutos % 11;
    
    if(resto < 2){
        cnpj += 0;
        numsCnpj.push(0);
    } else {
        cnpj += 11 - resto;
        numsCnpj.push(11 - resto);
    }

    // CÁLCULO DO SEGUNDO DÍGITO VERIFICADOR..
    somaProdutos = 0;
    pesos.unshift(6); //adiciona um peso no array de pesos
    
    //executa a soma dos produtos
    for(let num in numsCnpj) somaProdutos += numsCnpj[num] * pesos[num];

    resto = somaProdutos % 11;

    resto < 2 ? cnpj += 0 : cnpj += 11 - resto;

    return cnpj;
}