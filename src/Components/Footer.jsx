import React from 'react'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const footerStyles = 'bg-gray-800 text-white py-6 text-center';
  const headingStyles = 'text-xl font-semibold mb-2';
  const paragraphStyles = 'text-sm';
  const linkStyles = 'text-blue-400 hover:underline mx-2 cursor-pointer';

  return (
    <footer className={footerStyles}>
      <h2 className={headingStyles}>Zoyo Resort | Hotel Room Booking</h2>
      <p className={paragraphStyles}>
        &copy; Zoyo.com - All copyrights reserved to Private Resortx
      </p>
      <div className="mt-4 flex flex-wrap justify-center">
        <p onClick={()=>{navigate('/contact'),scrollTo(0,0)}} className={linkStyles}>Contact Us</p>
        <p onClick={()=>{navigate('/about'),scrollTo(0,0)}} className={linkStyles}>About Us</p>
      </div>
    </footer>
  )
}

export default Footer