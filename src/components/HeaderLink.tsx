// define os dados que o link do header vai receber
interface HeaderLink {
    url: string, // caminho que o link vai levar
    txt: string // texto que o link vai exibir
}

function HeaderLink(props: HeaderLink){
    const style: string = "text-blue-500 hover:text-blue-600 hover:underline";

    return (
        <a href={props.url} className={style}>
            { props.txt }
        </a>
    )
}

export default HeaderLink;