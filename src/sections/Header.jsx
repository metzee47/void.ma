import Logo from "../components/Logo"
import { Button } from "../components/Button"
import "../styles/header.css"
import { SlArrowRight } from "react-icons/sl"
import { RxHamburgerMenu } from "react-icons/rx"

export const Header = ({isMenuOpen, toggleMenu}) => {
    
    return (
        <header className={`main-header section ${isMenuOpen ? 'active' : ''}`}>
            <Logo />

            <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
                <div className="hamburger" onClick={toggleMenu}>
                    <RxHamburgerMenu />
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Nos offres</li>
                        <li>Nos jeux</li>
                        <li>Album 2025</li>
                        <li>A propos</li>
                    </ul>
                    <Button>
                        <span> Demander une demo</span>
                        <SlArrowRight />
                    </Button>
                </div>
            </nav>


        </header>
    )
}