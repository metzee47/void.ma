import StatItem from "../components/StatItem"
import { STATS } from "../constants/stat"
import '../styles/stat.css'

export const Stat = () => {
    return (
        <div className="stat-section section">
            {
                STATS.map((stat, index) => (
                    <StatItem 
                        key={index} 
                        icon={<stat.icon/>}
                        title={stat.title} 
                        description={stat.description}
                    />
                ))
            }
        </div>
    )
}