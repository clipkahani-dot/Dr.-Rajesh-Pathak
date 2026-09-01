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
  Star,
  Target,
  Eye,
  Compass
} from 'lucide-react'

import HeroSection from './HeroSection'
import TrustBar from './TrustBar'
import HowItWorks from './HowItWorks'
import ClinicTimings from './ClinicTimings'
import ContactSection from './ContactSection'
import { services } from '../../data/services'
import { testimonials } from '../../data/testimonials'
import { 
  DOCTOR_NAME, 
  DOCTOR_QUALIFICATION, 
  WHATSAPP_URL, 
  GOOGLE_RATING,
  DOCTOR_MISSION,
  DOCTOR_VISION,
  DOCTOR_TARGET
} from '../../utils/constants'

export default function HomeDashboard({ setActiveTab }) {
  // Top 8 featured diseases for quick overview on main panel
  const featuredDiseases = services.slice(0, 8)

  return (
    <div className="space-y-0">
      
      {/* 1. Main Hero Panel */}
      <HeroSection />

      {/* 2. Trust Bar Metrics */}
      <TrustBar />

      {/* 3. Mission, Vision & Target (Aphorisms 01 & 02) — Prominently at the Start */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-amber-400 to-yellow-400 text-amber-950 border border-amber-500 shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-900" />
              चिकित्सीय सिद्धांत एवं विज़न (Organon of Medicine)
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 font-hindi mt-2">
              हमारा मिशन, विज़न एवं सामाजिक लक्ष्य
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-hindi mt-1">
              डॉ. सैमुअल हैनिमैन के मौलिक सिद्धांतों एवं 140+ करोड़ देशवासियों के स्वास्थ्य को समर्पित
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Mission Card (Aphorism 01) - Bright Saffron Amber */}
            <div className="bg-gradient-to-br from-amber-50/90 via-white to-yellow-50 rounded-3xl p-6 sm:p-7 border-2 border-amber-300 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-extrabold shadow-md">
                    <Target className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-amber-950 bg-amber-200/80 px-2.5 py-1 rounded-full border border-amber-300 font-mono">
                    {DOCTOR_MISSION.aphorism}
                  </span>
                </div>
                <h4 className="text-xl font-extrabold text-gray-900 mb-2 font-sans">
                  {DOCTOR_MISSION.title}
                </h4>
                <p className="text-sm font-semibold text-amber-950 italic leading-relaxed mb-3">
                  "{DOCTOR_MISSION.text}"
                </p>
              </div>
              <p className="text-xs text-gray-700 font-hindi pt-3 border-t border-amber-200/80 font-medium">
                {DOCTOR_MISSION.textHi}
              </p>
            </div>

            {/* Vision Card (Aphorism 02) - Bright Royal Blue */}
            <div className="bg-gradient-to-br from-blue-50/90 via-white to-cyan-50 rounded-3xl p-6 sm:p-7 border-2 border-blue-300 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-extrabold shadow-md">
                    <Eye className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-blue-950 bg-blue-200/80 px-2.5 py-1 rounded-full border border-blue-300 font-mono">
                    {DOCTOR_VISION.aphorism}
                  </span>
                </div>
                <h4 className="text-xl font-extrabold text-gray-900 mb-2 font-sans">
                  {DOCTOR_VISION.title}
                </h4>
                <p className="text-sm font-semibold text-blue-950 italic leading-relaxed mb-3">
                  "{DOCTOR_VISION.text}"
                </p>
              </div>
              <p className="text-xs text-gray-700 font-hindi pt-3 border-t border-blue-200/80 font-medium">
                {DOCTOR_VISION.textHi}
              </p>
            </div>

            {/* Target Card (65%-70% of India) - Bright Crimson Red */}
            <div className="bg-gradient-to-br from-rose-50/90 via-white to-red-50 rounded-3xl p-6 sm:p-7 border-2 border-rose-300 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 text-white flex items-center justify-center font-extrabold shadow-md">
                    <Compass className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-red-950 bg-red-200/80 px-2.5 py-1 rounded-full border border-red-300 font-mono">
                    {DOCTOR_TARGET.aphorism}
                  </span>
                </div>
                <h4 className="text-xl font-extrabold text-gray-900 mb-2 font-sans">
                  {DOCTOR_TARGET.title}
                </h4>
                <p className="text-sm font-semibold text-red-950 leading-relaxed mb-3">
                  "{DOCTOR_TARGET.text}"
                </p>
              </div>
              <p className="text-xs text-gray-700 font-hindi pt-3 border-t border-rose-200/80 font-medium">
                {DOCTOR_TARGET.textHi}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Quick Patient Disease Portal */}
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

      {/* 5. Consultation Process Section */}
      <HowItWorks />

      {/* 6. Doctor Profile Quick Teaser */}
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
                <Award className="w-3.5 h-3.5" /> 18+ Years Classical Homoeopathy Legacy
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
                  className="btn-secondary text-xs py-2.5 px-5"
                >
                  10+ डॉक्टर्स टीम देखें
                </button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-xs py-2.5 px-5"
                >
                  ऑनलाइन परामर्श लें
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Hospital & Clinic Timings */}
      <ClinicTimings />

      {/* 8. Patient Reviews Quick Snippet */}
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
              <div 
                key={item.id}
                className="bg-gray-50/70 p-6 rounded-2xl border border-gray-100 hover:border-emerald-200 transition"
              >
                <div className="flex text-amber-400 mb-2">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 italic mb-4">
                  "{item.text}"
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="font-bold text-gray-900">{item.name} ({item.city})</span>
                  <span className="text-emerald-700 font-semibold">{item.condition}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Contact & Maps Section */}
      <ContactSection />

    </div>
  )
}
