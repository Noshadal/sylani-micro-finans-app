import React from "react"

function SuccessPopup({ onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Your request has been sent</h2>
        <p>We will contact you soon regarding your loan request.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default SuccessPopup

