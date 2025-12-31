import HeaderLink from "./HeaderLink";

function Header() {
    return (
        <header className="
            fixed 
            top-0 
            left-0 
            right-0 
            px-3
            py-1
            flex 
            justify-between
            shadow">
            <a href="/">
                Gerador de dados
            </a>

            <ul className="
                flex
                gap-3">
                <li>
                    <HeaderLink 
                        url="/"
                        txt="Teste"/>
                </li>
            </ul>
        </header>
    )
}

export default Header;