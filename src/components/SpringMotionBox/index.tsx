import type { Variants } from 'framer-motion'
import { motion } from 'framer-motion'
import { FC, PropsWithChildren } from 'react'

interface Props {
  offscreenY?: number
  bounce?: number
  duration?: number
}

export const SpringMotionBox: FC<PropsWithChildren<Props>> = ({
  children,
  offscreenY = 300,
  bounce = 0.3,
  duration = 1.5,
}) => {
  const cardVariants: Variants = {
    offscreen: {
      y: offscreenY,
    },
    onscreen: {
      y: 50,
      transition: {
        type: 'spring',
        bounce,
        duration,
      },
    },
  }
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.8 }}
    >
      <motion.div className="card" variants={cardVariants}>
        {children}
      </motion.div>
    </motion.div>
  )
}
