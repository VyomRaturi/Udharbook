import React from 'react'

function Header() {
  return ( 

    <div>
      <nav className='bg-blue-950 h-16 px-4 md:px-8 justify-between items-center flex top-0'>
          <div className="text-white text-lg font-bold">UdharBook</div>
          <a href="#home" className="text-white">Home</a>
          <a href="#about" className="text-white">About</a>
          <a href="#ContactUs" className="text-white">ContactUs</a>
          <a href="#contact" className="text-white">Login/Register</a>
        </nav>
    </div>
  )
}

export default Header
