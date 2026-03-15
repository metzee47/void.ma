import { GoLightBulb } from "react-icons/go"
import { Button } from "../components/Button"
import { MdQrCode } from "react-icons/md"
import { IoGift } from "react-icons/io5"
import "../styles/content-header.css"
import { SlArrowRight } from "react-icons/sl"

const StatItem = ({ label, value, valueColor }) => {
    return (
        <div className="header-stat-item">
            <h2 className={`${valueColor}`}>{value}</h2>
            <p>{label}</p>
        </div>
    )
}


const MobileAppView = () => {
    
    const EmptyCard = () => (
        <div className="empty-card"/>
    )

    const NavItem = ({label}) => (
        <div className="nav-item">
            <div/>
            <p>{label}</p>
        </div>
    )

    const AbsoluteCard = ({icon, label, description, className}) => (
        <div className={`absolute-card ${className}`}>
            <div className="icon-wrapper">
                {icon}
            </div>
            <div className="text-container">
                <h5>{label}</h5>
                <p>{description}</p>
            </div>
        </div>
    )
    return (
    
    <div className="mobile-view-container">
        <header className="mobile-view-header">
            <p>ALBUM DIGITAL 2025</p>
            <h1>Ma collection</h1>
            <div className="stat-wrapper">
                <StatItem label="Cartes" value="127" valueColor="text-white" />
                <StatItem label="Complet" value="76%" valueColor="text-white" />
                <StatItem label="Rang" value="#12" valueColor="text-white" />
            </div>
            <AbsoluteCard 
                icon={<MdQrCode />}
                label="Scan QR code"
                description="Débloquer une carte"
                className="scan-qr-card"
            />
        </header>
        <main>
            <div className="cards-wrapper">
                <EmptyCard />
                <EmptyCard />
                <EmptyCard />
                <EmptyCard />
                <EmptyCard />
                <EmptyCard />
            </div>
        </main>

        <footer>
            <AbsoluteCard 
                className="rewards-card"
                icon={<IoGift />}
                label="Recompense"
                description="Tirage hebdomadaire"
            />

            <div className="nacs-wrapper">
                <NavItem label="Scanner"/>
                <NavItem label="Echange"/>
                <NavItem label="Profil"/>
            </div>
        </footer>
    </div>
    )
}
    
    

export const ContentHeader = () => {
    return (
        <header className="content-header section">
            <div className="left-side">
                <h1>Transformez chaque <span>produit</span> en experience de jeu</h1>
                <p>YouCanWin connecte vos marques aux fans de football à travers des mécaniques de gamification innovantes. <strong>Codes QR, cartes digitales, défis et récompenses.</strong></p>
                <div className="stats-wrapper">
                    <StatItem label="Partenaires" value="150+" valueColor="text-[var(--high-green)]" />
                    <StatItem label="Utilisateurs actifs" value="50K+" valueColor="text-[var(--red)]" />
                    <StatItem label="Pays couverts" value="12" valueColor="text-[var(--high-green)]" />
                </div>

                <div className="buttons-wrapper">
                    <Button>
                        <span>Voir la demo</span>
                        <SlArrowRight />
                    </Button>
                    <Button bg="bg-[var(--white)]" text="text-[var(--light-blue)]" className=" border border-[#CBD5E1] font-bold">
                        <GoLightBulb />
                        <span>Comment ça marche</span>
                    </Button>

                </div>

                <div className="footer-wrapper">
                    <p>ILS NOUS FONT CONFIANCE</p>
                    <div className="">
                        <span>Maroc Telecom</span>
                        <span>Orange</span>
                        <span>Inwi</span>
                        <span>Carrefour</span>
                    </div>
                </div>
            </div>

            <div className="right-side">
                <MobileAppView />
            </div>
        </header>
    )
}

