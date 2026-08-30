import { motion } from 'framer-motion'
import { Award, ShieldCheck, Users, Stethoscope, HeartPulse } from 'lucide-react'
import { doctors } from '../../data/doctors'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import { DOCTOR_NAME, WHATSAPP_URL } from '../../utils/constants'


export default function DoctorTeam() {
  const leadDoctor = doctors.find(d => d.isLead)
  const otherDoctors = doctors.filter(d => !d.isLead)

  return (
    <section id="team" className="py-20 lg:py-28 bg-gray-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 mb-3">
            👨‍⚕️ विशेषज्ञ डॉक्टर टीम (Expert Doctors Team)
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-hindi">
            10+ योग्य एवं समर्पित डॉक्टरों की टीम
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-3 font-hindi">
            आपकी स्वास्थ्य समस्या के सटीक विश्लेषण और उचित केस-टेकिंग के लिए विशेषज्ञ होम्योपैथिक टीम
          </p>
        </div>

        {/* Lead Doctor Featured Card */}
        {leadDoctor && (
          <motion.div
            className="bg-white rounded-3xl p-6 sm:p-10 border border-emerald-100 shadow-xl mb-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Photo */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-3xl overflow-hidden shadow-xl border-4 border-emerald-100 bg-emerald-50">
                  <img 
                    src="/images/doctor/dr-rajesh-pathak-portrait.jpg" 
                    alt={leadDoctor.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Lead Details */}
              <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-600 text-white rounded-full text-xs font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4" /> Principal Consultant & Team Lead
                </div>

                <h3 className="text-2xl sm:text-4xl font-bold text-gray-900">
                  {leadDoctor.name}
                </h3>

                <p className="text-base font-semibold text-emerald-700">
                  {leadDoctor.qualification} — {leadDoctor.role}
                </p>

                <p className="text-sm sm:text-base text-gray-600 font-hindi leading-relaxed max-w-2xl">
                  18 से अधिक वर्षों के अनुभव के साथ डॉ. राजेश पाठक होम्योपैथिक चिकित्सा शिक्षा (Medical College) और क्लीनिकल प्रैक्टिस में एक प्रतिष्ठित नाम हैं। वे स्वयं प्रत्येक केस का गहन अध्ययन करके दवा निर्धारित करते हैं।
                </p>

                <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-2">
                  {leadDoctor.specialties.map((spec, i) => (
                    <span key={i} className="px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg text-xs font-semibold">
                      ✓ {spec}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* Other Doctors Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {otherDoctors.map((doc, idx) => (
            <motion.div
              key={doc.id}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition text-center flex flex-col items-center justify-between group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            >
              <div>
                <div className={`w-16 h-16 rounded-full ${doc.color} text-white flex items-center justify-center text-lg font-bold shadow-md mx-auto mb-3 group-hover:scale-105 transition`}>
                  {doc.initials}
                </div>

                <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                  {doc.name}
                </h4>

                <span className="inline-block mt-1 px-2.5 py-0.5 bg-gray-100 text-gray-700 rounded-full text-[11px] font-semibold">
                  {doc.qualification}
                </span>

                <p className="text-xs text-gray-500 font-hindi mt-2">
                  {doc.roleHi}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 w-full text-[11px] text-emerald-700 font-medium font-hindi">
                ऑनलाइन केस-टेकिंग टीम
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real Team Photo Showcase */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-md">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow">
              <img 
                src="/images/gallery/university-team-surat.jpg" 
                alt="Dr. Rajesh Pathak with Homoeopathy Team at Veer Narmad University"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-3 text-left font-hindi">
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                Real Clinical & Academic Team
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900">
                वीर नर्मद दक्षिण गुजरात यूनिवर्सिटी एवं मेडिकल कॉलेज टीम
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                डॉ. राजेश पाठक के मार्गदर्शन में प्रशिक्षित युवा एवं अनुभवी डॉक्टरों की टीम मरीजों की प्राथमिक जानकारी और विस्तृत केस हिस्ट्री तैयार करती है, जिससे प्रत्येक मरीज को व्यक्तिगत ध्यान मिल सके।
              </p>
              <div className="pt-2">
                <a 
                  href={WHATSAPP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-xs py-2.5 px-5 shadow inline-flex items-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  टीम से परामर्श बुक करें (₹500)
                </a>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
