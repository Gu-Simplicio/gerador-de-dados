// dados recebidos no elemento do Card
interface CardData {
    title: string, //título do card
    text: string, //texto principal do card
    btnUrl: string, // URL do botão do card
    btnTxt: string // texto do botão
}

function Card( props: CardData ){
    return (
        <div>
            <h2> {props.title} </h2>

            <p>
                {props.text}
            </p>

            <a href={props.btnUrl}>
                { props.btnTxt }
            </a>
        </div>
    )
}

export default Card;