import { motion } from 'framer-motion'
import { 
  Phone, 
  Clock, 
  ShieldCheck, 
  Star, 
  Award, 
  CheckCircle2,
  Sparkles,
  Users
} from 'lucide-react'
import WhatsAppIcon from '../ui/WhatsAppIcon'

import { 
  DOCTOR_NAME, 
  DOCTOR_QUALIFICATION, 
  DOCTOR_DESIGNATION, 
  WHATSAPP_URL, 
  PHONE_PRIMARY, 
  PHONE_PRIMARY_DISPLAY, 
  CONSULTATION_FEE, 
  GOOGLE_RATING 
} from '../../utils/constants'

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[85vh] pb-12 sm:pb-16 pt-3 sm:pt-8 overflow-hidden bg-gradient-to-b from-emerald-50/60 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols) */}
          <motion.div 
            className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Top Badges (Doctor Requested: 18+ Experience & 10+ Doctor's Team first) */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-sm font-semibold bg-emerald-100 text-emerald-950 border border-emerald-300 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 flex-shrink-0" />
                18+ Years Experience & 10+ Doctor's Team
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-sm font-semibold bg-white text-gray-800 border border-gray-200 shadow-sm">
                <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-600 flex-shrink-0" />
                Book Appointment Online
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[11px] sm:text-sm font-semibold bg-amber-50 text-amber-900 border border-amber-200">
                <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 fill-amber-500 flex-shrink-0" />
                {GOOGLE_RATING} Google Rating
              </span>
            </div>


            {/* Main Headline (Doctor Demand: Book Appointment Online on Top, Hindi in Brackets below, English Priority) */}
            <div className="space-y-2 pt-1">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.15] tracking-tight font-sans">
                Book Appointment Online
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-800 font-hindi">
                (विशेषज्ञ होम्योपैथी परामर्श)
              </p>
            </div>

            {/* Subtitle with Doctor's Transparent Message */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Consult with <strong className="text-gray-900">{DOCTOR_NAME} {DOCTOR_QUALIFICATION}</strong> & 10+ Expert Doctors team for Asthma, Diabetes, Arthritis, Cervical, Psoriasis, Cancer & <strong>20+ chronic conditions</strong> worldwide.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-gray-700 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Appointments for 20+ Chronic Diseases</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>2-Hour Detailed Case Study (Repertorization)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Consultation Fee: <strong>{CONSULTATION_FEE}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Online Guidance & Hospital Clinics Available</span>
              </div>
            </div>

            {/* Transparent Disclaimer Badge (As Requested by Doctor) */}
            <div className="p-3 bg-amber-50/90 rounded-2xl border border-amber-200 text-[11px] sm:text-xs text-amber-950 font-hindi flex items-start gap-2 max-w-xl mx-auto lg:mx-0 text-left shadow-sm">
              <ShieldCheck className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
              <span>
                <strong>पारदर्शी चिकित्सा नीति:</strong> Book appointment online & consult online in stable situation. गंभीर व आपातकालीन स्थिति में नजदीकी क्लिनिक/अस्पताल में चेकअप आवश्यक है।
              </span>
            </div>

            {/* Action Buttons (Doctor Demand: Bright Red / Yellowish Red Tab) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-base sm:text-lg py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 font-bold text-white bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:from-red-500 hover:to-rose-500 border-2 border-amber-300 group transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
              >
                <WhatsAppIcon className="w-6 h-6 group-hover:scale-110 transition flex-shrink-0" />
                <span>Book Appointment Online</span>
              </a>

              <a
                href={`tel:${PHONE_PRIMARY}`}
                className="btn-secondary w-full sm:w-auto text-sm sm:text-base py-4 px-7 rounded-2xl flex items-center justify-center gap-2 font-semibold hover:bg-emerald-50"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-700" />
                <span>Call: {PHONE_PRIMARY_DISPLAY}</span>
              </a>
            </div>



            {/* Micro Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-3 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> 100% सुरक्षित एवं प्राकृतिक
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-emerald-600" /> समय की 100% बचत
              </span>
            </div>

          </motion.div>

          {/* Right Column: Doctor Profile Card with Real Photo (5 cols) */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Visual Card */}
            <div className="relative mx-auto max-w-md bg-white rounded-3xl p-4 shadow-2xl border border-gray-100 overflow-hidden">
              
              {/* Doctor Real Image */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-emerald-100 to-emerald-50 aspect-[4/5] sm:aspect-[3/4]">
                <img 
                  src="/images/doctor/dr-rajesh-pathak-portrait.jpg" 
                  alt={`${DOCTOR_NAME} - ${DOCTOR_QUALIFICATION}`}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
                
                {/* Doctor Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-block px-3 py-1 bg-emerald-600 text-white rounded-full text-xs font-bold mb-1 shadow">
                    Lead Consultant & Professor
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">{DOCTOR_NAME}</h3>
                  <p className="text-xs text-emerald-300 font-medium">{DOCTOR_QUALIFICATION}</p>
                  <p className="text-[11px] text-gray-300 mt-1 font-hindi">
                    Assistant Professor in Homoeopathy Medical College, Surat
                  </p>
                </div>
              </div>

              {/* Floating Fee Badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-emerald-600 to-primary-700 text-white px-5 py-2.5 rounded-2xl shadow-xl border-2 border-white flex items-center gap-1.5 font-hindi font-bold text-sm transform rotate-2">
                <span>⚡</span> Consultation: {CONSULTATION_FEE}
              </div>

              {/* Quick Info Grid below image */}
              <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                <div className="bg-emerald-50/80 p-2.5 rounded-xl border border-emerald-100">
                  <div className="text-lg font-bold text-emerald-900">18+</div>
                  <div className="text-[11px] text-emerald-700 font-medium font-hindi">वर्ष अनुभव</div>
                </div>
                <div className="bg-emerald-50/80 p-2.5 rounded-xl border border-emerald-100">
                  <div className="text-lg font-bold text-emerald-900">10+</div>
                  <div className="text-[11px] text-emerald-700 font-medium font-hindi">डॉक्टर्स टीम</div>
                </div>
                <div className="bg-emerald-50/80 p-2.5 rounded-xl border border-emerald-100">
                  <div className="text-lg font-bold text-emerald-900">1000+</div>
                  <div className="text-[11px] text-emerald-700 font-medium font-hindi">संतुष्ट मरीज</div>
                </div>
              </div>

            </div>

            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
