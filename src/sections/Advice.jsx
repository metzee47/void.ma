
import { SlEnergy } from "react-icons/sl"
import "../styles/advice.css"
import { FaHeart } from "react-icons/fa"
import { IoAnalyticsSharp } from "react-icons/io5"
import { CiHeart } from "react-icons/ci"

const AdviceItem = ({ title, description, icon }) => {
    return (
        <div className="advice-item">
            <div className="icon-wrapper">
                {icon}
            </div>
            <h6>{title}</h6>
            <p>{description}</p>
        </div>
    )
}

export const Advice = () => {
    return (
        <div className="advice-section section">
            <h1>Transformez vos ventes en expérience mémorable</h1>
            <p>YouCanWin offre à vos clients plus qu'un produit : une expérience interactive complète autour du football</p>
            <div className="advice-items">
                <AdviceItem 
                    title="Augmentez vos ventes"
                    description="Les clients passent plus de temps dans votre boutique, ce qui augmente les ventes"
                    icon={<SlEnergy />}
                />
                <AdviceItem 
                    title="Fidélisez vos clients"
                    description="Les clients reviennent pour participer aux jeux et gagner des prix"
                    icon={<CiHeart />}
                />
                <AdviceItem 
                    title="Créez une ambiance festive"
                    description="L'ambiance festive de la boutique attire de nouveaux clients"
                    icon={<IoAnalyticsSharp />}
                />
            </div>
        </div>
    )
}