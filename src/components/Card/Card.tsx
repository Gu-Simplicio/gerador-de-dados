// dados recebidos no elemento do Card
interface CardData {
    title: string, //título do card
    text: string, //texto principal do card
    btnUrl: string, // URL do botão do card
    btnTxt: string // texto do botão
}

function Card( props: CardData ){
    return (
        <div className="
                max-w-95/100
                p-2 
                rounded-md
                border
                border-black
                shadow-xl">
            
            { /* título do card */ }
            <h2 className="
                    text-2xl
                    font-bold"> {props.title} </h2>

            { /* texto principal */ }
            <p className="
                    my-2
                    px-2
                    indent-4">
                {props.text}
            </p>

            { /* botão do card */ }
            <a href={props.btnUrl} className="
                                        py-1
                                        px-3
                                        text-lg
                                        rounded-full
                                        text-white
                                        bg-red-700
                                        opacity-75

                                        duration-150
                                        ease-in-out
                                        hover:opacity-100
                                        hover:shadow-xl">
                { props.btnTxt }
            </a>
        </div>
    )
}

export default Card;