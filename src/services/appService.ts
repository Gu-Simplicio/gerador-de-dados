export default async function getCards(): Promise<any> {
    try {
        const response = await fetch('/.json', {
            headers: { // define que aceitará um json como resposta
            Accept: "application/json"
            }
        });

        // caso a requisição falhe
        if(!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
    
        //responsta transformada em JSON
        const resJson = await response.json();

        // validação..
        if(resJson && Array.isArray(resJson.data)){
            return resJson.data;
        } else {
            throw new Error("Formato de JSON inválido: 'data' não é um array")
        }
    } catch(erro){
        console.error("Falha ao carregar cards: ", erro);
        return [];
    }
}
