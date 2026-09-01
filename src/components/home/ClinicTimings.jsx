import { Clock, MapPin, Calendar, CheckCircle2, Phone, ExternalLink } from 'lucide-react'
import { CLINIC_TIMINGS, PHONE_PRIMARY, PHONE_PRIMARY_DISPLAY, MAPS_LINK } from '../../utils/constants'

export default function ClinicTimings() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
            🏥 Consulting Time & Venue (Online / Offline)
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 font-hindi">
            चिकित्सा परामर्श का समय व स्थान (ऑनलाइन/ऑफलाइन)
          </h2>
          <p className="text-base sm:text-lg text-emerald-800 font-hindi font-bold mt-2">
            ऑफलाइन क्लीनिक विजिट या पूरे भारत में ऑनलाइन वीडियो/व्हाट्सएप परामर्श
          </p>
        </div>


        {/* 4 Timings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLINIC_TIMINGS.map((item, idx) => (
            <div 
              key={idx}
              className={`rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                idx === 3 
                  ? 'bg-gradient-to-b from-emerald-900 to-primary-950 text-white border-emerald-800 shadow-xl' 
                  : 'bg-gray-50/80 hover:bg-white text-gray-900 border-gray-100 hover:border-emerald-200 shadow-sm hover:shadow-lg'
              }`}
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
                  idx === 3 ? 'bg-emerald-500/20 text-emerald-300' : 'bg-emerald-100 text-emerald-700'
                }`}>
                  <Clock className="w-6 h-6" />
                </div>

                <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                  idx === 3 ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-700'
                }`}>
                  {item.days}
                </span>

                <h3 className={`text-lg font-bold mt-3 leading-snug font-hindi ${
                  idx === 3 ? 'text-white' : 'text-gray-900'
                }`}>
                  {item.clinic}
                </h3>

                <div className={`text-sm font-semibold mt-3 flex items-center gap-1.5 ${
                  idx === 3 ? 'text-emerald-300' : 'text-emerald-700'
                }`}>
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <span>{item.timings}</span>
                </div>

                <div className={`text-xs mt-3 flex items-start gap-1.5 leading-relaxed ${
                  idx === 3 ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{item.address}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200/40">
                <a 
                  href={`tel:${PHONE_PRIMARY}`} 
                  className={`text-xs font-bold inline-flex items-center gap-1 transition ${
                    idx === 3 ? 'text-emerald-300 hover:underline' : 'text-emerald-700 hover:text-emerald-900'
                  }`}
                >
                  <Phone className="w-3.5 h-3.5" /> अप्वाइंटमेंट बुक करें
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
