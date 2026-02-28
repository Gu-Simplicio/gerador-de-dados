import type { InputData } from "../../interfaces/InputData";

function InputGera(props: InputData){
    return (
        <input 
            type="text" 
            disabled={true}
            id={props.id}
            placeholder={props.placeholder}
            value={props.value}
            className="border-1"/>
    )
}

export default InputGera;