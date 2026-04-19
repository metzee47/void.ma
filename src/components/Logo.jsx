import { FaAppStoreIos } from "react-icons/fa"

const Logo = ({renderGamesText = true}) => (
    <div className="logo-wrapper">
        <div className="icon-wrapper">
            <FaAppStoreIos />
        </div>
        <div className="you-can-win">
            <span>Demo</span>
            <span>App</span>
            <span>Void</span>
        </div>
        {
            renderGamesText && (
                <div className="games-text">
                    <span>Test</span>
                </div>
            )
        }
    </div>
)

export default Logo