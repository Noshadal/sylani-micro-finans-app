import React, { useState } from "react"
import Navbar from "./components/Navbar"
import LoanForm from "./components/LoanForm"
import OtherLoanForm from "./components/OtherLoanForm"
import Hero from "./components/Hero"
import Statistics from "./components/Statistics"
import "./App.css"

function App() {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null)
  const [isOtherCategory, setIsOtherCategory] = useState(false)

  const handleOtherSelect = (category) => {
    setSelectedSubcategory(category)
    setIsOtherCategory(true)
  }

  const handleSubcategorySelect = (subcategory) => {
    setSelectedSubcategory(subcategory)
    setIsOtherCategory(false)
  }

  const handleLogoClick = () => {
    setSelectedSubcategory(null)
    setIsOtherCategory(false)
  }

  return (
    <div className="app">
      <Navbar
        onSubcategorySelect={handleSubcategorySelect}
        onOtherSelect={handleOtherSelect}
        onLogoClick={handleLogoClick}
      />
      {selectedSubcategory ? (
        <div className="form-container">
          {isOtherCategory ? (
            <OtherLoanForm category={selectedSubcategory} />
          ) : (
            <LoanForm subcategory={selectedSubcategory} />
          )}
        </div>
      ) : (
        <>
          <Hero />
          <Statistics />
        </>
      )}
    </div>
  )
}

export default App

