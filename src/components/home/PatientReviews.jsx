import { motion } from 'framer-motion'
import { Star, Quote, QrCode, Sparkles, ExternalLink } from 'lucide-react'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import { testimonials } from '../../data/testimonials'
import { GOOGLE_RATING, DOCTOR_NAME, WHATSAPP_URL, MAPS_LINK } from '../../utils/constants'

export default function PatientReviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-gray-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Google Rating Badge */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs sm:text-sm font-bold mb-4 shadow-sm">
            <span className="flex text-amber-500">
              {'★'.repeat(5)}
            </span>
            <span>{GOOGLE_RATING} / 5.0 Google Rating & Customer Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-hindi">
            मरीजों के वास्तविक अनुभव एवं Google समीक्षाएं
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-3 font-hindi">
            हजारों संतुष्ट परिवारों का {DOCTOR_NAME} के होम्योपैथिक उपचार पर भरोसा
          </p>
        </div>

        {/* ── Official Google Review QR Code Feature Banner ── */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-xl mb-14 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            
            {/* QR Image Box */}
            <div className="w-48 sm:w-56 flex-shrink-0 bg-gradient-to-b from-gray-50 to-emerald-50/40 p-4 rounded-2xl border-2 border-dashed border-emerald-200 text-center shadow-inner">
              <img 
                src="/images/qr/google-review-qr-scanner.jpg" 
                alt="Scan to Rate Us on Google - Dr Rajesh Pathak MD"
                className="w-full h-auto object-contain rounded-xl shadow"
              />
              <span className="inline-block mt-2 text-[11px] font-bold text-emerald-800 font-hindi">
                📷 Google Lens से स्कैन करें
              </span>
            </div>

            {/* QR Info & Text */}
            <div className="space-y-4 text-center md:text-left font-hindi">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Google Verified Reviews
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
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
                  Google पर रेटिंग दें <ExternalLink className="w-3.5 h-3.5" />
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


        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <Quote className="w-10 h-10 text-emerald-100 absolute top-6 right-6 -z-0" />
              
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-gray-700 font-hindi leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              {/* Patient Info */}
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-600 to-primary-800 text-white font-bold flex items-center justify-center text-sm shadow">
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                    <p className="text-xs text-gray-500">{item.city}, भारत</p>
                  </div>
                </div>

                <span className="px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-full text-[11px] font-semibold border border-emerald-100">
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
