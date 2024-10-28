import Header from "./header";
import NavMenu from "./navMenu";
import About from "./about";
import Transaction from "./transaction";
import Friends from "./Friends";
import { useState } from "react";

const Profile = () => {
  const [navChose, setNavChose] = useState(1);
  
  const renderComponent = () => {
    switch (navChose) {
      case 2:
        return <Transaction />;
      case 3:
        return <Friends />;
      default:
        return <About />;
    }
  }
  return (
    <div className="text-white bg-[#011a32]">
      <Header />
      <div className="main flex">
        <NavMenu navChose={navChose} setNavChose={setNavChose } />
        <div className="w-full bg-[#212121] rounded-2xl">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default Profile;
