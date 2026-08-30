import { motion } from 'framer-motion'

const variants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  whatsapp: 'btn-whatsapp',
  ghost: 'inline-flex items-center justify-center gap-2 px-6 py-3 text-gray-600 hover:text-primary-700 hover:bg-gray-50 rounded-xl font-semibold transition-all duration-200',
  outline: 'inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white rounded-xl font-semibold transition-all duration-200 border-2 border-white/30 hover:border-white hover:bg-white/10',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  icon: Icon,
  iconRight: IconRight,
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  const baseClass = `${variants[variant]} ${size === 'lg' ? 'btn-lg' : ''} ${className}`

  const content = (
    <>
      {Icon && <Icon className="w-5 h-5" />}
      {children}
      {IconRight && <IconRight className="w-5 h-5" />}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={baseClass}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={baseClass}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  )
}
