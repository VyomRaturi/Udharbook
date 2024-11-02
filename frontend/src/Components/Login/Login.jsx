import React from "react";

const Login = () => {
  return (
    <div className="relative flex items-center justify-center h-auto bg-lightpurple-600 overflow-hidden py-20 px-8">
        

      
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl bg-white shadow-lg rounded-xl overflow-hidden">
      
        
        <div className="hidden md:flex flex-col justify-center w-full md:w-1/2 p-8  text-black">
          <h2 className="text-3xl font-bold mb-4">About UdhaarBOOK</h2>
          <p className="text-lg leading-relaxed">
            udhaarBOOK is designed to help you manage your finances effectively. Track your expenses, income, and borrowings all in one place. Whether you’re managing personal or business finances, udhaarBOOK keeps everything organized, accessible, and easy to track.
          </p>
        </div>

        <section className="w-full md:w-1/2 p-8 space-y-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-800">WELCOME TO UDHAARBOOK</p>
            <div className="w-16 h-1 mx-auto my-4 bg-purple-500"></div>
            <p className="text-gray-600">
              Please, provide login credentials to proceed and access our services.
            </p>
          </div>

          <form className="space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Username"
                className="w-full px-12 py-3 text-gray-700 bg-gray-200 rounded-full outline-none focus:ring-2 focus:ring-purple-500"
              />
              <i className="fas fa-user absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
            </div>

            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-12 py-3 text-gray-700 bg-gray-200 rounded-full outline-none focus:ring-2 focus:ring-purple-500"
              />
              <i className="fas fa-lock absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 rounded" /> Remember Me
              </label>
              <a href="#" className="text-purple-500 hover:text-blue-500 transition">
                Forgot Password?
              </a>
            </div>

            <button className="w-full py-3 mt-4 font-bold text-white bg-gradient-to-r from-purple-600 to-blue-500 rounded-full hover:opacity-90 transition">
              Login
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

  

export default Login;
