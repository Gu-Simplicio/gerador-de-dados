function BtnGera( props: { funcao: Function } ) {

    return <button className="
                            py-1
                            px-2
                            cursor-pointer
                            text-white
                            font-bold
                            bg-red-500
                            duration-300
                            ease-in
                            hover:rounded-full"
                            onClick={ () => props.funcao()}>
                Gerar
            </button>
}

export default BtnGera;