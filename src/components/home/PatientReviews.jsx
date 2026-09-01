import { motion } from 'framer-motion'
import { Star, Quote, QrCode, Sparkles, ExternalLink, Play, CheckCircle2, Video, Heart, ShieldCheck } from 'lucide-react'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import { testimonials } from '../../data/testimonials'
import { GOOGLE_RATING, DOCTOR_NAME, WHATSAPP_URL, MAPS_LINK } from '../../utils/constants'

export default function PatientReviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-gray-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Google Rating Badge */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-900 border-2 border-amber-300 text-xs sm:text-sm font-bold mb-4 shadow-sm">
            <span className="flex text-amber-500 text-base">
              {'★'.repeat(5)}
            </span>
            <span>{GOOGLE_RATING} / 5.0 Google Rating (16+ Verified Google Reviews)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 font-hindi">
            मरीजों के वास्तविक अनुभव एवं Google समीक्षाएं
          </h2>
          <p className="text-base sm:text-lg text-emerald-800 font-hindi font-bold mt-2">
            1000+ संतुष्ट परिवारों का {DOCTOR_NAME} के क्लासिकल होम्योपैथिक उपचार पर अटूट भरोसा
          </p>
          <p className="text-xs sm:text-sm text-gray-600 font-hindi mt-1">
            अस्थमा, अर्थराइटिस, सर्वाइकल, थायरॉइड, डायबिटीज व 20+ गंभीर रोगों में स्वास्थ्य लाभ के प्रमाण
          </p>
        </div>

        {/* ── Real Patient Video Testimonials (2 Videos Grid) ── */}
        <div className="mb-14">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full text-xs font-bold border border-emerald-300 uppercase tracking-wider">
              <Video className="w-3.5 h-3.5 text-emerald-700" />
              Real Patient Video Testimonials (वास्तविक वीडियो अनुभव)
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Video Testimonial 1: IPD Patient Case */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-emerald-200 shadow-xl flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-950 rounded-full text-xs font-bold border border-emerald-300">
                    <Video className="w-3.5 h-3.5 text-emerald-700" />
                    IPD Treatment Testimonial • Video 1
                  </span>
                  <span className="text-xs font-bold text-amber-500 flex items-center gap-1">
                    ★ 5.0 Hospital Recovered
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 font-hindi">
                  IPD मरीज का वीडियो अनुभव (Patient Story 1)
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-hindi leading-relaxed">
                  देखें कि कैसे डॉ. राजेश पाठक के क्लासिकल होम्योपैथिक उपचार और सघन देखभाल से अस्पताल IPD में भर्ती मरीज को स्थायी स्वास्थ्य लाभ प्राप्त हुआ।
                </p>
              </div>

              {/* Video Player 1 */}
              <div className="mt-4 rounded-2xl overflow-hidden shadow-inner border border-gray-200 bg-black aspect-video relative group">
                <video 
                  controls 
                  preload="metadata"
                  className="w-full h-full object-contain"
                  poster="/images/banner/poster-banner.jpg"
                >
                  <source src="/videos/patient-testimonials-1.mp4" type="video/mp4" />
                  <source src="/videos/patient-testimonials.mp4" type="video/mp4" />
                  आपका ब्राउज़र वीडियो सपोर्ट नहीं करता।
                </video>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-hindi">
                <span className="flex items-center gap-1 text-emerald-800 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 100% प्रमाणिक मरीज समीक्षा
                </span>
                <span className="font-semibold text-emerald-700">IPD क्लीनिकल रिकॉर्ड</span>
              </div>
            </div>

            {/* Video Testimonial 2: Hospital IPD Care Recovery */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-blue-200 shadow-xl flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-950 rounded-full text-xs font-bold border border-blue-300">
                    <Video className="w-3.5 h-3.5 text-blue-700" />
                    IPD Hospital Testimonial • Video 2
                  </span>
                  <span className="text-xs font-bold text-amber-500 flex items-center gap-1">
                    ★ 5.0 Hospital Recovered
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 font-hindi">
                  अस्पताल में भर्ती मरीज का वीडियो अनुभव (Patient Story 2)
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-hindi leading-relaxed">
                  अस्पताल IPD वार्ड में भर्ती मरीज का डॉ. राजेश पाठक MD के होम्योपैथिक उपचार एवं गहन क्लीनिकल देखभाल से स्वस्थ होने का वास्तविक अनुभव।
                </p>
              </div>

              {/* Video Player 2 */}
              <div className="mt-4 rounded-2xl overflow-hidden shadow-inner border border-gray-200 bg-black aspect-video relative group">
                <video 
                  controls 
                  preload="metadata"
                  className="w-full h-full object-contain"
                  poster="/images/doctor/dr-rajesh-pathak-portrait.jpg"
                >
                  <source src="/videos/patient-testimonials-2.mp4" type="video/mp4" />
                  आपका ब्राउज़र वीडियो सपोर्ट नहीं करता।
                </video>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-hindi">
                <span className="flex items-center gap-1 text-blue-800 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> 100% प्रमाणिक मरीज समीक्षा
                </span>
                <span className="font-semibold text-blue-700">IPD क्लीनिकल रिकॉर्ड</span>
              </div>
            </div>


          </div>
        </div>

        {/* ── Official Google Review QR Code Feature Banner ── */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-200 shadow-xl mb-14 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            
            {/* QR Image Box */}
            <div className="w-44 sm:w-48 flex-shrink-0 bg-gradient-to-b from-amber-50 to-yellow-50 p-3 rounded-2xl border-2 border-dashed border-amber-300 text-center shadow-inner">
              <img 
                src="/images/qr/google-review-qr-scanner.jpg" 
                alt="Scan to Rate Us on Google - Dr Rajesh Pathak MD"
                className="w-full h-auto object-contain rounded-xl shadow"
              />
              <span className="inline-block mt-2 text-[11px] font-bold text-amber-950 font-hindi">
                📷 Google Lens से स्कैन करें
              </span>
            </div>

            {/* QR Info & Text */}
            <div className="space-y-4 text-center md:text-left font-hindi">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Google Verified Reviews • {GOOGLE_RATING}★
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug">
                क्या आप डॉ. पाठक से परामर्श ले चुके हैं? अपना अनुभव साझा करें
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                अपने मोबाइल कैमरे या Google Lens से क्यूआर कोड को स्कैन करें और सीधे Google Maps पर अपनी रेटिंग व समीक्षा दर्ज करें। आपका फीडबैक अन्य मरीजों को सही डॉक्टर चुनने में मदद करता है।
              </p>

              <div className="pt-2 flex flex-wrap justify-center md:justify-start gap-3">
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs sm:text-sm font-bold shadow transition inline-flex items-center gap-1.5"
                >
                  <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
                  Google Maps पर रेटिंग दें <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-xs sm:text-sm py-2.5 px-5 shadow inline-flex items-center gap-1.5"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp पर फीडबैक भेजें
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* ── Testimonials 6 Grid Cards with Vibrant Colors ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-gray-100 hover:border-emerald-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
            >
              <Quote className="w-10 h-10 text-emerald-100 absolute top-5 right-5 -z-0 group-hover:text-emerald-200 transition" />
              
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-gray-400 ml-1">5.0</span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-gray-700 font-hindi leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              {/* Patient Info */}
              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-600 to-primary-800 text-white font-bold flex items-center justify-center text-xs shadow">
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xs sm:text-sm leading-tight">{item.name}</h4>
                    <p className="text-[11px] text-gray-500">{item.city}, भारत</p>
                  </div>
                </div>

                <span className="px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-full text-[11px] font-bold border border-emerald-200">
                  {item.condition}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
