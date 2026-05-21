import { ReactNode } from 'react'

interface BilingualBlockProps {
  childrenEn: ReactNode
  childrenPt: ReactNode
  className?: string
  divider?: boolean
}

export default function BilingualBlock({
  childrenEn,
  childrenPt,
  className = '',
  divider = true,
}: BilingualBlockProps) {
  return (
    <div className={`grid md:grid-cols-2 gap-8 md:gap-12 ${className}`}>
      <div className="text-charcoal">{childrenEn}</div>
      <div
        className={`text-warm-grey ${
          divider ? 'md:border-l md:pl-12 border-stone-200/60' : ''
        }`}
      >
        {childrenPt}
      </div>
    </div>
  )
}
