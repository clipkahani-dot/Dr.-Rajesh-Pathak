import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Phone, 
  Clock, 
  MapPin, 
  Menu, 
  X, 
  ShieldCheck
} from 'lucide-react'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import { 
  PHONE_PRIMARY_DISPLAY, 
  PHONE_PRIMARY, 
  WHATSAPP_URL, 
  DOCTOR_NAME, 
  DOCTOR_QUALIFICATION 
} from '../../utils/constants'

export default function Navbar({ activeTab, setActiveTab }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navTabs = [
    { id: 'home', nameEn: 'Home', nameHi: 'मुख्य पेज' },
    { id: 'about', nameEn: "Doctor's Introduction", nameHi: 'डॉक्टर का परिचय' },
    { id: 'services', nameEn: '20 Specializations', nameHi: '20 बीमारियां' },
    { id: 'process', nameEn: 'Appointment Process', nameHi: 'परामर्श प्रक्रिया' },
    { id: 'team', nameEn: 'Doctor Team', nameHi: 'विशेषज्ञ टीम' },
    { id: 'gallery', nameEn: 'Certificates & Degrees', nameHi: 'डिग्री व प्रमाण' },
    { id: 'reviews', nameEn: 'Patient Reviews', nameHi: 'मरीज समीक्षाएं' },
    { id: 'contact', nameEn: 'Contact Us', nameHi: 'संपर्क व क्लिनिक' },
  ]

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notification Bar */}
      <div className="bg-primary-900 text-white text-xs sm:text-sm py-1.5 px-4 border-b border-primary-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-300 font-medium">
              <Clock className="w-3.5 h-3.5" />
              समय: सुबह 9:00 AM – रात 9:00 PM (Daily)
            </span>
            <span className="hidden md:flex items-center gap-1 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              Surat, Gujarat
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a 
              href={`tel:${PHONE_PRIMARY}`} 
              className="flex items-center gap-1 text-white hover:text-emerald-300 font-semibold transition"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{PHONE_PRIMARY_DISPLAY}</span>
            </a>
            <span className="hidden sm:inline-block bg-primary-800 text-emerald-300 px-2 py-0.5 rounded text-[11px] font-semibold border border-primary-700">
              ₹500 Consultation Fee
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5' 
          : 'bg-white py-3 shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Round Official Logo & Doctor Title */}
          <button 
            onClick={() => handleTabClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none py-0.5"
          >
            <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full overflow-hidden shadow-md border-2 border-amber-400 group-hover:scale-105 group-hover:border-amber-500 transition-all duration-300 flex-shrink-0 bg-black p-0.5">
              <img 
                src="/images/logo/main-logo.jpg" 
                alt={`${DOCTOR_NAME} Official Circular Logo`} 
                className="w-full h-full object-contain rounded-full"
              />
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-sm sm:text-base lg:text-lg text-gray-900 leading-tight tracking-tight">
                  {DOCTOR_NAME}
                </span>
                <ShieldCheck className="w-4 h-4 text-emerald-600 inline flex-shrink-0" />
              </div>
              <p className="text-[10px] sm:text-xs text-emerald-800 font-bold tracking-wide mt-0.5 uppercase">
                {DOCTOR_QUALIFICATION} • 18+ Yrs Exp. & 10+ Doctors Team
              </p>
            </div>
          </button>




          {/* Desktop Navigation Tabs (Doctor Demand: English Top, Hindi in Brackets below) */}
          <div className="hidden xl:flex items-center gap-1 bg-gray-50/80 p-1.5 rounded-2xl border border-gray-100">
            {navTabs.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 flex flex-col items-center leading-tight ${
                    isActive
                      ? 'bg-emerald-700 text-white shadow-sm scale-105'
                      : 'text-gray-700 hover:text-emerald-800 hover:bg-emerald-50/70'
                  }`}
                >
                  <span className="font-bold text-[12px]">{tab.nameEn}</span>
                  <span className={`text-[10px] font-hindi ${isActive ? 'text-emerald-100' : 'text-gray-400'}`}>
                    ({tab.nameHi})
                  </span>
                </button>
              )
            })}
          </div>

          {/* WhatsApp CTA Action Button (Bright Red/Yellowish Red Accent) */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-md border border-amber-300 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Book Appointment (₹500)</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-gray-700 hover:text-primary-700 hover:bg-gray-100 rounded-lg transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
            >
              <div className="px-4 py-3 space-y-1.5">
                <div className="grid grid-cols-2 gap-2 pb-2">
                  {navTabs.map((tab) => {
                    const isActive = activeTab === tab.id
                    return (
                      <button
                        key={tab.id}
                        onClick={() => handleTabClick(tab.id)}
                        className={`w-full p-2.5 rounded-xl text-left font-hindi transition ${
                          isActive 
                            ? 'bg-emerald-700 text-white font-bold' 
                            : 'bg-gray-50 text-gray-800 hover:bg-emerald-50'
                        }`}
                      >
                        <div className="text-xs font-semibold">{tab.nameEn}</div>
                        <div className={`text-[10px] ${isActive ? 'text-emerald-100' : 'text-gray-500'}`}>
                          ({tab.nameHi})
                        </div>
                      </button>
                    )
                  })}
                </div>

                <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full justify-center py-2.5 text-xs font-bold bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white rounded-xl shadow-md border border-amber-300 flex items-center gap-2"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    Book Appointment Online (₹500)
                  </a>
                  <a
                    href={`tel:${PHONE_PRIMARY}`}
                    className="btn-secondary w-full justify-center py-2 text-xs font-semibold"
                  >
                    <Phone className="w-4 h-4" />
                    Call for Appointment: {PHONE_PRIMARY_DISPLAY}
                  </a>
                </div>


              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
