import { motion } from 'framer-motion'
import { Award, ShieldCheck, Users, Stethoscope, HeartPulse, CheckCircle2, Clock, MapPin, Sparkles } from 'lucide-react'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import { DOCTOR_NAME, DOCTOR_QUALIFICATION, WHATSAPP_URL, CONSULTATION_FEE } from '../../utils/constants'

export default function DoctorTeam() {
  return (
    <section id="team" className="py-20 lg:py-28 bg-gray-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-400 to-yellow-400 text-amber-950 border border-amber-500 mb-3 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-900" />
            10+ Doctor's Team (विशेषज्ञ डॉक्टर टीम)
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 font-sans tracking-tight">
            Our Expert Medical & Clinical Team
          </h2>
          <p className="text-base sm:text-lg text-emerald-800 font-hindi font-bold mt-2">
            10+ योग्य एवं समर्पित डॉक्टरों की टीम — 24/7 केस टेकिंग एवं मरीज सहायता
          </p>
          <p className="text-xs sm:text-sm text-gray-600 font-hindi mt-1 max-w-2xl mx-auto">
            डॉ. राजेश पाठक के कुशल मार्गदर्शन में 10 से अधिक योग्य डॉक्टरों की टीम प्रत्येक मरीज के लक्षणों की विस्तृत केस-टेकिंग (Case Taking) और नियमित फॉलो-अप करती है।
          </p>
        </div>

        {/* Lead Doctor Featured Banner */}
        <motion.div
          className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-300 shadow-xl mb-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Photo */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden shadow-lg border-4 border-amber-200 bg-amber-50 relative group">
                <img 
                  src="/images/doctor/dr-rajesh-pathak-portrait.jpg" 
                  alt={DOCTOR_NAME}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            {/* Lead Details */}
            <div className="lg:col-span-8 space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                <Award className="w-4 h-4" /> Lead Consultant & Team Mentor
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
                  {DOCTOR_NAME}
                </h3>
                <p className="text-base sm:text-lg font-bold text-emerald-700 uppercase tracking-wide mt-0.5">
                  {DOCTOR_QUALIFICATION} • Assistant Professor & Author
                </p>
              </div>

              <p className="text-xs sm:text-sm text-gray-700 font-hindi leading-relaxed max-w-2xl">
                18 से अधिक वर्षों के अनुभव के साथ डॉ. राजेश पाठक स्वयं प्रत्येक मरीज की 2 घंटे की विस्तृत केस हिस्ट्री (Repertorization) का गहन अध्ययन करते हैं और व्यक्तिगत क्लासिकल होम्योपैथिक दवा निर्धारित करते हैं।
              </p>

              <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-1">
                <span className="px-3 py-1 bg-amber-100 text-amber-950 border border-amber-300 rounded-xl text-xs font-bold">
                  ✓ 18+ Years Legacy
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-950 border border-blue-300 rounded-xl text-xs font-bold">
                  ✓ 10+ Doctors Coordination
                </span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-950 border border-emerald-300 rounded-xl text-xs font-bold">
                  ✓ 2-Hour Detailed Case Taking
                </span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ── 2 Real Group Photos of 10+ Doctor's Team ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Group Photo 1: University Clinical Team */}
          <motion.div 
            className="bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-emerald-200 hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative overflow-hidden bg-gray-900 aspect-[4/3]">
              <img 
                src="/images/gallery/university-team-surat.jpg" 
                alt="Dr. Rajesh Pathak and Homoeopathic Doctor Team at Veer Narmad South Gujarat University"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute top-3 left-3 bg-emerald-700/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full shadow">
                🎓 University & Academic Team
              </div>
            </div>

            <div className="p-6 space-y-2 text-left font-hindi flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-lg sm:text-xl font-extrabold text-gray-900 font-sans">
                  वीर नर्मद दक्षिण गुजरात यूनिवर्सिटी टीम
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                  यूनिवर्सिटी एवं मेडिकल कॉलेज के योग्य डॉक्टरों की समर्पित टीम जो मरीजों की प्राथमिक जांच, केस हिस्ट्री और डिजिटल रिपोर्ट संकलन का कार्य करती है।
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-emerald-800 font-semibold">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" /> Surat, Gujarat
                </span>
                <span className="bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 text-[11px]">
                  10+ Team Strength
                </span>
              </div>
            </div>
          </motion.div>

          {/* Group Photo 2: Clinical & Hospital Team */}
          <motion.div 
            className="bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative overflow-hidden bg-gray-900 aspect-[4/3]">
              <img 
                src="/images/gallery/clinical-doctors-team.jpg" 
                alt="Dr. Rajesh Pathak and Clinical Doctors Team at Surat Clinic"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute top-3 left-3 bg-blue-700/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full shadow">
                🏥 Clinical Case-Taking Team
              </div>
            </div>

            <div className="p-6 space-y-2 text-left font-hindi flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-lg sm:text-xl font-extrabold text-gray-900 font-sans">
                  क्लिनिकल एवं ऑनलाइन केस-टेकिंग टीम
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                  अस्पताल एवं ऑनलाइन परामर्श के लिए विशेष रूप से प्रशिक्षित डॉक्टरों की टीम जो 2 घंटे की गहन केस स्टडी और निरंतर फॉलो-अप सुनिश्चित करती है।
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-blue-800 font-semibold">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" /> Surat & Gandhinagar
                </span>
                <span className="bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200 text-[11px]">
                  Continuous Follow-up
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── 3 Core Pillars of Doctor's Team ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm text-left flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-gray-900 text-sm">2-Hour Case Taking</h5>
              <p className="text-xs text-gray-600 font-hindi mt-0.5">
                प्रत्येक रोगी की पूरी मानसिक व शारीरिक हिस्ट्री दर्ज की जाती है।
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm text-left flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold flex-shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-gray-900 text-sm">10+ Dedicated Doctors</h5>
              <p className="text-xs text-gray-600 font-hindi mt-0.5">
                मरीजों को तुरंत रिप्लाई एवं प्राथमिक जानकारी में सहायता।
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm text-left flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-gray-900 text-sm">Direct Guidance by MD</h5>
              <p className="text-xs text-gray-600 font-hindi mt-0.5">
                अंतिम दवा का चयन स्वयं डॉ. राजेश पाठक MD द्वारा किया जाता है।
              </p>
            </div>
          </div>
        </div>

        {/* CTA Box */}
        <div className="text-center">
          <a 
            href={WHATSAPP_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl font-extrabold text-white bg-gradient-to-r from-red-600 via-rose-600 to-amber-500 hover:from-red-500 hover:to-amber-400 border-2 border-yellow-300 text-sm sm:text-base transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="w-6 h-6" />
            डॉक्टर टीम से ऑनलाइन अपॉइंटमेंट बुक करें ({CONSULTATION_FEE})
          </a>
        </div>

      </div>
    </section>
  )
}
