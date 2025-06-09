import React from 'react'
import './Home.css'
function Home() {
  return (
   <div className="home-container">
      <h2>Welcome to E-Billing System</h2>
      <div className="home-content">
        <p>This is a simple billing management system to help you manage your invoices.</p>
        
        <div className="features">
          <div className="feature-card">
            <h3>Create Invoices</h3>
            <p>Generate professional invoices for your customers</p>
          </div>
          
          <div className="feature-card">
            <h3>Manage Customers</h3>
            <p>Keep track of all your customers</p>
          </div>
          
          <div className="feature-card">
            <h3>View History</h3>
            <p>Access all your past invoices</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home