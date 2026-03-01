function BtnGera( props: { funcao: Function } ) {

    return <button className="
                            py-1 px-3
                            text-xl text-white font-bold
                            opacity-75
                            rounded-full
                            cursor-pointer
                            bg-red-600

                            duration-150
                            ease-in-out
                            hover:opacity-100
                            hover:text-white"
                            onClick={ () => props.funcao()}>
                Gerar
            </button>
}

export default BtnGera;