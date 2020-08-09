import React, {useEffect, useState} from 'react'
import './Nav.css'

function Nav() {

 const [show, handleShow] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll")
    }
  }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
          <img 
            className="nav_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/1/15/Logonfx.png"
            alt="Netflix LOGO"
          />
          <img
            className="nav_profile"
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png              "
            alt="Profile LOGO"
          />
        </div>
    )
}

export default Nav
