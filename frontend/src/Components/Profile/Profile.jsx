import Header from "./header";
import NavMenu from "./navMenu";
import About from "./about";

const Profile = () => {
  return (
    <div className="text-white bg-[#011a32]">
      <Header />
      <div className="main flex">
        <NavMenu />
        <div className="w-full bg-[#212121] rounded-2xl">
          <About />
        </div>
      </div>
    </div>
  );
};

export default Profile;
