import Header from "../components/Header/Header"

function GeraSenha() {
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
                            onClick={() => { alert("Hello, world") }}>
                    Gerar:  
                </button>

                <input 
                    type="text" 
                    id="inCNPJ" 
                    placeholder="O CNPJ vai aparecer aqui.." 
                    disabled={true}  
                    value={"cnpjGerado"}
                    className="border-1"/>
            </main>
        </>
    )
}

export default GeraSenha