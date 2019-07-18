import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const Button = ({ text }) => (
  <div
    className="bg-gray-800 border border-gray-800 rounded px-8 py-4 flex justify-center items-center mb-16"
    style={{ width: 330, height: 42 }}
  >
    <motion.button
      className="bg-red-500 px-4 py-2 border border-red-500 rounded shadow-2xl text-white"
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {text}
    </motion.button>
  </div>
)

Button.propTypes = {
  text: PropTypes.string,
}

export default Button
