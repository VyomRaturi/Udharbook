import React from 'react'

const Footer = () => {
  return (
    <div>
             <footer className="bg-gray-800 text-gray-300 py-4 h-48  bottom-0 ">
      <div className=" mx-auto text-center">

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} UdharBook. All rights reserved.
        </p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
