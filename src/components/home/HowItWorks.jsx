import { motion } from 'framer-motion'
import { 
  CreditCard, 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Sparkles 
} from 'lucide-react'
import WhatsAppIcon from '../ui/WhatsAppIcon'

import { WHATSAPP_URL, CONSULTATION_FEE } from '../../utils/constants'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      badge: 'फ्री स्टेप (FREE)',
      badgeColor: 'bg-emerald-100 text-emerald-950 border-2 border-emerald-400 font-bold',
      title: 'Book Appointment & Primary Info',
      desc: 'WhatsApp पर अपनी समस्या एवं लक्षणों की प्राथमिक जानकारी साझा करें। हमारी मेडिकल टीम आपसे सीधे संपर्क कर विवरण दर्ज करेगी।',
      icon: WhatsAppIcon,
      iconBg: 'bg-[#25D366]',
      timing: 'Instant Response'
    },

    {
      number: '02',
      badge: 'सुरक्षित पेमेंट',
      badgeColor: 'bg-amber-100 text-amber-950 border-2 border-amber-400 font-bold',
      title: `Confirm Appointment (${CONSULTATION_FEE})`,
      desc: `परामर्श हेतु मात्र ${CONSULTATION_FEE} शुल्क का ऑनलाइन (UPI/GPay/PhonePe) भुगतान करें। इसके बाद विस्तृत केस-टेकिंग शुरू होगी।`,
      icon: CreditCard,
      iconBg: 'bg-gradient-to-br from-amber-500 to-yellow-600',
      timing: 'Secure UPI / Gateway'
    },
    {
      number: '03',
      badge: 'विशेषज्ञ समाधान',
      badgeColor: 'bg-red-100 text-red-950 border-2 border-red-400 font-bold',
      title: 'Detailed Case Study & Guidance',
      desc: 'एक्सपर्ट डॉक्टर आपकी समस्या और रिपोर्ट्स का 2 घंटे गहन अध्ययन कर प्रमाणित होम्योपैथिक प्रिस्क्रिप्शन PDF व क्लिनिकल मार्गदर्शन प्रदान करेंगे।',
      icon: FileText,
      iconBg: 'bg-gradient-to-br from-red-600 to-rose-700',
      timing: '2 घंटे की विस्तृत केस स्टडी'
    }
  ]


  return (
    <section id="process" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
            ✨ अपॉइंटमेंट प्रक्रिया (Appointment & Consultation Workflow)
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-hindi">
            3 आसान स्टेप्स में अपॉइंटमेंट बुक करें एवं परामर्श पाएं
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-3 font-hindi">
            आसान, सुविधाजनक, सुरक्षित और समय की 100% बचत
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={idx}
                className="bg-gray-50/80 rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:bg-white hover:border-emerald-200 transition-all duration-300 relative flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                {/* Step Top */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${step.iconBg} text-white flex items-center justify-center shadow-md`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-4xl font-extrabold text-gray-200 font-mono">
                      {step.number}
                    </span>
                  </div>

                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-3 ${step.badgeColor} font-hindi`}>
                    {step.badge}
                  </span>

                  <h3 className="text-xl font-bold text-gray-900 font-hindi mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-600 font-hindi leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Step Bottom Info */}
                <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center gap-2 text-xs font-medium text-gray-500">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{step.timing}</span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* WhatsApp Automation Message Preview Box */}
        <div className="mt-14 max-w-3xl mx-auto bg-emerald-50/60 rounded-3xl p-6 sm:p-8 border border-emerald-200 shadow-sm font-hindi">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow">
              <WhatsAppIcon className="w-5 h-5" />
            </div>


            <div>
              <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                WhatsApp ऑटोमेशन मैसेज पूर्वावलोकन (Automation Preview)
              </h4>
              <p className="text-xs text-gray-500">
                जब आप संपर्क करेंगे तो आपको यह पहला संदेश प्राप्त होगा:
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-emerald-100 shadow-inner text-xs sm:text-sm text-gray-800 space-y-2 leading-relaxed">
            <p className="font-semibold text-emerald-800">
              "नमस्ते सर 🙏 होम्योपैथिक परामर्श के लिए संपर्क करने हेतु धन्यवाद। मैं डॉ. राजेश पाठक की टीम से हूँ..."
            </p>
            <p className="text-gray-600">
              "होम्योपैथी में उपचार आपके लक्षणों, दर्द की प्रकृति और व्यक्तिगत प्रकृति के अनुसार 2 घंटे की केस-टेकिंग के बाद किया जाता है। पहला परामर्श ₹500 शुल्क के साथ शुरू होगा।"
            </p>
          </div>

          <div className="mt-6 text-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm sm:text-base py-3.5 px-8 shadow-lg inline-flex items-center gap-2"
            >
              <span>Book Appointment on WhatsApp ({CONSULTATION_FEE})</span>

              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
