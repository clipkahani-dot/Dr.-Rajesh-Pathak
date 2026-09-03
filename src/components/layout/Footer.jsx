import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink,
  Instagram,
  Linkedin,
  Facebook
} from 'lucide-react'
import WhatsAppIcon from '../ui/WhatsAppIcon'

import { 
  DOCTOR_NAME, 
  DOCTOR_QUALIFICATION, 
  PHONE_PRIMARY_DISPLAY, 
  PHONE_PRIMARY, 
  PHONE_SECONDARY_DISPLAY, 
  PHONE_SECONDARY, 
  EMAIL, 
  WHATSAPP_URL, 
  CLINIC_TIMINGS, 
  MAPS_LINK,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  FACEBOOK_URL
} from '../../utils/constants'


export default function Footer({ setActiveTab }) {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Highlight Banner */}
        <div className="bg-gradient-to-r from-emerald-900 to-primary-950 rounded-2xl p-6 sm:p-8 mb-12 border border-emerald-800/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5" /> 18+ Years Trusted Experience
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-hindi">
              स्वास्थ्य संबंधी किसी भी समस्या के लिए आज ही परामर्श लें
            </h3>
            <p className="text-sm text-emerald-200 mt-1 font-hindi">
              घर बैठे ₹500 में 2 घंटे की विस्तृत केस-टेकिंग और विशेषज्ञ होम्योपैथिक प्रिस्क्रिप्शन।
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm py-3 px-6 shadow-lg flex items-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp पर बात करें
            </a>
            <a
              href={`tel:${PHONE_PRIMARY}`}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold text-sm transition border border-white/20 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              कॉल करें
            </a>
          </div>
        </div>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          
          {/* Column 1: Doctor Profile & Motto & Socials */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg border-2 border-amber-400 bg-black flex-shrink-0 p-0.5">
                <picture>
                  <source srcSet="/images/logo/main-logo.webp" type="image/webp" />
                  <img 
                    src="/images/logo/main-logo-optimized.jpg" 
                    alt={`${DOCTOR_NAME} Official Logo`} 
                    width="48"
                    height="48"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain rounded-full"
                  />
                </picture>

              </div>
              <div>
                <h4 className="text-lg font-bold text-white leading-snug">{DOCTOR_NAME}</h4>
                <p className="text-xs text-amber-400 font-bold uppercase">{DOCTOR_QUALIFICATION}</p>
              </div>
            </div>


            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4 font-hindi">
              "मानवता की सेवा ही सबसे बड़ा धर्म है।" 18+ वर्षों से जटिल एवं पुरानी बीमारियों (Chronic Diseases) का सफल और सुरक्षित होम्योपैथिक उपचार।
            </p>
            <div className="space-y-1.5 text-xs text-gray-400 mb-4">
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" /> Classical MD Homoeopath
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" /> Assistant Professor in Med. College
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" /> 10+ Expert Doctors Team
              </div>
            </div>

            {/* Official Social Media Channels */}
            <div className="pt-2 border-t border-gray-800/80">
              <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider mb-2">
                Follow Official Channels:
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-pink-600 via-purple-600 to-amber-500 hover:opacity-90 text-white rounded-xl text-xs font-bold shadow transition hover:scale-105"
                  title="Follow Dr. Rajesh Pathak on Instagram Reels"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  Instagram
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1877F2] hover:bg-[#166fe5] text-white rounded-xl text-xs font-bold shadow transition hover:scale-105"
                  title="Follow Dr. Rajesh Pathak on Facebook"
                >
                  <Facebook className="w-3.5 h-3.5" />
                  Facebook
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0077B5] hover:bg-[#006097] text-white rounded-xl text-xs font-bold shadow transition hover:scale-105"
                  title="Connect with Dr. Rajesh Pathak on LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  LinkedIn
                </a>
              </div>
            </div>


          </div>


          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 border-b border-emerald-800/60 pb-2">
              महत्वपूर्ण लिंक्स (Quick Links)
            </h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => { if(setActiveTab) setActiveTab('home'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-emerald-400 transition text-left">मुख्य पैनल (Home Panel)</button></li>
              <li><button onClick={() => { if(setActiveTab) setActiveTab('about'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-emerald-400 transition text-left font-semibold text-emerald-300">हमारे बारे में (About Us)</button></li>
              <li><button onClick={() => { if(setActiveTab) setActiveTab('services'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-emerald-400 transition text-left">20 बीमारियों का उपचार (Services)</button></li>
              <li><button onClick={() => { if(setActiveTab) setActiveTab('process'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-emerald-400 transition text-left">परामर्श प्रक्रिया (3-Step Process)</button></li>
              <li><button onClick={() => { if(setActiveTab) setActiveTab('team'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-emerald-400 transition text-left">हमारी डॉक्टर टीम (Doctor Team)</button></li>
              <li><button onClick={() => { if(setActiveTab) setActiveTab('gallery'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-emerald-400 transition text-left">फोटो व प्रमाण पत्र (Certificates)</button></li>
              <li><button onClick={() => { if(setActiveTab) setActiveTab('reviews'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-emerald-400 transition text-left">मरीज समीक्षाएं (Patient Reviews)</button></li>
              <li><button onClick={() => { if(setActiveTab) setActiveTab('contact'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-emerald-400 transition text-left font-semibold text-emerald-300">संपर्क करें (Contact Us)</button></li>
              <li><button onClick={() => { if(setActiveTab) setActiveTab('privacy'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-emerald-400 transition text-left text-xs text-gray-400 hover:text-white">🔒 गोपनीयता नीति (Privacy Policy)</button></li>
            </ul>
          </div>



          {/* Column 3: Clinic & Hospital Timings */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 border-b border-emerald-800/60 pb-2">
              अस्पताल एवं समय (Hospital Venues)
            </h4>
            <div className="space-y-3 text-xs">
              {CLINIC_TIMINGS.map((item, idx) => (
                <div key={idx} className="bg-gray-900/60 p-2.5 rounded-lg border border-gray-800">
                  <div className="font-semibold text-white mb-0.5">{item.clinic}</div>
                  <div className="text-emerald-400 flex items-center gap-1 font-medium">
                    <Clock className="w-3 h-3" /> {item.timings}
                  </div>
                  <div className="text-gray-500 text-[11px] mt-0.5">{item.address}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Direct Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 border-b border-emerald-800/60 pb-2">
              सीधा संपर्क (Contact Details)
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-xs text-gray-400">Primary Phone / WhatsApp:</div>
                  <a href={`tel:${PHONE_PRIMARY}`} className="text-white hover:text-emerald-400 font-semibold block">
                    {PHONE_PRIMARY_DISPLAY}
                  </a>
                  <a href={`tel:${PHONE_SECONDARY}`} className="text-gray-300 hover:text-emerald-400 text-xs block mt-0.5">
                    {PHONE_SECONDARY_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-xs text-gray-400">Email Address:</div>
                  <a href={`mailto:${EMAIL}`} className="text-white hover:text-emerald-400 text-xs break-all">
                    {EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-xs text-gray-400">Main Location:</div>
                  <p className="text-xs text-gray-300 leading-tight">
                    Vibrant Hospital, 4th Floor Syska Plaza, Priyanka Chokdi, Bhestan, Surat, Gujarat
                  </p>
                  <a 
                    href={MAPS_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-emerald-400 hover:underline mt-1"
                  >
                    Google Maps पर देखें <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} {DOCTOR_NAME} {DOCTOR_QUALIFICATION}. All rights reserved.
          </div>
          <div className="flex items-center gap-4 font-hindi">
            <button 
              onClick={() => { if(setActiveTab) setActiveTab('privacy'); window.scrollTo({top:0, behavior:'smooth'}); }}
              className="text-emerald-400 hover:underline"
            >
              गोपनीयता नीति (Privacy Policy)
            </button>
            <span>•</span>
            <button 
              onClick={() => { if(setActiveTab) setActiveTab('contact'); window.scrollTo({top:0, behavior:'smooth'}); }}
              className="text-gray-400 hover:text-white"
            >
              सहायता एवं संपर्क (Help & Contact)
            </button>
          </div>
        </div>


      </div>
    </footer>
  )
}
