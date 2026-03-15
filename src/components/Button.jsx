
import "../styles/components.css"

export const Button = ({ children, label, text = "text-white", bg = "bg-gradient-to-r from-[var(--high-green)] to-[var(--low-green)]", className = "" }) => {
    return (
        <button 
            className={
                `main-btn ${bg} ${text} ${className}`
            }
        >
            {label || children}
        </button>
    )
}