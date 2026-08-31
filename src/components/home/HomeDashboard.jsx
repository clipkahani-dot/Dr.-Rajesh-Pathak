import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Award, 
  CheckCircle2,
  Users,
  ChevronRight,
  Star
} from 'lucide-react'

import HeroSection from './HeroSection'
import TrustBar from './TrustBar'
import HowItWorks from './HowItWorks'
import ClinicTimings from './ClinicTimings'
import ContactSection from './ContactSection'
import { services } from '../../data/services'
import { testimonials } from '../../data/testimonials'
import { DOCTOR_NAME, DOCTOR_QUALIFICATION, WHATSAPP_URL, GOOGLE_RATING } from '../../utils/constants'

export default function HomeDashboard({ setActiveTab }) {
  // Top 8 featured diseases for quick overview on main panel
  const featuredDiseases = services.slice(0, 8)

  return (
    <div className="space-y-0">
      
      {/* 1. Main Hero Panel */}
      <HeroSection />

      {/* 2. Trust Bar Metrics */}
      <TrustBar />

      {/* 3. Quick Patient Disease Portal */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 mb-2">
                <Sparkles className="w-3.5 h-3.5" /> प्रमुख उपचार सेवाएं (Quick Specializations)
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 font-hindi">
                आप किस समस्या के लिए परामर्श चाहते हैं?
              </h2>
              <p className="text-sm text-gray-500 font-hindi mt-1">
                नीचे दी गई मुख्य बीमारियों में से चुनें या पूरी 20 बीमारियों की सूची देखें
              </p>
            </div>

            <button
              onClick={() => {
                setActiveTab('services')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold transition border border-emerald-200 self-start md:self-auto font-hindi shadow-sm"
            >
              <span>सभी 20 बीमारियां देखें (View All 20)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick 8 Disease Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredDiseases.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-2xl p-5 border-2 ${item.border} shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between group cursor-pointer hover:-translate-y-1`}
                  onClick={() => {

                    setActiveTab('services')
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base font-hindi leading-snug">
                      {item.nameHi}
                    </h3>
                    <p className="text-[11px] text-emerald-700 font-semibold uppercase mt-0.5">
                      {item.name}
                    </p>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-gray-200/50 flex items-center justify-between text-xs text-gray-500 font-hindi">
                    <span>विस्तार से देखें</span>
                    <ChevronRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition" />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Quick Banner: Switch to All 20 Diseases */}
          <div className="mt-8 p-4 sm:p-5 bg-gradient-to-r from-emerald-800 to-primary-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md font-hindi">
            <div className="text-center sm:text-left">
              <span className="font-bold text-sm sm:text-base">
                🌟 क्या आपकी समस्या ऊपर नहीं है? (सर्वाइकल, लंबर, AVN, DMD, मानसिक रोग आदि)
              </span>
              <p className="text-xs text-emerald-200 mt-0.5">
                हमारे पास 20 प्रमुख पुरानी और जटिल बीमारियों का प्रमाणित होम्योपैथिक उपचार है।
              </p>
            </div>
            <button
              onClick={() => {
                setActiveTab('services')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="px-5 py-2.5 bg-white text-emerald-900 font-bold text-xs sm:text-sm rounded-xl hover:bg-emerald-50 transition shadow whitespace-nowrap"
            >
              पूरी सूची खोलें (All 20)
            </button>
          </div>

        </div>
      </section>

      {/* 4. Consultation Process Section */}
      <HowItWorks />

      {/* 5. Doctor Profile Quick Teaser */}
      <section className="py-16 bg-gray-50/70 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden shadow-md border-4 border-emerald-100">
                <img 
                  src="/images/doctor/dr-rajesh-pathak-portrait.jpg" 
                  alt={DOCTOR_NAME}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-3 text-center lg:text-left font-hindi">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                <Award className="w-3.5 h-3.5" /> 18+ Years Classical Homeopathy Legacy
              </span>
              
              <div className="space-y-0.5">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  {DOCTOR_NAME}
                </h3>
                <p className="text-base font-bold text-emerald-700 uppercase tracking-wide">
                  {DOCTOR_QUALIFICATION}
                </p>
              </div>


              
              <p className="text-sm text-emerald-700 font-semibold">
                Assistant Professor in Homoeopathy Medical College, Surat • Author | Lecturer | Researcher
              </p>

              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-2xl font-hindi">
                <strong>हमारा मिशन (Aphorism 01):</strong> "रोगी को पुनः स्वस्थ करना और रोगमुक्ति प्रदान करना ही एकमात्र लक्ष्य है।" देश के 65%–70% मध्यम व निम्न आय वर्ग तक निःशुल्क स्वास्थ्य शिविरों व सुलभ चिकित्सा का विस्तार।
              </p>


              <div className="pt-3 flex flex-wrap justify-center lg:justify-start gap-3">
                <button
                  onClick={() => {
                    setActiveTab('about')
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className="btn-secondary text-xs py-2.5 px-5"
                >
                  पूरा परिचय व अस्पताल देखें
                </button>
                <button
                  onClick={() => {
                    setActiveTab('team')
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl transition"
                >
                  10+ डॉक्टर्स टीम देखें
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Hospital & Clinic Timings */}
      <ClinicTimings />

      {/* 7. Patient Reviews Quick Snippet */}
      <section className="py-16 bg-white border-b border-gray-100 font-hindi">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                ★ {GOOGLE_RATING} Google Rating (Surat, Gujarat)
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2">
                मरीजों के वास्तविक अनुभव
              </h3>
            </div>
            <button
              onClick={() => {
                setActiveTab('reviews')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1"
            >
              सभी समीक्षाएं पढ़ें <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.slice(0, 2).map((item) => (
              <div key={item.id} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <div className="flex text-amber-400 text-sm mb-2">{'★'.repeat(item.rating)}</div>
                <p className="text-xs sm:text-sm text-gray-700 italic">"{item.text}"</p>
                <div className="mt-3 text-xs font-bold text-gray-900">— {item.name} ({item.city})</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Contact & Online Consultation Booking */}
      <ContactSection />

    </div>
  )
}
