import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import { WHATSAPP_URL, DOCTOR_NAME, CONSULTATION_FEE } from '../../utils/constants'

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip Popup */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="bg-white rounded-2xl p-3.5 shadow-2xl border border-emerald-100 max-w-xs relative text-left"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full flex items-center justify-center text-xs shadow transition"
              aria-label="Close message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-start gap-2.5">
              <div className="w-9 h-9 flex-shrink-0 mt-0.5">
                <WhatsAppIcon className="w-full h-full drop-shadow-sm" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900 leading-tight">
                  Dr. Rajesh Pathak की टीम
                </p>

                <p className="text-[11px] text-gray-600 mt-0.5 leading-snug font-hindi">
                  नमस्ते! क्या आपको किसी बीमारी के लिए परामर्श चाहिए? WhatsApp पर बात करें ({CONSULTATION_FEE})
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Pulse Button using the User's exact 3D WhatsApp icon */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl whatsapp-pulse relative group transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <img 
          src="/images/icons/whatsapp.webp" 
          alt="WhatsApp Chat" 
          className="w-full h-full object-contain drop-shadow-xl"
        />
        <span className="sr-only">WhatsApp Consultation</span>
      </motion.a>
    </div>
  )
}
