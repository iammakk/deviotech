import React from 'react'
import owly from "../../assets/owly.png"
import phone from "../../assets/phone.png"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar' >
      <div className="yellow">

        <img src={owly} alt="" />
        <div className="tabs">
        <div className="tab">Home</div>
        <div className="tab">About</div>
        <div className="tab">Experies</div>
        <div className="tab">Services</div>
        <div className="tab">Timeline</div>
        <div className="tab">Awards</div>
        <div className="tab">Media</div>
        <div className="tab">Contact</div>
        </div>

      </div>
      <div className="white">
        <img src={phone} alt="" />
        <p>Available @  <br/><span>09007860111</span> </p>
        
      </div>
    </div>
  )
}

export default Navbar
