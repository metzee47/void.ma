const StatItem = ({ icon, title, description, className }) => {
    return (
        <div className={`stat-item ${className}`}>
            <div className={`icon-wrapper`}>
                {icon}
            </div>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    )
}

export default StatItem;
