import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
      <nav className="navbar">
      <div className="navbar-left">
        <h1>E-Billing System</h1>
      </div>
      <div className="navbar-right">
        <a href="#home">Home</a>
        <a href="#invoices">Invoices</a>
        <a href="#customers">Customers</a>
        <a href="#new">New Bill</a>
      </div>
    </nav>
  )
}

export default Navbar