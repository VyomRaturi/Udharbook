import React, { useState } from "react";

const Navbar = ({ sendDataToParent }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
    sendDataToParent(false);
  };

  const handleMenu = () => {
    const newMenuState = !menuOpen;
    setMenuOpen(newMenuState);
    sendDataToParent(newMenuState);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-20 bg-gray-0 text-white">
      <nav className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img
            src="/money-bag.png"  
            alt="Money Bag Logo"
            className="w-10 h-auto mr-2" 
          />
          <span className="text-3xl font-bold text-white">UDHAARBOOK</span>
        </div>

        
        <div className={`md:flex md:justify-between md:items-center ${menuOpen ? "block" : "hidden"}`}>
          <ul className="flex gap-10 md:gap-6">
            <li>
              <a
                href="#about"
                className="text-lg text-[#7e9199] hover:text-white"
                onClick={handleLinkClick}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-lg text-[#7e9199] hover:text-white mr-4"
                onClick={handleLinkClick}
              >
                Contact
              </a>
            </li>
          </ul>


          <ul className="flex gap-5 mt-14 md:mt-0 ">
            <li>
              <a className="text-lg hover:text-white" target="_blank" rel="noreferrer">
                <button>REGISTER</button>
                
              </a>
            </li>
          </ul>
        </div>
        
       
      
      </nav>
    </div>
  );
};

export default Navbar;
