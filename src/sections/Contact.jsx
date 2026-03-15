import { FaEnvelope } from "react-icons/fa"
import { IoCalendarOutline } from "react-icons/io5"
import { Button } from "../components/Button"
import '../styles/contact.css'

export const Contact = () => {
    return (
        <div className="contact-section section">
            <h1>Prêt à transformer votre marketing ?</h1>
            <p>Rejoignez les marques qui engagent leurs fans avec YouCanWin</p>
            <div className="buttons-wrapper">
                <Button bg="bg-[var(--white)]" text="text-[var(--red)]" className="font-medium py-4">
                    <IoCalendarOutline />
                    <span>Planifier une demo gratuite</span>
                </Button>

                <Button
                    bg="bg-[white]/10"
                    className="border-[white]/30 border-[2px] py-4 font-medium"
                >
                    <FaEnvelope />
                    <span>Nous contacter</span>
                </Button>
            </div>
        </div>
    )
}