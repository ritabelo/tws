import Link from 'next/link'

export default function WhatsAppButton({
  message = 'Hi! I would like to know more about The Wild Slice packs.',
  label = 'Order via WhatsApp',
  labelPt = 'Encomendar via WhatsApp',
  className = '',
}: {
  message?: string
  label?: string
  labelPt?: string
  className?: string
}) {
  return (
    <a
      href={`#`} // placeholder — replace with actual WhatsApp link
      className={`inline-flex flex-col items-center justify-center bg-sage hover:bg-sage-dark text-warm-white px-8 py-4 transition-colors ${className}`}
    >
      <span className="text-sm tracking-widest uppercase font-medium">
        {label}
      </span>
      <span className="text-xs opacity-80 mt-0.5">{labelPt}</span>
    </a>
  )
}
