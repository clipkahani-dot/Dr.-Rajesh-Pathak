import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  MessageCircle, 
  Sparkles, 
  CheckCircle2, 
  Quote, 
  ArrowRight, 
  HeartPulse,
  ShieldCheck,
  Stethoscope
} from 'lucide-react'

import { blogs } from '../../data/blogs'
import { 
  DOCTOR_NAME, 
  DOCTOR_QUALIFICATION, 
  WHATSAPP_URL, 
  CONSULTATION_FEE, 
  PHONE_PRIMARY_DISPLAY 
} from '../../utils/constants'

export default function BlogSection({ setActiveTab }) {
  // Currently active/selected blog (default to latest/featured)
  const [selectedBlog, setSelectedBlog] = useState(blogs[0])

  const handleShareWhatsApp = (blog) => {
    const text = `*${blog.titleHi}*\n\nलेखक: ${blog.author}\n\n👉 ब्लॉग पढ़ें: https://drrajeshpathak.com/\n\n"${blog.exactDoctorQuote}"`
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 via-white to-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 mb-3 shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
            <span>स्वास्थ्य एवं होम्योपैथी ब्लॉग श्रृंखला • डॉ. राजेश पाठक</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 font-hindi tracking-tight">
            चिकित्सीय मार्गदर्शन एवं स्वास्थ्य लेख
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 font-hindi">
            जानिए जटिल और पुरानी बीमारियों के स्थायी समाधान, सही खान-पान और शास्त्रीय होम्योपैथी के वैज्ञानिक सिद्धांत।
          </p>
        </div>

        {/* Main Article Card (Detailed Reading View) */}
        {selectedBlog && (
          <article className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-16">
            
            {/* Featured Hero Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
              <picture>
                <source srcSet={selectedBlog.image} type="image/webp" />
                <img 
                  src={selectedBlog.imageJpg} 
                  alt={selectedBlog.titleHi}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
              </picture>
              
              {/* Category Pill Overlay */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-900/90 text-white backdrop-blur-md shadow-lg border border-emerald-500/30 flex items-center gap-1.5">
                  <HeartPulse className="w-3.5 h-3.5 text-emerald-400" />
                  {selectedBlog.category}
                </span>
              </div>
            </div>

            {/* Article Content Container */}
            <div className="p-6 sm:p-10 lg:p-12">
              
              {/* Meta Info Bar: Date, Read Time, Share */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-100 text-xs sm:text-sm text-gray-500 font-medium">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    {selectedBlog.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-blue-600" />
                    {selectedBlog.readTime}
                  </span>
                </div>

                {/* Share Button */}
                <button
                  onClick={() => handleShareWhatsApp(selectedBlog)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold transition shadow-sm border border-emerald-200"
                  title="WhatsApp पर शेयर करें"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>WhatsApp पर शेयर करें</span>
                </button>
              </div>

              {/* Main Article Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 font-hindi mt-6 leading-tight">
                {selectedBlog.titleHi}
              </h1>

              {/* Author Badge */}
              <div className="flex items-center gap-3.5 my-6 p-3.5 sm:p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 shadow-sm">
                <img 
                  src={selectedBlog.authorImage} 
                  alt={selectedBlog.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500 shadow-sm flex-shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="text-sm sm:text-base font-bold text-gray-900 font-hindi flex items-center gap-1.5 flex-wrap">
                    <span>{selectedBlog.author}</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 inline" />
                  </h4>
                  {selectedBlog.authorRole && (
                    <p className="text-xs text-gray-600 font-hindi mt-0.5">
                      {selectedBlog.authorRole}
                    </p>
                  )}
                </div>
              </div>

              {/* ⭐ HIGHLIGHTED DOCTOR QUOTE CARD ⭐ */}
              <div className="my-8 relative rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-emerald-900 via-primary-950 to-emerald-900 text-white shadow-xl border border-emerald-700/50 overflow-hidden">
                <Quote className="absolute -top-3 -left-3 w-16 h-16 text-emerald-600/30 transform rotate-180" />
                <div className="relative z-10">
                  <div className="inline-block px-3 py-1 rounded-full bg-amber-400 text-amber-950 font-bold text-xs uppercase tracking-wider mb-3 shadow">
                    विशेष चिकित्सीय दृष्टिकोण (Doctor's Key Insight)
                  </div>
                  <blockquote className="text-lg sm:text-2xl font-bold font-hindi leading-relaxed text-emerald-100 italic">
                    "{selectedBlog.exactDoctorQuote}"
                  </blockquote>
                  <div className="mt-4 pt-3 border-t border-emerald-700/50 text-right text-xs text-emerald-300 font-hindi font-medium">
                    — {selectedBlog.author}
                  </div>
                </div>
              </div>

              {/* Summary Lead Paragraph */}
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-hindi bg-gray-50 p-5 rounded-2xl border-l-4 border-emerald-500 mb-8 font-medium">
                {selectedBlog.summary}
              </p>

              {/* Key Takeaways Box */}
              <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-amber-50/80 border border-amber-200">
                <h3 className="text-sm sm:text-base font-bold text-amber-900 font-hindi flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-amber-700" />
                  प्रमुख मुख्य बिंदु (Key Takeaways):
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-800 font-hindi">
                  {selectedBlog.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Article Detailed Sections */}
              <div className="space-y-8 text-gray-800 font-hindi leading-relaxed">
                {selectedBlog.content.map((sec, idx) => (
                  <div key={idx} className="space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">
                      {sec.heading}
                    </h3>
                    
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {p}
                      </p>
                    ))}

                    {/* Point by Point List (if any) */}
                    {sec.points && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-2">
                        {sec.points.map((pt, ptIdx) => (
                          <div key={ptIdx} className="p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-emerald-200 transition">
                            <h4 className="text-sm font-bold text-emerald-800 font-hindi mb-1 flex items-center gap-1.5">
                              <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center flex-shrink-0 font-sans">
                                {ptIdx + 1}
                              </span>
                              {pt.title}
                            </h4>
                            <p className="text-xs text-gray-600 font-hindi">
                              {pt.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom Consultation CTA Box */}
              <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-800 to-primary-950 text-white shadow-xl text-center relative overflow-hidden">
                <div className="relative z-10 max-w-xl mx-auto space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                    <Stethoscope className="w-3.5 h-3.5" />
                    <span>घर बैठे व्यक्तिगत परामर्श</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-hindi">
                    क्या आप या आपके परिजन डायबिटीज या मेटाबॉलिक सिंड्रोम से पीड़ित हैं?
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100 font-hindi">
                    डॉ. राजेश पाठक एवं 10+ डॉक्टरों की टीम से 2 घंटे की विस्तृत केस-टेकिंग और संपूर्ण प्राकृतिक उपचार परामर्श प्राप्त करें।
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp पर परामर्श लें ({CONSULTATION_FEE})</span>
                    </a>
                    <button
                      onClick={() => {
                        if (setActiveTab) setActiveTab('process')
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }}
                      className="w-full sm:w-auto px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition flex items-center justify-center gap-2 text-sm font-hindi"
                    >
                      <span>परामर्श की प्रक्रिया जानें</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </article>
        )}

      </div>
    </section>
  )
}
