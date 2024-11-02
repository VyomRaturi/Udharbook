import Navbar from "./Components/Navbar1/Navbar1";
import Login from "./Components/Login/Login";

import About from "./Components/About/About";
import Wallet from "./Components/Wallet/Wallet";
import Mate from "./Components/Mate/Mate.jsx";
import Contact from "./Components/Contact/contact";
export default function App() {
  return (
    <div className="relative min-h-screen bg-dark blue-100 ">
      
      
      <Navbar />
      <About />
      <div className="relative z-10 pt-10">
      
        <Login />
        <Wallet/>
        <Mate/>
        <Contact/>
        
       
      </div>
      
    


      
    </div>
  );
}
