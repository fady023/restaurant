import React from 'react'
import "./header.css"
const Topbar = () => {
  return (
    <>
        <div className="topbar">
        <div className="container topbar-content">
          <div className="left">
            <span>(414) 857 - 0107</span>
            <span>fady.msoliman3@gmail.com</span>
          </div>

          <div className="right">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-github"></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default Topbar
