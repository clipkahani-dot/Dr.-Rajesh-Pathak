import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import { faqs } from '../../data/faq'
import { WHATSAPP_URL } from '../../utils/constants'


export default function FAQ() {
  const [openId, setOpenId] = useState(1)

  const toggle = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
            ❓ अक्सर पूछे जाने वाले प्रश्न (FAQs)
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-hindi">
            आपके मन में सवाल? यहाँ हैं जवाब
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-3 font-hindi">
            ऑनलाइन होम्योपैथिक परामर्श और दवाइयों से संबंधित सामान्य प्रश्न
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((item) => {
            const isOpen = openId === item.id
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-emerald-300 bg-emerald-50/40 shadow-sm' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-gray-900 text-base sm:text-lg font-hindi">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-emerald-600 text-white rotate-180' : 'bg-gray-100 text-gray-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-6 sm:px-6 text-sm sm:text-base text-gray-700 font-hindi leading-relaxed border-t border-emerald-100/60 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center p-8 bg-gray-50 rounded-3xl border border-gray-200/80">
          <h4 className="text-lg font-bold text-gray-900 font-hindi">
            कोई अन्य सवाल है जो यहाँ नहीं मिला?
          </h4>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 font-hindi">
            हमारी मेडिकल टीम से WhatsApp पर तुरंत अपनी भाषा में बात करें
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-4 text-xs sm:text-sm py-3 px-6 shadow inline-flex items-center gap-2"
          >
            <WhatsAppIcon className="w-4 h-4" />
            WhatsApp पर सवाल पूछें
          </a>
        </div>

      </div>
    </section>
  )
}
