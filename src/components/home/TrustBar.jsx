import { Award, Users, Clock, Star, ShieldCheck, HeartPulse } from 'lucide-react'
import { GOOGLE_RATING } from '../../utils/constants'

export default function TrustBar() {
  const stats = [
    {
      icon: Award,
      value: '18+ वर्ष',
      label: 'चिकित्सा अनुभव',
      sub: 'Clinical Experience'
    },
    {
      icon: Users,
      value: '10+ डॉक्टर्स',
      label: 'विशेषज्ञ टीम',
      sub: 'Expert Homeopaths'
    },
    {
      icon: HeartPulse,
      value: '1000+ मरीज',
      label: 'सफलतापूर्वक उपचार',
      sub: 'Happy Patients'
    },
    {
      icon: Clock,
      value: '9 AM - 9 PM',
      label: 'प्रतिदिन परामर्श',
      sub: '7 Days Open'
    },
    {
      icon: Star,
      value: `${GOOGLE_RATING} ★ Rating`,
      label: 'Google Reviews',
      sub: 'Surat, Gujarat'
    }
  ]


  return (
    <section className="bg-primary-900 text-white py-8 border-y border-primary-800 relative z-20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center">
          {stats.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="flex items-center gap-3.5 group">
                <div className="w-12 h-12 rounded-xl bg-primary-800/80 border border-primary-700 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-primary-700 transition flex-shrink-0 shadow-inner">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-extrabold text-white leading-tight">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-emerald-300 font-hindi">
                    {item.label}
                  </div>
                  <div className="text-[10px] text-gray-400 font-medium">
                    {item.sub}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
