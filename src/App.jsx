import { useState, useEffect, lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Home, Sparkles } from 'lucide-react'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppFloat from './components/layout/WhatsAppFloat'

import HomeDashboard from './components/home/HomeDashboard'

// Code-split other tabs on demand for instant mobile load speed
const AboutDoctor = lazy(() => import('./components/home/AboutDoctor'))
const Specializations = lazy(() => import('./components/home/Specializations'))
const HowItWorks = lazy(() => import('./components/home/HowItWorks'))
const DoctorTeam = lazy(() => import('./components/home/DoctorTeam'))
const ClinicTimings = lazy(() => import('./components/home/ClinicTimings'))
const GallerySection = lazy(() => import('./components/home/GallerySection'))
const WhyChooseUs = lazy(() => import('./components/home/WhyChooseUs'))
const PatientReviews = lazy(() => import('./components/home/PatientReviews'))
const FAQ = lazy(() => import('./components/home/FAQ'))
const ContactSection = lazy(() => import('./components/home/ContactSection'))
const PrivacyPolicy = lazy(() => import('./components/home/PrivacyPolicy'))


function App() {
  const [activeTab, setActiveTab] = useState('home')

  // Smooth scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activeTab])

  const tabTitles = {
    home: { hi: 'मुख्य मरीज पैनल (Home Panel)', en: 'Patient Dashboard' },
    about: { hi: 'डॉ. राजेश पाठक परिचय, अस्पताल एवं योग्यता', en: 'About Us • Doctor Profile & Clinic' },
    services: { hi: 'सभी 20 बीमारियों का संपूर्ण विवरण', en: 'Our Services • All 20 Medical Specializations' },
    process: { hi: 'ऑनलाइन परामर्श एवं प्रिस्क्रिप्शन प्रक्रिया', en: 'Consultation Process • 3 Simple Steps' },
    team: { hi: '10+ विशेषज्ञ डॉक्टरों की समर्पित टीम', en: 'Medical Team & Academic Faculty' },
    gallery: { hi: 'फोटो, प्रमाण पत्र एवं सम्मान गैलरी', en: 'Certificates & Clinical Gallery' },
    reviews: { hi: 'मरीजों की संतुष्टि एवं 4.9★ Google समीक्षाएं', en: 'Patient Reviews & Experiences (4.9★)' },

    contact: { hi: 'सीधा संपर्क, क्लिनिक पता एवं अपॉइंटमेंट', en: 'Contact Us • Clinic Locations & Map' },

    privacy: { hi: 'गोपनीयता नीति एवं मरीज डेटा सुरक्षा', en: 'Privacy Policy & Terms of Service' },
  }


  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-emerald-500 selection:text-white flex flex-col justify-between">
      
      {/* Top Sticky Navigation Bar with active tab highlighter */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Tab Panel Area with Safe Top Padding */}
      <main className="flex-grow pt-32 sm:pt-36 lg:pt-32">

        
        {/* Dedicated Tab Header Banner (when not on home tab) */}
        {activeTab !== 'home' && (
          <div className="bg-gradient-to-r from-emerald-900 to-primary-950 text-white py-8 border-b border-emerald-800/80 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <button
                  onClick={() => setActiveTab('home')}
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-300 hover:text-white mb-2 font-hindi transition"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> मुख्य पैनल पर वापस जाएं (Back to Home)
                </button>
                <h1 className="text-2xl sm:text-3xl font-bold font-hindi">
                  {tabTitles[activeTab]?.hi}
                </h1>
                <p className="text-xs text-emerald-200 mt-0.5">
                  {tabTitles[activeTab]?.en}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('home')}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl border border-white/20 flex items-center gap-1.5 transition font-hindi"
                >
                  <Home className="w-4 h-4" /> मुख्य पैनल (Home)
                </button>
              </div>
            </div>
          </div>
        )}

        {/* View Switcher with Smooth Animation */}
        <Suspense fallback={<div className="min-h-[300px] flex items-center justify-center text-emerald-700 font-hindi text-sm">लोड हो रहा है...</div>}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              {/* 1. HOME TAB (The Main Patient Panel) */}
              {activeTab === 'home' && (
                <HomeDashboard setActiveTab={setActiveTab} />
              )}

              {/* 2. ABOUT TAB */}
              {activeTab === 'about' && (
                <AboutDoctor />
              )}

              {/* 3. SERVICES TAB (All 20 Diseases with Filters) */}
              {activeTab === 'services' && (
                <Specializations />
              )}

              {/* 4. PROCESS TAB */}
              {activeTab === 'process' && (
                <>
                  <HowItWorks />
                  <WhyChooseUs />
                </>
              )}

              {/* 5. TEAM TAB */}
              {activeTab === 'team' && (
                <DoctorTeam />
              )}

              {/* 6. GALLERY TAB */}
              {activeTab === 'gallery' && (
                <GallerySection />
              )}

              {/* 7. REVIEWS TAB */}
              {activeTab === 'reviews' && (
                <PatientReviews />
              )}

              {/* 8. CONTACT TAB */}
              {activeTab === 'contact' && (
                <>
                  <ContactSection />
                  <ClinicTimings />
                </>
              )}

              {/* 9. PRIVACY POLICY TAB */}
              {activeTab === 'privacy' && (
                <PrivacyPolicy setActiveTab={setActiveTab} />
              )}
            </motion.div>
          </AnimatePresence>
        </Suspense>


      </main>

      {/* Footer (with clickable tab triggers) */}
      <Footer setActiveTab={setActiveTab} />

      {/* Floating WhatsApp CTA */}
      <WhatsAppFloat />

    </div>
  )
}

export default App
