import "../styles/catalog.css"
import albumImg from "../assets/album-de-collection-digitale.png"
import quizImg from "../assets/quiz-football.png"
import tombolaImg from "../assets/tombola-digitale.png"
import predictionsImg from "../assets/predictions.png"
import { SlArrowRight } from "react-icons/sl"

const CatalogItem = ({ title, description, imgSrc, star = false, soon = false }) => {
    return (
        <div className="catalog-item">
            {
                star || soon ? (
                    <span className={`${star ? 'star' : soon ? 'soon' : ''} catalog-badge`}>
                        {star ? 'star' : 'bientot'}
                    </span>
                ) : null
            }
            <div className="img-wrapper">
                <img src={imgSrc} alt={title} />
            </div>
            <div className="text-wrapper">
                <h6>{title}</h6>
                <p>{description}</p>
                <button>
                    <span>Decouvrir</span>
                    <SlArrowRight />
                </button>
            </div>
            
        </div>
    )
}

export const Catalog = () => {
    return (
        <div className="catalog-section section">
                <h1>Catalogue de jeux</h1>
                <p>Des mécaniques éprouvées pour engager vos audiences</p>
            <div className="catalog-items">
                <CatalogItem 
                    title="Album digital 2025"
                    description="Collection de cartes avec échanges et défis."
                    imgSrc={albumImg}
                    star
                />
                <CatalogItem 
                    title="Quiz football"
                    description="Questions sur l'actualité et l'histoire du foot."
                    imgSrc={quizImg}
                    soon
                />
                <CatalogItem 
                    title="Tombola digitale"
                    description="Tirages au sort avec lots sponsorisés."
                    imgSrc={tombolaImg}
                />
                <CatalogItem 
                    title="Prédictions de matchs"
                    description="Prédictions de matchs et classements."
                    imgSrc={predictionsImg}
                />
            </div>
        </div>
    )
}