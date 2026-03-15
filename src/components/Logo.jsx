import { IoMdTrophy } from "react-icons/io"

const Logo = ({renderGamesText = true}) => (
    <div className="logo-wrapper">
        <div className="icon-wrapper">
            <IoMdTrophy />
        </div>
        <div className="you-can-win">
            <span>You</span>
            <span>can</span>
            <span>win</span>
        </div>
        {
            renderGamesText && (
                <div className="games-text">
                    <span>Games</span>
                </div>
            )
        }
    </div>
)

export default Logo