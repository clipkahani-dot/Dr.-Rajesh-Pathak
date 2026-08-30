import { motion } from 'framer-motion'

export default function SectionHeader({
  title,
  subtitle,
  badge,
  centered = true,
  light = false,
  className = '',
}) {
  return (
    <motion.div
      className={`mb-12 lg:mb-16 ${centered ? 'text-center' : ''} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      {badge && (
        <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
          light
            ? 'bg-white/15 text-white border border-white/25'
            : 'bg-primary-50 text-primary-700 border border-primary-200'
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-hindi leading-tight ${
        light ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg sm:text-xl max-w-3xl font-hindi leading-relaxed ${
          centered ? 'mx-auto' : ''
        } ${light ? 'text-white/80' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
