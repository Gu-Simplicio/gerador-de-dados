import type { CardData } from "../../interfaces/CardData";

function Card( props: CardData ){
    return (
        <div className="
                lg:w-25/100 md:w-50/100 w-80/100
                py-3 px-5
                flex flex-col
                border
                rounded-2xl">
            
            { /* título do card */ }
            <h2 className="
                    text-2xl
                    font-bold"> {props.title} </h2>

            { /* texto principal */ }
            <p className="
                    w-75/100
                    my-2 px-2
                    self-end
                    text-right
                    indent-4">
                {props.text}
            </p>

            { /* botão do card */ }
            <a href={props.btnUrl} className="
                                        py-1 px-3
                                        self-end
                                        text-lg font-bold
                                        rounded-full
                                        text-white
                                        bg-red-700
                                        opacity-75
                                        shadow-[2px_2px_10px_#000]

                                        duration-150
                                        ease-in-out
                                        hover:opacity-100
                                        hover:shadow-[5px_5px_10px_#000]">
                { props.btnTxt }
            </a>
        </div>
    )
}

export default Card;