import React, { useState } from "react"
import { CreditCard, Calendar, DollarSign, PiggyBank } from "lucide-react"
import "./LoanForm.css"

function LoanForm({ subcategory }) {
  const [loanAmount, setLoanAmount] = useState("")
  const [initialDeposit, setInitialDeposit] = useState("")
  const [loanPeriod, setLoanPeriod] = useState(subcategory.loanPeriod)
  const [result, setResult] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    let maxLoan = subcategory.maxLoan
    if (maxLoan === "Based on requirement") {
      maxLoan = Number.parseFloat(loanAmount)
    }

    if (Number.parseFloat(loanAmount) > maxLoan) {
      setResult(
        `The maximum loan amount for ${subcategory.name} is PKR ${maxLoan.toLocaleString()}. Your loan amount has been adjusted.`,
      )
    } else {
      const monthlyPayment =
        (Number.parseFloat(loanAmount) - Number.parseFloat(initialDeposit)) / (Number.parseFloat(loanPeriod) * 12)
      setResult(`Your estimated monthly payment is: PKR ${monthlyPayment.toFixed(2)}`)
    }
  }

  return (
    <div className="loan-form">
      <h2>{subcategory.subcategory} Loan Calculator</h2>
      <form onSubmit={handleSubmit}>
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
          <CreditCard className="icon" />
          Calculate
        </button>
      </form>
      {result && <div className="result">{result}</div>}
    </div>
  )
}

export default LoanForm

