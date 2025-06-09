import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} E-Billing System. All rights reserved.</p>
        <p>Simple billing solution for small businesses</p>
      </div>
    </footer>
  )
}

export default Footer