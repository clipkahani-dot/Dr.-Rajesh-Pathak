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
            <span>{GOOGLE_RATING} / 5.0 Google Rating (Surat, Gujarat)</span>
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

        {/* ── Top Row: Real Video Testimonial + Google QR Code Scanner ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          
          {/* Left: Authentic Patient Video Testimonial (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 border-2 border-emerald-200 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-950 rounded-full text-xs font-bold border border-emerald-300">
                  <Video className="w-3.5 h-3.5 text-emerald-700" />
                  Real Patient Video Testimonial
                </span>
                <span className="text-xs font-bold text-amber-500 flex items-center gap-1">
                  ★ 5.0 Verified Story
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 font-hindi">
                मरीज का वीडियो अनुभव (Patient Story)
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-hindi leading-relaxed">
                देखें कि कैसे डॉ. राजेश पाठक के होम्योपैथिक इलाज और 2-घंटे की विस्तृत केस-टेकिंग से मरीज को स्थायी स्वास्थ्य लाभ प्राप्त हुआ।
              </p>
            </div>

            {/* Video Player */}
            <div className="mt-4 rounded-2xl overflow-hidden shadow-inner border border-gray-200 bg-black aspect-video relative group">
              <video 
                controls 
                preload="metadata"
                className="w-full h-full object-contain"
                poster="/images/banner/poster-banner.jpg"
              >
                <source src="/videos/patient-testimonials.mp4" type="video/mp4" />
                आपका ब्राउज़र वीडियो सपोर्ट नहीं करता।
              </video>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-hindi">
              <span className="flex items-center gap-1 text-emerald-800 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 100% प्रमाणिक मरीज समीक्षा
              </span>
              <span>क्लीनिकल रिकॉर्ड</span>
            </div>
          </div>

          {/* Right: Official Google Review QR Code Feature Banner (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 border-2 border-amber-200 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-950 rounded-full text-xs font-bold border border-amber-300">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Google Verified Reviews
                </span>
                <span className="text-xs font-bold text-gray-500">Google Maps Surat</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 font-hindi">
                Google पर अपनी रेटिंग एवं फीडबैक दें
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-hindi leading-relaxed">
                अपने मोबाइल कैमरे या Google Lens से क्यूआर कोड को स्कैन करें और सीधे Google Maps पर अपनी रेटिंग व समीक्षा दर्ज करें।
              </p>
            </div>

            {/* QR Image Box + Action */}
            <div className="mt-4 flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-amber-50/70 to-yellow-50/70 p-4 rounded-2xl border border-amber-200">
              <div className="w-36 sm:w-40 flex-shrink-0 bg-white p-2 rounded-xl border-2 border-dashed border-amber-400 text-center shadow-sm">
                <img 
                  src="/images/qr/google-review-qr-scanner.jpg" 
                  alt="Scan to Rate Us on Google - Dr Rajesh Pathak MD"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <span className="inline-block mt-1 text-[10px] font-bold text-amber-950 font-hindi">
                  📷 Scan with Lens
                </span>
              </div>

              <div className="space-y-3 text-center sm:text-left flex-1 font-hindi">
                <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-500 font-bold text-sm">
                  {'★'.repeat(5)} <span className="text-gray-900 text-xs ml-1 font-mono">({GOOGLE_RATING}★)</span>
                </div>
                <p className="text-xs text-gray-700 leading-snug">
                  आपका फीडबैक अन्य जरूरतमंद मरीजों को सही विशेषज्ञ चुनने में मार्गदर्शन करता है।
                </p>

                <div className="pt-1 flex flex-col gap-2">
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold shadow transition flex items-center justify-center gap-1.5"
                  >
                    <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
                    Google Maps पर रिव्यू लिखें <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-300 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    WhatsApp पर अनुभव भेजें
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-gray-500 font-hindi text-center sm:text-left">
              ⭐ 100% पारदर्शी और निष्पक्ष मरीज समीक्षा प्रणाली
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
