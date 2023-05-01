import React from 'react'
import "./Meet.css"
import meetourteam from "../../assets/meetourteam_img.png"
import icon_img from "../../assets/small_icon_image.png"
import diagnol from "../../assets/diagnols_img.png"
import share_logo from "../../assets/share_logo.png"


const Meet = () => {
  return (
    <div className='team_container' >
        <div className="upper_team">
        <img src={icon_img} alt="" />

<p>Home Instructors</p>
        </div>
        <div className="bottom_team">

            <div className="bottom_team_upper"><img src={meetourteam} alt="" />
            <h1>Meet Our Team</h1>
            <p>Best in Service</p>
            </div>
            <div className="bottom_team_lower">
<div className="bottom_team_lower_left">
    
    <img src={diagnol} alt="" />

<h3>Steve Carrel</h3>
<p>Founder & Director
</p>
<div className="social">    <img src={share_logo} alt="" />
<img src={share_logo} alt="" />
<img src={share_logo} alt="" />
<img src={share_logo} alt="" />
</div>



<p>There are many variations of passeges of Lorem ipsum available, but the majority have sufferedalteration in some formm , by injected humour, or randomised words which don't look even slighty believable.</p>
</div>
<div className="bottom_team_lower_right">

<img src={diagnol} alt="" />

<h3>Steve Carrel</h3>
<p>Founder & Director

</p>
<div className="social">    <img src={share_logo} alt="" />
<img src={share_logo} alt="" />
<img src={share_logo} alt="" />
<img src={share_logo} alt="" />
</div>
<p>There are many variations of passeges of Lorem ipsum available, but the majority have sufferedalteration in some formm , by injected humour, or randomised words which don't look even slighty believable.</p>
</div>
            </div>
        </div>
      
    </div>
  )
}

export default Meet
