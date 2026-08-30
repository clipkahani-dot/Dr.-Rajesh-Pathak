import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react'
import WhatsAppIcon from '../ui/WhatsAppIcon'

import { 
  PHONE_PRIMARY, 
  PHONE_PRIMARY_DISPLAY, 
  PHONE_SECONDARY, 
  PHONE_SECONDARY_DISPLAY, 
  EMAIL, 
  WHATSAPP_URL, 
  PRIMARY_ADDRESS, 
  MAPS_EMBED_URL, 
  MAPS_LINK,
  DOCTOR_NAME
} from '../../utils/constants'
import { services } from '../../data/services'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    disease: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Open WhatsApp directly with patient form details prefilled!
    const text = `नमस्ते डॉ. राजेश पाठक सर 🙏\n\nमुझे Book Appointment करना है:\nनाम: ${formData.name}\nमोबाइल: ${formData.phone}\nसमस्या/रोग: ${formData.disease || 'General Appointment'}\nविवरण: ${formData.message || 'None'}\n\nकृपया अपॉइंटमेंट व आगे का मार्गदर्शन प्रदान करें।`
    window.open(`https://wa.me/919106947508?text=${encodeURIComponent(text)}`, '_blank')
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-50/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-emerald-100 text-emerald-900 border border-emerald-200 mb-3">
            📍 Book Appointment & Clinic Locations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-hindi">
            अपॉइंटमेंट बुक करें एवं क्लिनिक लोकेशन
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-3 font-hindi">
            Book Appointment Online in Stable Condition or Visit Our Surat Hospital Clinics
          </p>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Cards + Google Map (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Contact Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone Card */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-900 text-base font-hindi">फोन व WhatsApp</h4>
                <div className="mt-2 space-y-1">
                  <a href={`tel:${PHONE_PRIMARY}`} className="text-sm font-bold text-emerald-800 hover:underline block">
                    {PHONE_PRIMARY_DISPLAY}
                  </a>
                  <a href={`tel:${PHONE_SECONDARY}`} className="text-xs text-gray-600 hover:underline block">
                    {PHONE_SECONDARY_DISPLAY}
                  </a>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-900 text-base font-hindi">परामर्श का समय</h4>
                <p className="text-sm font-bold text-gray-900 mt-2 font-hindi">
                  सुबह 9:00 AM से रात 9:00 PM
                </p>
                <p className="text-xs text-emerald-700 mt-1 font-semibold">प्रतिदिन (All 7 Days Open)</p>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-900 text-base font-hindi">ईमेल पता</h4>
                <a href={`mailto:${EMAIL}`} className="text-xs font-semibold text-emerald-800 hover:underline mt-2 block break-all">
                  {EMAIL}
                </a>
              </div>

              {/* Location Card */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-900 text-base font-hindi">मुख्य अस्पताल</h4>
                <p className="text-xs text-gray-600 mt-1 font-hindi leading-snug">
                  {PRIMARY_ADDRESS}
                </p>
              </div>

            </div>

            {/* Google Maps Embed */}
            <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-md overflow-hidden">
              <div className="flex items-center justify-between px-2 mb-3">
                <span className="text-xs font-bold text-gray-700 font-hindi flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-600" /> सूरत क्लीनिक लोकेशन (Google Maps)
                </span>
                <a 
                  href={MAPS_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-700 font-semibold hover:underline inline-flex items-center gap-1"
                >
                  बड़े मैप में खोलें <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[16/9] w-full border">
                <iframe
                  title="Dr Rajesh Pathak MD Homoeopath Location"
                  src={MAPS_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Direct Quick Inquiry Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xl relative">
              
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-full mb-2">
                  Quick Inquiry / WhatsApp Booking
                </span>
                <h3 className="text-2xl font-bold text-gray-900 font-hindi">
                  ऑनलाइन परामर्श फॉर्म
                </h3>
                <p className="text-xs text-gray-500 font-hindi mt-1">
                  विवरण भरते ही सीधे WhatsApp पर डॉ. पाठक की टीम से कनेक्ट हों
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-900 text-xs font-hindi flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>धन्यवाद! WhatsApp विंडो खुल गई है। यदि नहीं खुली तो नीचे सीधे WhatsApp बटन दबाएं।</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 font-hindi">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    आपका नाम (Your Full Name) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="उदा. राहुल शर्मा"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    मोबाइल नंबर (Mobile / WhatsApp No.) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="उदा. 9876543210"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    रोग या समस्या का चयन करें (Condition / Disease)
                  </label>
                  <select
                    value={formData.disease}
                    onChange={(e) => setFormData({ ...formData, disease: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition bg-white"
                  >
                    <option value="">-- समस्या चुनें (Select Problem) --</option>
                    {services.map((s) => (
                      <option key={s.id} value={`${s.nameHi} (${s.name})`}>
                        {s.nameHi} ({s.name})
                      </option>
                    ))}
                    <option value="अन्य समस्या (Other)">अन्य समस्या (Other)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    लक्षण या संक्षिप्त विवरण (Symptoms / Note)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="उदा. कितने समय से समस्या है, क्या लक्षण हैं..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-whatsapp w-full py-3.5 text-base font-bold shadow-lg flex items-center justify-center gap-2 rounded-2xl"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Book Appointment via WhatsApp (₹500 Fee)</span>


                </button>
              </form>

              <div className="mt-4 pt-4 border-t text-center text-[11px] text-gray-400">
                🔒 आपकी स्वास्थ्य जानकारी 100% गोपनीय व सुरक्षित रखी जाती है।
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
