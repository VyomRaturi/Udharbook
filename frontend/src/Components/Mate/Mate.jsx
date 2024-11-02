import React from 'react';

function Wallet() {
    return (
        <div className="container flex flex-col md:flex-row  justify-start p-8">
            <div className="content-section md:w-1/2">
                <h2 className="title text-3xl font-semibold mb-4">Connect with Mates</h2>
                <p className="highlighted-text text-base leading-relaxed">
                    Whether you're sharing meals, splitting bills, or lending money to friends, UdhaarBOOK keeps you organized with clear and transparent tracking.
                </p>
                <p className="description text-sm mt-2 text-gray-700">Connecting Your Friends, One Expense at a Time!</p>
                <a href="#" className="learn-more-link text-purple-600 mt-6 inline-block text-base font-medium">
                    Learn more →
                </a>
            </div>
            
            <div className="image-section wallet-image md:w-1/2 flex  mt-4 md:mt-0 transition-transform duration-300 hover:scale-105 hover:rotate-3"> 
                <img 
                    src={`Public/socialfriends.svg`} 
                    alt="social friends" 
                    className="friend-svg-icon transition-transform duration-300 ease-in-out transform hover:translate-y-2 hover:scale-110" /> 
            </div>
        </div>
    );
}

export default Wallet;
