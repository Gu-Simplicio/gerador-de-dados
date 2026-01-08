function BtnGera( props: { funcao: Function } ) {

    /*
        py-1
        px-2
        cursor-pointer
        text-white
        font-bold
        bg-red-500
        duration-300
        ease-in
        hover:rounded-full
    */

    return <button className="
                            px-3
                            py-1
                            text-xl
                            opacity-75
                            rounded-xl
                            cursor-pointer
                            bg-sky-400
                            hover:opacity-100
                            hover:bg-sky-500
                            hover:text-white"
                            onClick={ () => props.funcao()}>
                Gerar
            </button>
}

export default BtnGera;