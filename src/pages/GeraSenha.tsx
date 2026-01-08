import BtnGera from "../components/Geradores/BtnGera"
import Header from "../components/Header/Header"

function GeraSenha() {
    const gerarSenha = (): void => {
        alert("Teste");;
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

                <BtnGera funcao={gerarSenha} />

                <input 
                    type="text" 
                    id="inCNPJ" 
                    placeholder="O CNPJ vai aparecer aqui.." 
                    disabled={true}  
                    value={""}
                    className="border-1"/>
            </main>
        </>
    )
}

export default GeraSenha