import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  Building2, 
  BookOpen, 
  Heart, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink,
  Target,
  Eye,
  Compass,
  Sparkles,
  MapPin
} from 'lucide-react'

import WhatsAppIcon from '../ui/WhatsAppIcon'

import { 
  DOCTOR_NAME, 
  DOCTOR_QUALIFICATION, 
  DOCTOR_DESIGNATION, 
  WHATSAPP_URL, 
  MAPS_LINK,
  DOCTOR_MISSION,
  DOCTOR_VISION,
  DOCTOR_TARGET
} from '../../utils/constants'


export default function AboutDoctor() {
  const highlights = [
    {
      title: 'शैक्षणिक योग्यता एवं पद',
      desc: 'Classical M.D. (Homoeopath) & Assistant Professor in Homoeopathy Medical College, Surat',
      icon: GraduationCap

    },
    {
      title: '18+ वर्षों का अनुभव',
      desc: 'Asthma, Arthritis, Cancer, Diabetes, Dyslipidemia, Thyroid & Hypertension में विशेषज्ञता',
      icon: ShieldCheck
    },
    {
      title: 'लेखक, वक्ता एवं शोधकर्ता',
      desc: 'Author | Lecturer | Researcher in Homeopathic Medical Science',
      icon: BookOpen
    },
    {
      title: 'हॉस्पिटल सेवाएं',
      desc: 'CD Pachchigar Medical College Hospital, Vibrant Hospital एवं Swastik Hospital, Surat',
      icon: Building2
    }
  ]

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
            👨‍⚕️ डॉक्टर परिचय (Doctor Profile)
          </span>
          <div className="space-y-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              {DOCTOR_NAME}
            </h2>
            <p className="text-xl sm:text-2xl font-bold text-emerald-700 tracking-wide uppercase">
              {DOCTOR_QUALIFICATION}
            </p>
          </div>


          <p className="text-base sm:text-lg text-gray-600 mt-3 font-hindi">
            "मानवता की सेवा ही सबसे बड़ा धर्म है" — प्राकृतिक, सुरक्षित और वैज्ञानिक होम्योपैथिक उपचार
          </p>
        </div>

        {/* 2 Column Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Collage / Poster with real photo (5 cols) */}
          <motion.div 
            className="lg:col-span-5 space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-50">
              <img 
                src="/images/banner/poster-banner.jpg" 
                alt={`${DOCTOR_NAME} Message`}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Motivational Quote Banner */}
            <div className="bg-emerald-900 text-white p-5 rounded-2xl shadow-lg border border-emerald-800 font-hindi">
              <p className="text-sm italic leading-relaxed text-emerald-100">
                "हमारा उद्देश्य — आपको बेहतर स्वास्थ्य, सही मार्गदर्शन और दीर्घकालिक समाधान देना। जब भी आवश्यकता हो, हम आपके साथ हैं।"
              </p>
              <div className="text-xs font-bold text-emerald-400 mt-2 text-right">
                — {DOCTOR_NAME} M.D. (Hom.)
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Core Values (7 cols) */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="prose prose-emerald max-w-none text-gray-700 font-hindi space-y-4 text-base sm:text-lg leading-relaxed">
              <p>
                <strong>डॉ. राजेश पाठक</strong> सूरत (गुजरात) के जाने-माने क्लासिकल होम्योपैथिक चिकित्सक और <strong>होम्योपैथी मेडिकल कॉलेज में सहायक प्रोफेसर (Assistant Professor)</strong> हैं। 
              </p>
              <p>
                पिछले <strong>18+ वर्षों</strong> से वे और उनकी टीम जटिल, पुरानी (Chronic) और जीवनशैली से जुड़ी बीमारियों जैसे कि <em>अस्थमा, गठिया (Arthritis), डायबिटीज, उच्च रक्तचाप (Hypertension), थायरॉइड, ट्यूमर एवं कैंसर</em> के रोगियों को सुरक्षित और स्थायी राहत दिलाने में समर्पित हैं।
              </p>
              <p className="text-sm bg-emerald-50 p-4 rounded-xl border-l-4 border-emerald-600 text-emerald-950">
                <strong>होम्योपैथी का मूल सिद्धांत:</strong> होम्योपैथी में उपचार केवल बीमारी के नाम पर नहीं, बल्कि मरीज के मानसिक-शारीरिक लक्षणों, दर्द की प्रकृति और व्यक्तिगत स्वभाव (Individual Nature) के आधार पर किया जाता है।
              </p>
            </div>

            {/* 4 Highlight Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="bg-gray-50 hover:bg-emerald-50/70 p-4 rounded-2xl border border-gray-100 transition duration-300 flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm font-hindi">{item.title}</h4>
                      <p className="text-xs text-gray-600 mt-1 leading-snug font-hindi">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA in About */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm py-3 px-6 shadow-md flex items-center gap-2"
              >
                <WhatsAppIcon className="w-5 h-5" />
                डॉक्टर से परामर्श हेतु संपर्क करें
              </a>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm py-3 px-6 flex items-center gap-2"
              >
                <Building2 className="w-4 h-4 text-emerald-700" />
                क्लीनिक लोकेशन देखें
              </a>
            </div>

          </motion.div>

        </div>

        {/* ── Verified MD Degree & National Honors Showcase Row ── */}
        <div className="mt-16 bg-gradient-to-r from-emerald-50 via-gray-50 to-emerald-50 rounded-3xl p-6 sm:p-10 border border-emerald-200/80 shadow-md">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left font-hindi">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-600 text-white rounded-full text-xs font-bold shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5" /> 100+ Verified Certificates & Credentials
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                विश्वविद्यालय द्वारा मान्यता प्राप्त M.D. डिग्री एवं राष्ट्रीय शोध प्रमाण पत्र
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 max-w-2xl leading-relaxed">
                हेमचंद्राचार्य उत्तर गुजरात यूनिवर्सिटी से M.D. (Homoeopathic Repertory), राष्ट्रीय होम्योपैथी आयोग (NCH) नई दिल्ली एवं आयुष मंत्रालय द्वारा प्रमाणित शोधकर्ता।
              </p>
            </div>

            {/* Quick Certificate Previews */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2 flex-shrink-0">
              <div className="w-24 sm:w-28 rounded-xl overflow-hidden border-2 border-emerald-300 shadow-md bg-white p-1 hover:scale-105 transition">
                <img 
                  src="/images/certificates/md-degree-university.jpg" 
                  alt="M.D. Homoeopathic Degree Certificate" 
                  className="w-full h-auto object-cover rounded"
                />
                <p className="text-[9px] text-center font-bold text-gray-800 mt-1">M.D. Degree</p>
              </div>
              <div className="w-24 sm:w-28 rounded-xl overflow-hidden border-2 border-emerald-300 shadow-md bg-white p-1 hover:scale-105 transition">
                <img 
                  src="/images/certificates/nch-ccrh-clinical-research.jpg" 
                  alt="NCH CCRH Clinical Research Certificate" 
                  className="w-full h-auto object-cover rounded"
                />
                <p className="text-[9px] text-center font-bold text-gray-800 mt-1">NCH Research</p>
              </div>
              <div className="w-24 sm:w-28 rounded-xl overflow-hidden border-2 border-emerald-300 shadow-md bg-white p-1 hover:scale-105 transition">
                <img 
                  src="/images/certificates/vnsgu-physics-health-camp.jpg" 
                  alt="VNSGU University Appreciation Certificate" 
                  className="w-full h-auto object-cover rounded"
                />
                <p className="text-[9px] text-center font-bold text-gray-800 mt-1">VNSGU Honor</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mission, Vision & Target Section (Doctor Hahnemann's Organon of Medicine) ── */}
        <div className="mt-16 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-amber-400 to-yellow-400 text-amber-950 border border-amber-500 shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-900" />
              चिकित्सीय सिद्धांत एवं विज़न (Organon of Medicine)
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-hindi mt-2">
              हमारा मिशन, विज़न एवं सामाजिक लक्ष्य
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 font-hindi mt-1">
              डॉ. सैमुअल हैनिमैन के मौलिक होम्योपैथिक सिद्धांतों एवं 140+ करोड़ देशवासियों के स्वास्थ्य को समर्पित
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Mission Card (Aphorism 01) - Bright Saffron Amber */}
            <div className="bg-gradient-to-br from-amber-50/90 via-white to-yellow-50 rounded-3xl p-6 sm:p-7 border-2 border-amber-300 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-extrabold shadow-md">
                    <Target className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-amber-950 bg-amber-200/80 px-2.5 py-1 rounded-full border border-amber-300 font-mono">
                    {DOCTOR_MISSION.aphorism}
                  </span>
                </div>
                <h4 className="text-xl font-extrabold text-gray-900 mb-2 font-sans">
                  {DOCTOR_MISSION.title}
                </h4>
                <p className="text-sm font-semibold text-amber-950 italic leading-relaxed mb-3">
                  "{DOCTOR_MISSION.text}"
                </p>
              </div>
              <p className="text-xs text-gray-700 font-hindi pt-3 border-t border-amber-200/80 font-medium">
                {DOCTOR_MISSION.textHi}
              </p>
            </div>

            {/* Vision Card (Aphorism 02) - Bright Royal Blue */}
            <div className="bg-gradient-to-br from-blue-50/90 via-white to-cyan-50 rounded-3xl p-6 sm:p-7 border-2 border-blue-300 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-extrabold shadow-md">
                    <Eye className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-blue-950 bg-blue-200/80 px-2.5 py-1 rounded-full border border-blue-300 font-mono">
                    {DOCTOR_VISION.aphorism}
                  </span>
                </div>
                <h4 className="text-xl font-extrabold text-gray-900 mb-2 font-sans">
                  {DOCTOR_VISION.title}
                </h4>
                <p className="text-sm font-semibold text-blue-950 italic leading-relaxed mb-3">
                  "{DOCTOR_VISION.text}"
                </p>
              </div>
              <p className="text-xs text-gray-700 font-hindi pt-3 border-t border-blue-200/80 font-medium">
                {DOCTOR_VISION.textHi}
              </p>
            </div>

            {/* Target Card (65%-70% of India) - Bright Crimson Red */}
            <div className="bg-gradient-to-br from-rose-50/90 via-white to-red-50 rounded-3xl p-6 sm:p-7 border-2 border-rose-300 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 text-white flex items-center justify-center font-extrabold shadow-md">
                    <Compass className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-red-950 bg-red-200/80 px-2.5 py-1 rounded-full border border-red-300 font-mono">
                    {DOCTOR_TARGET.aphorism}
                  </span>
                </div>
                <h4 className="text-xl font-extrabold text-gray-900 mb-2 font-sans">
                  {DOCTOR_TARGET.title}
                </h4>
                <p className="text-sm font-semibold text-red-950 leading-relaxed mb-3">
                  "{DOCTOR_TARGET.text}"
                </p>
              </div>
              <p className="text-xs text-gray-700 font-hindi pt-3 border-t border-rose-200/80 font-medium">
                {DOCTOR_TARGET.textHi}
              </p>
            </div>

          </div>
        </div>

        {/* ── Hospital Showcase Section (अस्पताल देखें) ── */}
        <div className="mt-16 bg-white rounded-3xl p-6 sm:p-10 border-2 border-emerald-200 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-950 border border-emerald-300">
              <Building2 className="w-4 h-4 text-emerald-700" />
              अस्पताल एवं क्लीनिकल केंद्र (Hospital Infrastructure)
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-hindi mt-2">
              मुख्य अस्पताल: वाइब्रेंट हॉस्पिटल (Vibrant Hospital)
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 font-hindi mt-1">
              4th Floor, Syska Plaza, Priyanka Chokdi, Bhestan, Surat, Gujarat
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Hospital Real Building Photo */}
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border-2 border-emerald-300 shadow-md bg-gray-900 aspect-video sm:aspect-[4/3] relative group">
              <img 
                src="/images/gallery/vibrant-hospital-building.jpg" 
                alt="Vibrant Hospital Building - Syska Plaza Bhestan Surat" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute top-3 left-3 bg-red-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold shadow flex items-center gap-1.5">
                <span>+</span> VIBRANT HOSPITAL (Syska Plaza)
              </div>
              <div className="absolute bottom-3 left-3 right-3 bg-gray-950/80 backdrop-blur-sm text-white p-2.5 rounded-xl text-xs flex items-center justify-between">
                <span>📍 भेस्तान, सूरत (गुजरात)</span>
                <span className="text-amber-400 font-bold">IPD & OPD Center</span>
              </div>
            </div>

            {/* Hospital Details & Consultation Info */}
            <div className="lg:col-span-6 space-y-4 font-hindi">
              <div className="space-y-2">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  🏥 आधुनिक चिकित्सा सुविधा
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
                  इन-पेशेंट (IPD) एवं आउट-पेशेंट (OPD) होम्योपैथिक क्लिनिकल केयर
                </h4>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  वाइब्रेंट हॉस्पिटल में डॉ. राजेश पाठक MD और उनकी 10+ विशेषज्ञ डॉक्टरों की टीम द्वारा गंभीर एवं पुरानी बीमारियों के मरीजों को गहन क्लिनिकल परीक्षण, 2-घंटे की विस्तृत केस-टेकिंग और आवश्यकतानुसार अस्पताल में भर्ती (IPD) सुविधा प्रदान की जाती है।
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-emerald-50/80 p-3 rounded-xl border border-emerald-100">
                  <div className="text-xs font-bold text-emerald-950">⏰ क्लीनिक समय</div>
                  <div className="text-xs text-emerald-800 mt-0.5 font-semibold">शाम 6:00 PM से रात 8:00 PM</div>
                  <div className="text-[10px] text-gray-500">(अथवा पूर्व अपॉइंटमेंट द्वारा)</div>
                </div>
                <div className="bg-emerald-50/80 p-3 rounded-xl border border-emerald-100">
                  <div className="text-xs font-bold text-emerald-950">🌐 ऑनलाइन परामर्श</div>
                  <div className="text-xs text-emerald-800 mt-0.5 font-semibold">सुबह 9:00 AM – रात 9:00 PM</div>
                  <div className="text-[10px] text-gray-500">(All India WhatsApp / Video)</div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs py-2.5 px-5 shadow flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  Google Maps पर अस्पताल देखें
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-xs py-2.5 px-5 shadow flex items-center gap-1.5"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  हॉस्पिटल अपॉइंटमेंट बुक करें
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}



