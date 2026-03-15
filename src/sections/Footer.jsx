import { LuShieldCheck } from "react-icons/lu"
import Logo from "../components/Logo"
import '../styles/footer.css'
import { RiInstagramLine, RiTwitterXFill } from "react-icons/ri"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"

export const Footer = () => {
    const SocialLinkItem = ({ icon, href }) => {
        return (
            <a href={href || "#"} target="_blank" className="social-link-item">
                {icon}
            </a>
        )
    }
    return (
        <footer className="main-footer section">
            <div className="top-part">
                <div className="left-part">
                    <Logo renderGamesText={false} />
                    <p>Plateforme de jeux digitaux pour engager vos communautés autour du football. Un service d'Agency.Africa.</p>
                    <div className="social-links">
                        <SocialLinkItem icon={<FaLinkedinIn />} href="#" />
                        <SocialLinkItem icon={<RiInstagramLine />} href="#" />
                        <SocialLinkItem icon={<FaFacebookF />} href="#" />
                        <SocialLinkItem icon={<RiTwitterXFill />} href="#" />
                    </div>
                </div>

                <div className="right-part">
                    <div className="footer-links">
                        <h6>Liens utiles</h6>
                        <div className="footer-links">
                            <a href="#">Nos offres</a>
                            <a href="#">Nos services</a>
                            <a href="#">Nos partenaires</a>
                            <a href="#">A propos</a>
                        </div>
                    </div>
                    <div className="legal-links">
                        <h6>Contact & Légal</h6>
                        <div className="legal-links">
                            <a href="#">games@metzee.com</a>
                            <a href="#">Mentions légales</a>
                            <a href="#">Politique de confidentialité</a>
                            <a href="#">Protection des données</a>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="bottom-part">
                <div className="first-part">
                    <p>© 2025 Youcanwin. Tous droits réservés.</p>
                    <p>Un service de <a href="https://agency.africa" target="_blank" rel="noopener noreferrer">Agency.Africa</a> games.agency-africa</p>
                </div>
                <div className="last-part solution">
                    <LuShieldCheck />
                    <p>Site conforme CNDP Maroc</p>
                </div>
            </div>
        </footer>
    )
}