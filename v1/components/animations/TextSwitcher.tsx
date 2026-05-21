'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TextSwitcherProps {
  texts: string[]
  interval?: number
  className?: string
}

export default function TextSwitcher({
  texts,
  interval = 4000,
  className = '',
}: TextSwitcherProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length)
    }, interval)
    return () => clearInterval(timer)
  }, [texts.length, interval])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -40, filter: 'blur(8px)' }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="font-display text-paper text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight whitespace-nowrap"
        >
                {texts[index].split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < texts[index].split('\n').length - 1 && <br />}
                  </span>
                ))}
        </motion.h1>
      </AnimatePresence>
    </div>
  )
}
