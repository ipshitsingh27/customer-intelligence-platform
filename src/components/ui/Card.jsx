export default function Card({ children, className = '', glow = false, ...props }) {
  return (
    <div
      className={`glass rounded-2xl shadow-card ${glow ? 'shadow-glow' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
