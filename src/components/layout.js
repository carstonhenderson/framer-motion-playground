import React from 'react'
import PropTypes from 'prop-types'
import './layout.css'

const Layout = ({ children }) => (
  <main className="h-screen flex justify-center items-center bg-gray-900">
    <div className="flex flex-col justify-center items-center">{children}</div>
  </main>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
