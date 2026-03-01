import { useEffect, useState } from "react";
import type { InputData } from "../../interfaces/InputData";

function InputGera(props: InputData){
    // Estado para controlar o texto do botão
    const [copiado, setCopiado] = useState<boolean>(false);

    // Efeito para resetar o botão sempre que a prop.value (senha) mudar
    useEffect(() => {
        setCopiado(false);
    }, [props.value]);

    // função para copiar o texto do input
    const copiarTexto = async () => {
        if(!props.value) return; // evita copiar texto vazio

        try {
            await navigator.clipboard.writeText(props.value)
                .then(() => setCopiado(true));
        }catch(erro){
            console.error("Erro ao copiar texto: ", erro);
        }
    }

    return (
        <div className="flex ">
            <input 
                type="text" 
                disabled={true}
                id={props.id}
                placeholder={props.placeholder}
                value={props.value}
                className="
                    h-full
                    pl-3
                    border-1
                    border-red-600"/>
            <button className="
                h-full
                pl-1 pr-2
                font-bold text-lg text-white
                cursor-pointer
                rounded-r-lg
                opacity-75
                bg-red-600
                
                duration-150
                ease-in-out
                hover:opacity-100"
                onClick={copiarTexto}>
                { copiado ? "Copiado!" : "Copiar" }
            </button>
        </div>
    )
}

export default InputGera;