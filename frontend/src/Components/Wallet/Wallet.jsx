import React from 'react';

function Wallet() {
    return (
        <div className="container flex flex-col md:flex-row items-center justify-start p-4 md:p-8 space-y-6 md:space-y-0 animate-fade-in-up">
            
           
            <div className="image-section wallet-image md:ml-8 w-full md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
                <img 
                    src={`Public/online payment.svg`} 
                    alt="Online Payment" 
                    className="wallet-svg-icon w-3/4 md:w-full transform hover:scale-105 hover:translate-y-2 transition-transform duration-500 ease-in-out"
                />
            </div>

            
            <div className="content-section w-full md:w-1/2 text-center md:text-left animate-fade-in-up">
                <h2 className="title text-2xl md:text-3xl font-semibold mb-4 hover:text-purple-600 transition-colors duration-300">
                    Track Your Wallet
                </h2>
                <p className="highlighted-text text-sm md:text-base leading-relaxed hover:translate-x-2 transition-transform duration-300">
                    udhaarBOOK is your go-to app for effortless financial management, 
                    allowing you to seamlessly track your expenses, incoming funds, 
                    and outstanding debts in one intuitive platform.
                </p>
                <p className="description text-xs md:text-sm mt-2 text-gray-600 hover:text-gray-800 transition-colors duration-300">
                    Easily you can track!
                </p>
                <a href="#" className="learn-more-link text-purple-600 mt-4 inline-block text-sm md:text-base font-medium hover:underline">
                    Learn more →
                </a>
            </div>
        </div>
    );
}

export default Wallet;
