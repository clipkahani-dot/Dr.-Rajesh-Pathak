import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Sparkles, Search, CheckCircle2 } from 'lucide-react'
import WhatsAppIcon from '../ui/WhatsAppIcon'


import { services, serviceCategories } from '../../data/services'
import { WHATSAPP_URL, DOCTOR_NAME } from '../../utils/constants'

export default function Specializations() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredServices = services.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory
    const matchesSearch = 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.nameHi.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 mb-3">
            🩺 20+ विशेषज्ञताएं (Our 20 Key Specializations)
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 font-hindi">
            हमारी मुख्य 20 विशेषज्ञताएं
          </h2>
          <p className="text-base sm:text-lg text-emerald-800 font-hindi font-bold mt-2">
            इन 20 गंभीर एवं पुरानी बीमारियों का सुरक्षित व सफल होम्योपैथिक उपचार
          </p>

        </div>

        {/* Search & Category Filter Bar */}
        <div className="mb-10 space-y-4">
          
          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="अपनी बीमारी खोजें (Search disease e.g. Asthma, Piles, Cervical)..."
              className="w-full pl-12 pr-4 py-3.5 bg-white rounded-2xl border border-gray-200 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition font-hindi"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 bg-gray-100 px-2 py-1 rounded-md"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 font-hindi ${
                  activeCategory === cat.id
                    ? 'bg-emerald-700 text-white shadow-md scale-105'
                    : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-800 border border-gray-200 shadow-sm'
                }`}
              >
                {cat.nameHi}
              </button>
            ))}
          </div>

        </div>

        {/* 20 Diseases Grid with Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredServices.map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  className={`bg-white rounded-3xl p-6 border-2 ${item.border} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1`}
                >
                  <div>
                    {/* Top Icon & Number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center group-hover:scale-110 transition shadow-md border ${item.border}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-extrabold text-gray-400 font-mono">
                        #{item.id < 10 ? `0${item.id}` : item.id}
                      </span>
                    </div>
                    
                    {/* Disease Names */}
                    <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 font-hindi leading-snug">
                      {item.nameHi}
                    </h3>
                    <span className="text-xs font-bold text-gray-600 uppercase tracking-wide block mt-0.5">
                      {item.name}
                    </span>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-600 mt-2.5 font-hindi leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className={`text-[11px] font-bold ${item.tagColor} px-2.5 py-1 rounded-full shadow-sm`}>
                      व्यक्तिगत केस स्टडी
                    </span>
                    <a
                      href={`https://wa.me/919106947508?text=नमस्ते%20डॉ.%20राजेश%20पाठक%20सर,%20मुझे%20${encodeURIComponent(item.nameHi)}%20(${item.name})%20के%20लिए%20Book%20Appointment%20करना%20है।`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-extrabold text-red-600 hover:text-red-800 flex items-center gap-1 group-hover:translate-x-1 transition font-hindi"
                    >
                      Book Appointment <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>


              )
            })}
          </AnimatePresence>
        </div>

        {/* If no search results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-white rounded-3xl border border-gray-200">
            <p className="text-gray-500 font-hindi text-base">
              कोई रोग नहीं मिला। आप सीधे WhatsApp पर अपनी बीमारी का नाम लिखकर पूछ सकते हैं।
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-4 text-xs py-2.5 px-6 shadow inline-flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp पर पूछें
            </a>
          </div>
        )}

        {/* Highlight Banner for Spine, AVN & Critical Diseases */}
        <div className="mt-14 bg-gradient-to-r from-emerald-900 via-primary-950 to-emerald-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-emerald-800/60 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 text-emerald-300 rounded-full text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" /> Spine, AVN & Chronic Specialists
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-hindi">
              सर्वाइकल, लंबर, बोन नेक्रोसिस (AVN) या अन्य जटिल समस्या है?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 font-hindi max-w-2xl leading-relaxed">
              होम्योपैथी में सर्जरी और पेनकिलर के बिना नसों, हड्डियों और जोड़ों का प्राकृतिक पुनरुद्धार (Natural Restoration) संभव है। आज ही 2 घंटे की विस्तृत केस-टेकिंग शुरू करें।
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm sm:text-base py-4 px-8 shadow-xl flex items-center gap-2 flex-shrink-0"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span>Book Appointment (₹500 Fee)</span>

          </a>
        </div>

      </div>
    </section>
  )
}
