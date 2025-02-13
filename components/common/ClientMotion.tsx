'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'

interface ClientMotionProps {
  children: ReactNode
  className?: string
  [key: string]: any
}

export function ClientMotion({ children, className, ...props }: ClientMotionProps) {
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  )
}

export function ClientAnimatePresence({ children }: { children: ReactNode }) {
  return <AnimatePresence>{children}</AnimatePresence>
} 