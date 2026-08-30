export default function WhatsAppIcon({ className = "w-5 h-5", ...props }) {
  return (
    <img
      src="/images/icons/whatsapp.webp"
      alt="WhatsApp"
      className={`inline-block object-contain flex-shrink-0 ${className}`}
      loading="eager"
      {...props}
    />
  )
}
