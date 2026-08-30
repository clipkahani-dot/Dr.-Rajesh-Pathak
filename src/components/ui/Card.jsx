import { motion } from 'framer-motion'

export default function Card({
  children,
  className = '',
  hover = false,
  elevated = false,
  padding = 'p-6',
  animate = false,
  delay = 0,
  ...props
}) {
  const baseClass = `${elevated ? 'card-elevated' : 'card'} ${hover ? 'card-hover' : ''} ${padding} ${className}`

  if (animate) {
    return (
      <motion.div
        className={baseClass}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className={baseClass} {...props}>
      {children}
    </div>
  )
}
