
import { SERVICES } from "../constants/service";
import { IoIosSettings } from "react-icons/io";
import StatItem from "../components/StatItem";
import { Button } from "../components/Button";
import "../styles/service.css";
import { SlArrowRight } from "react-icons/sl";


export const Service = () => {
    return (
        <div className="service-section section">
            <div className="back-office">
                <IoIosSettings />
                <span>Back-office tout-en-un</span>
            </div>
            <h1>Un parcours client simple et engageant</h1>
            <p>De l'achat du produit jusqu'à la réclamation en 5 étapes simples.</p>
            <div className="service-items">
                {SERVICES.map((service, index) => (
                    <StatItem
                        key={index}
                        icon={<service.icon/>}
                        title={service.title}
                        description={service.description}
                        className="service-item"
                    />
                ))}
            </div>

            <Button>
                <span>Demander un acces au back-office</span>
                <SlArrowRight />
            </Button>
        </div>
    )
}