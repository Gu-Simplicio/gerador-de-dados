function BtnGera( props: { funcao: Function } ) {

    return <button className="
                            py-1 px-3
                            text-xl text-white font-bold
                            opacity-75
                            rounded-full
                            cursor-pointer
                            bg-red-600
                            shadow-[2px_2px_10px_#000]

                            duration-150
                            ease-in-out
                            hover:opacity-100
                            hover:text-white
                            hover:shadow-[5px_5px_10px_#000]"
                            onClick={ () => props.funcao()}>
                Gerar
            </button>
}

export default BtnGera;