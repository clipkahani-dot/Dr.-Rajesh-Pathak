import { 
  Home, 
  Award, 
  FileCheck2, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Users, 
  CircleDollarSign 
} from 'lucide-react'
import { CONSULTATION_FEE } from '../../utils/constants'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Home,
      title: 'घर बैठे ऑनलाइन सुविधा',
      desc: 'डॉक्टर को दिखाने के लिए अस्पताल में घंटों लाइन में लगने की आवश्यकता नहीं। अपने घर या ऑफिस से आराम से परामर्श लें।',
      color: 'bg-emerald-100 text-emerald-700'
    },
    {
      icon: Award,
      title: '18+ वर्षों का समृद्ध अनुभव',
      desc: 'डॉ. राजेश पाठक M.D. (Hom.) एवं 10+ डॉक्टरों की टीम द्वारा हजारों जटिल केसों का सफल उपचार किया जा चुका है।',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      icon: FileCheck2,
      title: '2 घंटे की गहन केस-टेकिंग',
      desc: 'हम जल्दबाजी में दवा नहीं देते। मरीज के शारीरिक-मानसिक लक्षणों, जीवनशैली और रिपोर्ट्स का 2 घंटे विस्तृत अध्ययन किया जाता है।',
      color: 'bg-purple-100 text-purple-700'
    },
    {
      icon: CircleDollarSign,
      title: `पारदर्शी एवं उचित शुल्क (${CONSULTATION_FEE})`,
      desc: `मात्र ${CONSULTATION_FEE} में विस्तृत केस-टेकिंग, व्यक्तिगत अध्ययन और WhatsApp पर मूल प्रिस्क्रिप्शन PDF उपलब्ध कराया जाता है।`,
      color: 'bg-amber-100 text-amber-700'
    },
    {
      icon: Clock,
      title: 'सुबह 9 से रात 9 बजे तक',
      desc: 'सप्ताह के सभी 7 दिन ऑनलाइन परामर्श उपलब्ध रहता है, जिससे आप अपनी सुविधानुसार समय चुन सकते हैं।',
      color: 'bg-teal-100 text-teal-700'
    },
    {
      icon: ShieldCheck,
      title: '100% सुरक्षित एवं प्राकृतिक',
      desc: 'होम्योपैथी में कोई हानिकारक केमिकल या साइड-इफेक्ट नहीं होता। यह शरीर की रोग प्रतिरोधक क्षमता को स्वाभाविक रूप से मजबूत बनाती है।',
      color: 'bg-rose-100 text-rose-700'
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
            ⭐ हमें ही क्यों चुनें ? (Why Choose Us ?)
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 font-hindi">
            डॉ. राजेश पाठक एवं उनकी टीम पर क्यों भरोसा करें?
          </h2>
          <p className="text-base sm:text-lg text-emerald-800 font-bold mt-2 font-hindi">
            सटीक होम्योपैथिक निदान, व्यक्तिगत देखभाल और विश्वसनीय परिणाम
          </p>

        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon
            return (
              <div 
                key={idx}
                className="bg-gray-50/70 hover:bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition shadow-sm`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 font-hindi mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 font-hindi leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/50 text-xs font-semibold text-emerald-700 flex items-center gap-1">
                  ✓ प्रमाणित होम्योपैथिक सेवा
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
