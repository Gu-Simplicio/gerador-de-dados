function TituloPag(props: {titulo: string}){
    return (
        <h1 className="
            font-bold text-2xl">
            Gerar { props.titulo }
        </h1>
    )
}

export default TituloPag;