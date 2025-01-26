import React, { useState } from "react"
import { X, User, Mail, CreditCard } from "lucide-react"
import "./Popup.css"

function Popup({ onClose }) {
  const [cnic, setCnic] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", { cnic, email, name })
    onClose()
  }

  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close-btn" onClick={onClose}>
          <X />
        </button>
        <h2>Personal Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cnic">
              <CreditCard className="icon" />
              CNIC:
            </label>
            <input id="cnic" type="text" value={cnic} onChange={(e) => setCnic(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              <Mail className="icon" />
              Email:
            </label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="name">
              <User className="icon" />
              Name:
            </label>
            <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Popup

