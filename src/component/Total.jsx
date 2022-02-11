import React from 'react'
import Card from './Card'
import cardLogo from "../assets/images/Vector (1).svg"
import lockLogo from "../assets/images/Vector (2).svg"
import floatLogo from "../assets/images/Vector (3).svg"
import "../assets/css/total.css"

const Total = () => {
  return (
    <div className="total">
        <Card cardSrc={cardLogo} title="Vault" body="N2,000,000" />
        <Card cardSrc={lockLogo} title="Coming Soon" body="N1,000,000" />
        <Card cardSrc={floatLogo} title="Float" body="N4,000,000" />
    </div>
  )
}

export default Total