import { CiCircleCheck } from "react-icons/ci"
import { MdOutlineDateRange } from "react-icons/md"
import { Button } from "../components/Button"
import "../styles/description.css"
import ballImg from "../assets/ball.png"

const RightSideItem = ({ label, description, icon }) => {
    return (
        <div className="right-side-item">
            <div className="icon-wrapper">
                {icon}
            </div>
            <div className="text-container">
                <h6>{label}</h6>
                <p>{description}</p>
            </div>
        </div>
    )
}

export const Description = () => {

    return (
        <div className="description-section section">
            <div className="img-part">
                <img src={ballImg} alt="description" />
            </div>
            <div className="right-part">
                <div className="">

                    <div className="solution">
                        <CiCircleCheck />
                        <span>Solution complète</span>
                    </div>
                    <h1>Le terrain de jeu digital de votre marque</h1>
                </div>
                <p>YouCanWin transforme vos produits en expériences interactives. Chaque achat devient une opportunité d'engagement avec vos consommateurs.</p>

                <div className="right-side-items">
                    <RightSideItem 
                        label="Activation instantanée" 
                        description="QR codes uniques sur chaque produit" 
                        icon={<CiCircleCheck />}
                    />
                    <RightSideItem  
                        label="Collection digitale" 
                        description="Expérience unique à chaque achat" 
                        icon={<CiCircleCheck />}
                    />
                    <RightSideItem 
                        label="Récompenses exclusives" 
                        description="Tickets, lots et avantages" 
                        icon={<CiCircleCheck />}
                    />
                    <RightSideItem 
                        label="Analytics avancés" 
                        description="Suivi en temps réel de l'engagement" 
                        icon={<CiCircleCheck />}
                    />
                </div>

                <Button bg="bg-[var(--red)]">
                    <span>Planifier une démo</span>
                    <MdOutlineDateRange />
                </Button>
            </div>
        </div>
    )
}