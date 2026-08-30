import { motion } from 'framer-motion'
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  CreditCard, 
  EyeOff, 
  AlertCircle, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import { 
  DOCTOR_NAME, 
  DOCTOR_QUALIFICATION, 
  PHONE_PRIMARY, 
  PHONE_PRIMARY_DISPLAY, 
  EMAIL, 
  PRIMARY_ADDRESS, 
  WHATSAPP_URL, 
  CONSULTATION_FEE 
} from '../../utils/constants'

export default function PrivacyPolicy({ setActiveTab }) {
  const sections = [
    {
      id: 'confidentiality',
      icon: Lock,
      title: '1. मरीज-डॉक्टर गोपनीयता नीति (Patient-Doctor Confidentiality)',
      content: `डॉ. राजेश पाठक क्लिनिक में मरीज की गोपनीयता हमारे लिए सर्वोच्च प्राथमिकता है। जब आप ऑनलाइन या ऑफलाइन परामर्श लेते हैं, तो आपकी सभी स्वास्थ्य संबंधी जानकारी (लक्षण, पूर्व बीमारियां, पैथोलॉजी रिपोर्ट, पारिवारिक इतिहास एवं व्यक्तिगत विवरण) पूर्णतः गोपनीय और सुरक्षित रखी जाती है। यह जानकारी केवल आपके उपचार और सही दवा के चयन के लिए उपयोग की जाती है।`
    },
    {
      id: 'data-collection',
      icon: FileText,
      title: '2. हम कौन सी जानकारी एकत्र करते हैं? (Information We Collect)',
      content: `परामर्श की प्रक्रिया को प्रभावी बनाने के लिए हम निम्नलिखित आवश्यक विवरण लेते हैं:
      • व्यक्तिगत विवरण: आपका नाम, आयु, लिंग, शहर/राज्य और फोन नंबर।
      • स्वास्थ्य विवरण: मुख्य शिकायतें, लक्षणों की अवधि, पूर्व उपचार, दवाइयां और मेडिकल रिपोर्ट्स।
      • परामर्श शुल्क पुष्टि: ₹500 परामर्श शुल्क का भुगतान संदर्भ (Transaction ID / UTR)।`
    },
    {
      id: 'use-of-info',
      icon: ShieldCheck,
      title: '3. आपकी जानकारी का उपयोग कैसे होता है? (Use of Information)',
      content: `एकत्रित की गई जानकारी का उपयोग केवल निम्नलिखित चिकित्सा उद्देश्यों के लिए किया जाता है:
      • 2 घंटे की विस्तृत केस-टेकिंग (Detailed Repertorization & Case Study)।
      • सटीक होम्योपैथिक पोटेंसी और दवा का निर्धारण।
      • WhatsApp पर अधिकृत डिजिटल प्रिस्क्रिप्शन (PDF) तैयार कर भेजना।
      • भविष्य में फॉलो-अप और स्वास्थ्य सुधार की प्रगति को ट्रैक करना।`
    },
    {
      id: 'no-sharing',
      icon: EyeOff,
      title: '4. थर्ड-पार्टी शेयरिंग पर पूर्ण प्रतिबंध (Zero Data Sharing)',
      content: `हम किसी भी परिस्थिति में मरीज की व्यक्तिगत पहचान या स्वास्थ्य डेटा किसी भी थर्ड-पार्टी, मार्केटिंग एजेंसी, फार्मास्युटिकल कंपनी या विज्ञापनदाताओं को नहीं बेचते और न ही साझा करते हैं। आपकी बातचीत और रिपोर्ट्स केवल डॉ. राजेश पाठक और उनकी अधिकृत मेडिकल टीम तक ही सीमित रहती है।`
    },
    {
      id: 'payment-security',
      icon: CreditCard,
      title: '5. ऑनलाइन पेमेंट एवं सुरक्षा (Payment & Security Policy)',
      content: `• परामर्श शुल्क मात्र ₹500 (Non-refundable after detailed case-taking) है।
      • भुगतान सुरक्षित बैंक UPI, Google Pay, PhonePe, Paytm या बैंक ट्रांसफर के माध्यम से सीधे लिया जाता है।
      • हम मरीज के किसी भी कार्ड, बैंक पिन या पासवर्ड की जानकारी कभी नहीं मांगते और न ही स्टोर करते हैं।`
    },
    {
      id: 'whatsapp-policy',
      icon: WhatsAppIcon,
      title: '6. WhatsApp संचार एवं डिजिटल प्रिस्क्रिप्शन (WhatsApp Consultation)',
      content: `ऑनलाइन परामर्श WhatsApp के आधिकारिक नंबर (+91 91069 47508 / +91 97145 16655) के माध्यम से दिया जाता है। डॉक्टर द्वारा जारी किया गया प्रिस्क्रिप्शन PDF मरीज के निजी WhatsApp चैट पर सुरक्षित भेजा जाता है। मरीज को सलाह दी जाती है कि वे अपने प्रिस्क्रिप्शन की प्रति अपने पास सुरक्षित रखें।`
    },
    {
      id: 'disclaimer',
      icon: AlertCircle,
      title: '7. चिकित्सा डिस्क्लेमर (Medical & Emergency Disclaimer)',
      content: `• होम्योपैथी एक प्राकृतिक, सुरक्षित और वैज्ञानिक चिकित्सा पद्धति है जो लक्षणों और समग्र व्यक्तित्व के आधार पर कार्य करती है।
      • आपातकालीन स्थितियां (जैसे गंभीर सड़क दुर्घटना, एक्यूट हार्ट अटैक, सांस का अचानक रुकना आदि) में मरीज को तुरंत नजदीकी इमरजेंसी आईसीयू अस्पताल में संपर्क करना चाहिए।
      • ऑनलाइन परामर्श विस्तृत केस-हिस्ट्री के आधार पर दिया जाता है, दवा का सेवन केवल डॉक्टर द्वारा निर्देशित मात्रा और समय पर ही करें।`
    }
  ]

  return (
    <div className="py-12 sm:py-20 bg-gray-50/70 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xl mb-10 text-center font-hindi">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-4 shadow-inner">
            <ShieldCheck className="w-9 h-9 text-emerald-700" />
          </div>
          
          <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-800 text-xs sm:text-sm font-bold rounded-full border border-emerald-200 mb-3">
            🔒 100% गोपनीय एवं सुरक्षित (Patient Privacy & Terms)
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            गोपनीयता नीति एवं सेवा शर्तें (Privacy Policy)
          </h1>
          
          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto mt-3 leading-relaxed">
            {DOCTOR_NAME} ({DOCTOR_QUALIFICATION}) क्लिनिक में आपकी स्वास्थ्य जानकारी, व्यक्तिगत विवरण एवं परामर्श की पूर्ण सुरक्षा हमारी नैतिक एवं चिकित्सकीय जिम्मेदारी है।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 pt-6 border-t border-gray-100 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> अंतिम अपडेट: अगस्त 2026
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> चिकित्सा आचार संहिता का अनुपालन
            </span>
          </div>
        </div>

        {/* Policy Sections Accordion / Cards */}
        <div className="space-y-6">
          {sections.map((section, index) => {
            const Icon = section.icon
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition font-hindi"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-100">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-grow space-y-2">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                      {section.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Contact for Privacy Questions */}
        <div className="mt-12 bg-gradient-to-r from-emerald-900 to-primary-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl font-hindi text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 border border-emerald-800">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold">
              गोपनीयता या परामर्श संबंधी कोई प्रश्न है?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200">
              हमारी मेडिकल टीम आपकी सहायता के लिए सदैव उपलब्ध है।
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-emerald-100">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" /> {PHONE_PRIMARY_DISPLAY}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" /> {EMAIL}
              </span>
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm py-3 px-6 shadow-xl flex items-center gap-2 flex-shrink-0"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span>WhatsApp पर बात करें</span>
          </a>
        </div>

      </div>
    </div>
  )
}
