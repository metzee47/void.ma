import { IoIosCart } from "react-icons/io"
import StatItem from "../components/StatItem"
import "../styles/how-to-use.css"
import { IoExtensionPuzzleSharp, IoFileTrayFullOutline, IoGift, IoQrCodeOutline } from "react-icons/io5"

const HowToUseItem = ({ icon, title, description, count }) => {
    return (
        <div className={`how-to-use-item ${count <= 4 ? 'active' : 'inactive'}`}>
            <StatItem
                icon={icon}
                title={title}
                description={description}
                className={`${count <= 4 ? 'active' : 'inactive'}`}
            />
            <span>{count}</span>
        </div>
    )
}

export const HowToUse = () => {
    return (
        <div className="how-to-use-section section">
            <h1>Un parcours client simple et engageant</h1>
            <p>De l'achat du produit jusqu'à la réclamation en 5 étapes simples.</p>
            <div className="how-to-use-items">
                <HowToUseItem 
                    icon={<IoIosCart />}
                    title="Acheter"
                    description="Achetez votre produit"
                    count="1"
                />
                <HowToUseItem 
                    icon={<IoQrCodeOutline />}
                    title="Scanner"
                    description="Scannez le QR code"
                    count="2"
                />
                <HowToUseItem 
                    icon={<IoFileTrayFullOutline />}
                    title="Valider"
                    description="Validez votre achat"
                    count="3"
                />
                <HowToUseItem 
                    icon={<IoExtensionPuzzleSharp />}
                    title="Réclamer"
                    description="Réclamez votre prix"
                    count="4"
                />
                <HowToUseItem 
                    icon={<IoGift />}
                    title="Gagner"
                    description="Gagnez votre prix"
                    count="5"
                />
            </div>
        </div>
    )
}