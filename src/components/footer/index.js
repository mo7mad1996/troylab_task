import React from "react"
import './style.css'

// nav Images
import  { Home, Wallet, Sales, More } from './NavImages'

const Footer = () => (
  <footer className="footer">
    <Nav />
  </footer>
)

const Nav = () => {

  return(    
    <nav className="nav">
      <a href="#" className="active">
        <Home />
        <span> الرئيسيه</span>
      </a>
      <a href="#">
        <Wallet />
        <span>المحفظه</span>
      </a>
      <a href="#">
        <Sales />
        <span>المبيعات</span>
      </a>
      <a href="#">
        <More />
        <span>المزيد</span>
      </a>
    </nav>
  )
}

export default Footer