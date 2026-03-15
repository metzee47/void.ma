import { FaArrowTrendUp } from "react-icons/fa6"
import { SlEnergy } from "react-icons/sl"
import { Button } from "../components/Button"
import { FORMULAS, FORMULAS_SERVICE } from "../constants/formula"
import StatItem from "../components/StatItem"
import { FaCheck, FaVolleyballBall } from "react-icons/fa"
import "../styles/formula.css"
import { IoMdCheckmark } from "react-icons/io"

const FormulaItem = ({type, services, name, description, isPopular}) => {

    const CheckedItem = ({label}) => {
        return (
            <div className="checked-item">
                <IoMdCheckmark />
                <span>{label}</span>
            </div>
        )
    }

    return (
        <div className={`formula-item ${isPopular ? 'popular' : 'unpopular'}`}>
            {isPopular && (
                <div className="popular-badge">
                    <span>Populaire</span>
                </div>
            )}
            <header className="formula-item-header">
                <div className="icon-wrapper">
                    {type === 'Scale' ? (
                        <FaArrowTrendUp />
                    ) : type === 'Starter' ? (
                        <SlEnergy/>
                    ) : <FaVolleyballBall />}
                </div>
                <div className="type-name-text">
                    <h6>{type}</h6>
                    <p>{name}</p>
                </div>
                <p>{description}</p>
            </header>
            <p className="tarif-text">Tarification sur mesure selon vos volumes</p>
            <div className="checked-items">
                {services.map((service) => (
                    <CheckedItem key={service} label={service} />
                ))}
            </div>

            <Button
                className={isPopular ? 'popular' : 'un-popular'}    
            >
                {type === 'Scale' ? "Publiez un demo" : type === 'Enterprise' ? 'Contactez-nous' : 'Demander un devis'}
            </Button>
        </div>
    )
}


export const Formula = () => {
    return (
        <div className="formula-section section">
            <header>
                {FORMULAS_SERVICE.map((service, index) => (
                    <StatItem
                        key={index}
                        icon={<service.icon />}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </header>
            <main>
                <h1>Des formules adaptées à votre échelle</h1>
                <p>Choisissez la solution qui correspond à vos besoins et votre ambition</p>
                <div className="formulas-items">

                    {
                        FORMULAS.map((formula) => (
                            <FormulaItem
                                key={formula.type}
                                type={formula.type}
                                services={formula.services}
                                name={formula.name}
                                description={formula.description}
                                isPopular={formula.isPopular}
                            />
                        ))
                    }
                </div>
            </main>
        </div>
    )
}