import React, { useState } from "react"
import "./Navbar.css"

const categories = [
  {
    name: "Wedding Loans",
    subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
    maxLoan: 500000,
    loanPeriod: 3,
  },
  {
    name: "Home Construction Loans",
    subcategories: ["Structure", "Finishing", "Loan"],
    maxLoan: 1000000,
    loanPeriod: 5,
  },
  {
    name: "Business Startup Loans",
    subcategories: ["Buy Stall", "Advance Rent for Shop", "Shop Assets", "Shop Machinery"],
    maxLoan: 1000000,
    loanPeriod: 5,
  },
  {
    name: "Education Loans",
    subcategories: ["University Fees", "Child Fees Loan"],
    maxLoan: "Based on requirement",
    loanPeriod: 4,
  },
  {
    name: "Other",
    subcategories: [],
    maxLoan: "Based on requirement",
    loanPeriod: 5,
  },
]

function Navbar({ onSubcategorySelect, onOtherSelect, onLogoClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo" onClick={onLogoClick}>
          <h2 className="navelugo">Saylani</h2>
          {/* <img src="/placeholder.svg?height=40&width=120" alt="Saylani Logo" /> */}
        </div>
        <ul className="nav-list">
          {categories.map((category, index) => (
            <li key={index} className="nav-item">
              <span className="category-name">{category.name}</span>
              {category.name === "Other" ? (
                <button className="other-btn" onClick={() => onOtherSelect(category)}>
                  Select
                </button>
              ) : (
                <ul className="dropdown-menu">
                  {category.subcategories.map((subcategory, subIndex) => (
                    <li
                      key={subIndex}
                      className="dropdown-item"
                      onClick={() => onSubcategorySelect({ ...category, subcategory })}
                    >
                      {subcategory}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

