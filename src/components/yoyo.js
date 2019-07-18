import React from 'react'
import { motion } from 'framer-motion'

const Yoyo = () => (
  <motion.div
    className="bg-red-500 border border-red-500 rounded-lg w-16 h-16 flex justify-center items-center"
    animate={{ scale: 0.5, rotate: 180, opacity: 0.5 }}
    transition={{
      yoyo: Infinity,
      duration: 2,
      ease: 'easeInOut',
    }}
  />
)

export default Yoyo
