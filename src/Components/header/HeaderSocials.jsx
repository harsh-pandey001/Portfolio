import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
<div className="header_socials">
    <a href="https://www.linkedin.com/in/harsh-pandey-7293041a8/" target="_blank"><BsLinkedin/></a>
    <a href="https://github.com/harsh-pandey001" target="_blank"><FaGithub/></a>
    <a href="https://twitter.com/Harsh2060" target="_blank"><FiTwitter/></a>
</div>
  )
}

export default HeaderSocials