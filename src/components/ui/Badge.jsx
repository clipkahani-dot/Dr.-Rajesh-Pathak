export default function Badge({ children, variant = 'primary', className = '' }) {
  const styles = {
    primary: 'bg-primary-50 text-primary-700 border-primary-200',
    accent: 'bg-accent-50 text-accent-700 border-accent-200',
    success: 'bg-green-50 text-green-700 border-green-200',
    info: 'bg-blue-50 text-blue-700 border-blue-200',
    white: 'bg-white/15 text-white border-white/25',
    dark: 'bg-gray-100 text-gray-700 border-gray-200',
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full border ${styles[variant]} ${className}`}>
      {children}
    </span>
  )
}
