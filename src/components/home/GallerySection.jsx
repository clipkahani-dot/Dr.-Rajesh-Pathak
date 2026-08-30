import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, FileCheck2, Building2, MapPin, Sparkles, X, ZoomIn, GraduationCap, CheckCircle2 } from 'lucide-react'

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryItems = [
    // ── 1. Official Academic & Clinical Certificates (User Provided) ──
    {
      src: '/images/certificates/md-degree-university.jpg',
      title: 'Doctor of Medicine (M.D. Homoeopathic) Degree',
      subtitle: 'Hemchandracharya North Gujarat University, Patan — Homoeopathic Medical College, Baroda (Specialty: Homoeopathic Repertory)',
      tag: '🎓 Official M.D. Degree',
      category: 'certificates',
      location: 'Gujarat, India',
      featured: true
    },
    {
      src: '/images/certificates/nch-ccrh-clinical-research.jpg',
      title: 'National Commission for Homoeopathy (NCH) & CCRH',
      subtitle: 'Homoeopathy Education Board & Central Council for Research in Homoeopathy (Govt. of India) — Clinical Research Methods',
      tag: '🏛️ Govt. of India / NCH',
      category: 'certificates',
      location: 'New Delhi',
      featured: true
    },
    {
      src: '/images/certificates/homeopathy-360-authorship.jpg',
      title: 'Certificate of Authorship — Homeopathy 360',
      subtitle: 'Recognized Author & Researcher for "Fifty Millesimal Potency: Scope & Utility - A Case Report" (B. Jain Publishers)',
      tag: '📚 Published Author & Research',
      category: 'certificates',
      location: 'International / India',
      featured: true
    },
    {
      src: '/images/certificates/vnsgu-physics-health-camp.jpg',
      title: 'Veer Narmad South Gujarat University (Dept. of Physics)',
      subtitle: 'Certificate of Appreciation presented to Dr. Rajesh Pathak as Camp Coordinator & Assistant Professor (CD Pachchigar College)',
      tag: '🏥 University Camp Coordinator',
      category: 'certificates',
      location: 'Surat, Gujarat',
      featured: true
    },
    {
      src: '/images/certificates/vnsgu-law-health-camp.jpg',
      title: 'Veer Narmad South Gujarat University (Dept. of Law)',
      subtitle: 'Certificate of Appreciation presented for Free Health Checkup & Diagnostic Camp for Community Welfare',
      tag: '⚖️ VNSGU Law Dept.',
      category: 'certificates',
      location: 'Surat, Gujarat',
      featured: true
    },
    {
      src: '/images/certificates/mygov-social-justice.jpg',
      title: 'Ministry of Social Justice & Empowerment (Govt. of India)',
      subtitle: 'National Certificate of Participation — Nasha Mukt Bharat Abhiyaan (Drug-Free India Movement)',
      tag: '🇮🇳 Govt. of India Initiative',
      category: 'certificates',
      location: 'New Delhi',
      featured: false
    },
    {
      src: '/images/certificates/world-homeopathy-day-honor.jpg',
      title: 'World Homeopathy Day National Recognition',
      subtitle: 'Special felicitation for holistic healthcare & gentlest cure philosophy in classical Homeopathy',
      tag: '🌟 National Recognition',
      category: 'certificates',
      location: 'India',
      featured: false
    },
    {
      src: '/images/gallery/conference-award-stage.jpg',
      title: 'Medical Conference Honor & Stage Award',
      subtitle: 'Felicitation by Senior Doctors & Professors at Homoeopathic Scientific Seminar',
      tag: '🏆 Excellence Award',
      category: 'certificates',
      location: 'Gujarat',
      featured: false
    },
    {
      src: '/images/gallery/award-handover-ceremony.jpg',
      title: 'Academic Felicitation & Service Award',
      subtitle: 'Honored for 18+ years of dedicated service in Homeopathic Medical Education',
      tag: '🎖️ Academic Honor',
      category: 'certificates',
      location: 'Surat',
      featured: false
    },
    {
      src: '/images/gallery/felicitation-ceremony-1.jpg',
      title: 'Community Healthcare Felicitation',
      subtitle: 'Traditional Shawl & Trophy honor by senior medical practitioners and social leaders',
      tag: '🎗️ Community Honor',
      category: 'certificates',
      location: 'Gujarat',
      featured: false
    },

    // ── 2. Hospitals, Clinics & Team Activities ──
    {
      src: '/images/gallery/university-team-surat.jpg',
      title: 'Medical College Faculty & Student Doctors Team',
      subtitle: 'Veer Narmad South Gujarat University & CD Pachchigar College Medical Team',
      tag: '👨‍⚕️ Medical College Team',
      category: 'clinics',
      location: 'Surat, Gujarat',
      featured: false
    },
    {
      src: '/images/gallery/aditya-hospital-pimpri.jpg',
      title: 'Aditya Homoeopathic Hospital & Healing Centre',
      subtitle: 'Clinical Case Discussion with Senior Physicians & Hospital Directors',
      tag: '🏥 Hospital Affiliation',
      category: 'clinics',
      location: 'Pimpri, Maharashtra',
      featured: false
    },
    {
      src: '/images/gallery/agra-clinical-office.jpg',
      title: 'Clinical Discussion & Specialist Advisory Chamber',
      subtitle: 'Senior Homeopathic Specialists Clinical Consultation Session for Chronic Cases',
      tag: '🏢 Clinical Advisory',
      category: 'clinics',
      location: 'Agra, UP',
      featured: false
    },
    {
      src: '/images/gallery/greater-noida-medical-team.jpg',
      title: 'Multi-Specialty Medical Team & Healthcare Camp',
      subtitle: 'Inter-disciplinary health camp & holistic medicine awareness drive',
      tag: '👥 Healthcare Team',
      category: 'clinics',
      location: 'Greater Noida, UP',
      featured: false
    },
    {
      src: '/images/gallery/clinical-consultation-room.jpg',
      title: 'Clinical Case Taking & Consultation Chamber',
      subtitle: 'Specialized 2-hour case taking chamber for chronic neurological, spine & bone disorders',
      tag: '🩺 Consulting Chamber',
      category: 'clinics',
      location: 'Maharashtra',
      featured: false
    },
    {
      src: '/images/doctor/dr-rajesh-pathak-mission.jpg',
      title: 'Dedicated to Humanity Through Homeopathy',
      subtitle: '"मानवता की सेवा ही सबसे बड़ा धर्म है" — डॉ. राजेश पाठक (M.D. Homoeopathy)',
      tag: '🌿 Mission & Philosophy',
      category: 'clinics',
      location: 'Surat',
      featured: false
    }
  ]

  const filteredItems = galleryItems.filter(item => 
    activeCategory === 'all' || item.category === activeCategory
  )

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-gray-50/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 mb-3 shadow-sm">
            <Award className="w-4 h-4 text-amber-600" />
            100+ प्रमाण पत्र एवं शैक्षणिक सम्मान (100+ Certificates & Degrees)
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-hindi">
            प्रमाणित योग्यता, विश्वविद्यालय उपाधियाँ एवं सम्मान
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-3 font-hindi">
            डॉ. राजेश पाठक के पास <strong>100 से अधिक</strong> राष्ट्रीय, विश्वविद्यालयीन एवं चिकित्सा अनुसंधान प्रमाण पत्र हैं। यहाँ प्रमुख आधिकारिक प्रमाण पत्र प्रदर्शित हैं:
          </p>
        </div>

        {/* ── Highlight Banner: 100+ Certificates & MD Verification ── */}
        <div className="bg-gradient-to-r from-emerald-900 via-primary-950 to-emerald-900 text-white rounded-3xl p-6 sm:p-8 mb-12 shadow-xl border border-emerald-700/60 flex flex-col md:flex-row items-center justify-between gap-6 font-hindi">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 text-emerald-200 rounded-full text-xs font-bold">
              <GraduationCap className="w-4 h-4" /> University Verified M.D. Qualification
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              हेमचंद्राचार्य उत्तर गुजरात यूनिवर्सिटी से मान्यता प्राप्त M.D. (Homoeopathy)
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl leading-relaxed">
              राष्ट्रीय होम्योपैथी आयोग (NCH), आयुष मंत्रालय भारत सरकार एवं प्रमुख विश्वविद्यालयों द्वारा प्रमाणित क्लिनिकल रिसर्च एवं 18+ वर्षों का मेडिकल कॉलेज प्रोफेसरी अनुभव।
            </p>
          </div>
          <div className="flex-shrink-0 text-center bg-white/10 px-6 py-4 rounded-2xl border border-white/20">
            <div className="text-3xl font-extrabold text-amber-400">100+</div>
            <div className="text-xs text-emerald-200 font-medium">सर्टिफिकेट्स एवं सम्मान</div>
          </div>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition font-hindi ${
              activeCategory === 'all'
                ? 'bg-emerald-700 text-white shadow-md scale-105'
                : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200 shadow-sm'
            }`}
          >
            सभी प्रमाण पत्र व तस्वीरें ({galleryItems.length})
          </button>
          
          <button
            onClick={() => setActiveCategory('certificates')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition font-hindi flex items-center gap-1.5 ${
              activeCategory === 'certificates'
                ? 'bg-emerald-700 text-white shadow-md scale-105'
                : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200 shadow-sm'
            }`}
          >
            <Award className="w-4 h-4 text-amber-500" />
            <span>M.D. डिग्री व प्रमाण पत्र (Certificates & Degrees)</span>
          </button>

          <button
            onClick={() => setActiveCategory('clinics')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition font-hindi flex items-center gap-1.5 ${
              activeCategory === 'clinics'
                ? 'bg-emerald-700 text-white shadow-md scale-105'
                : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200 shadow-sm'
            }`}
          >
            <Building2 className="w-4 h-4 text-emerald-600" />
            <span>अस्पताल, क्लीनिक व टीम (Hospitals & Team)</span>
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25 }}
                onClick={() => setSelectedImage(item)}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-200/80 transition-all duration-300 group flex flex-col justify-between cursor-pointer relative"
              >
                {/* Image Container with Zoom Hover Effect */}
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 bg-white/90 text-emerald-900 text-xs font-bold py-1.5 px-3 rounded-full shadow-lg flex items-center gap-1.5 transition-opacity">
                      <ZoomIn className="w-3.5 h-3.5" /> बड़ा करके देखें (Click to Zoom)
                    </span>
                  </div>

                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span className="bg-emerald-900/90 backdrop-blur-sm text-emerald-200 text-[11px] font-bold px-3 py-1 rounded-full shadow border border-emerald-700/50">
                      {item.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-gray-900/80 backdrop-blur-sm text-gray-200 text-[10px] font-medium px-2.5 py-1 rounded-md flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-400" /> {item.location}
                    </span>
                  </div>
                </div>

                {/* Text Info */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 text-base leading-snug group-hover:text-emerald-700 transition">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-600 mt-2 font-hindi leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between text-xs text-emerald-700 font-semibold font-hindi">
                    <span>सत्यापित प्रमाण पत्र</span>
                    <span className="flex items-center gap-1 text-[11px] text-gray-500">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Verified
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ── Modal Lightbox for Viewing Full Certificate ── */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl overflow-hidden max-w-4xl max-h-[90vh] shadow-2xl flex flex-col relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 w-9 h-9 bg-gray-900/80 hover:bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg transition"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Full Image */}
                <div className="flex-1 overflow-auto bg-gray-100 p-2 sm:p-4 flex items-center justify-center">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-md"
                  />
                </div>

                {/* Image Details in Modal */}
                <div className="p-6 bg-white border-t border-gray-100">
                  <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full mb-2">
                    {selectedImage.tag} • {selectedImage.location}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {selectedImage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 font-hindi">
                    {selectedImage.subtitle}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
