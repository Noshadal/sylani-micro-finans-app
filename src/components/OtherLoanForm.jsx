import React, { useState } from "react"
import { DollarSign, PiggyBank, Calendar, HelpCircle, ArrowRight } from "lucide-react"
import Popup from "./Popup"
import "./OtherLoanForm.css"

function OtherLoanForm({ category }) {
  const [loanPurpose, setLoanPurpose] = useState("")
  const [loanAmount, setLoanAmount] = useState("")
  const [initialDeposit, setInitialDeposit] = useState("")
  const [loanPeriod, setLoanPeriod] = useState(category.loanPeriod)
  const [showPopup, setShowPopup] = useState(false)

  const handleProceed = (e) => {
    e.preventDefault()
    setShowPopup(true)
  }

  return (
    <div className="loan-form">
      <h2>Other Loan Calculator</h2>
      <form onSubmit={handleProceed}>
        <div className="form-group">
          <label htmlFor="loanPurpose">
            <HelpCircle className="icon" />
            Loan Purpose:
          </label>
          <input
            id="loanPurpose"
            type="text"
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            required
            placeholder="What do you need the loan for?"
          />
        </div>
        <div className="form-group">
          <label htmlFor="loanAmount">
            <DollarSign className="icon" />
            Loan Amount (PKR):
          </label>
          <input
            id="loanAmount"
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="initialDeposit">
            <PiggyBank className="icon" />
            Initial Deposit (PKR):
          </label>
          <input
            id="initialDeposit"
            type="number"
            value={initialDeposit}
            onChange={(e) => setInitialDeposit(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="loanPeriod">
            <Calendar className="icon" />
            Loan Period (Years):
          </label>
          <input
            id="loanPeriod"
            type="number"
            value={loanPeriod}
            onChange={(e) => setLoanPeriod(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          <ArrowRight className="icon" />
          Proceed
        </button>
      </form>
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </div>
  )
}

export default OtherLoanForm

