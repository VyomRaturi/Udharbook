import Header from "./header";
import NavMenu from "./navMenu";
import About from "./about";
import Transaction from "./transaction";

const Profile = () => {
  return (
    <div className="text-white bg-[#011a32]">
      <Header />
      <div className="main flex">
        <NavMenu />
        <div className="w-full bg-[#212121] rounded-2xl">
          <Transaction />
        </div>
      </div>
    </div>
  );
};

export default Profile;
