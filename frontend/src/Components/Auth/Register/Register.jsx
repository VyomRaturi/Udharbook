const Register = () => {
  return (
    <div className="reg w-[100vw] h-[100vh] relative">
      <div className="reg_bg fixed h-full w-full"></div>
      <div className="reg_use bg-black w-[80%] h-[90%] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-2xl shadow-[#383c65] shadow-lg overflow-clip flex">
        <form className="content w-full h-full bg-cont_bg p-8 gap-8">
          <div className="touched font-mono font-extrabold text-white text-[36px] mt-9 pointer-events-none">
            Register Now
          </div>

          <fieldset className="name w-full flex justify-between bg-red-40 my-8">
            <legend className="text-white">Name *</legend>
            <input
              type="text"
              className="first text-white bg-[#141618] border p-4 text-center border-blue-600 h-[40px] rounded-md w-[45%]"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              className="last text-white bg-[#141618] border p-4 text-center border-blue-600 h-[40px] rounded-md w-[45%]"
              placeholder="Last Name"
            />
          </fieldset>

          <fieldset className="w-full mb-8">
            <legend className="text-white">Email *</legend>
            <input
              type="email"
              className="mail text-white bg-[#141618] border p-4 border-blue-600 h-[40px] rounded-md w-full"
              placeholder="Email"
              required
            />
          </fieldset>

          <fieldset className="w-full mb-8">
            <legend className="text-white">Mobile Number</legend>
            <input
              type="tel"
              className="mail text-white bg-[#141618] border p-4 border-blue-600 h-[40px] rounded-md w-full"
              placeholder="Mobile Number"
            />
          </fieldset>

          <fieldset className="w-full mb-8">
            <legend className="text-white">Password *</legend>
            <input
              type="password"
              className="mail text-white bg-[#141618] border p-4 border-blue-600 h-[40px] rounded-md w-full"
              placeholder="Enter Password"
              required
            />
          </fieldset>
          <button
            type="submit"
            className="translate-x-[100%] text-white text-ellipsis bg-[#27c6f2] font-bold text-[20px] py-3 px-6 rounded-full hover:bg-[#045065] hover:border hover:border-[#27c6f2]"
          >
            Create Account
          </button>
        </form>

        <div className="img w-full h-full min-[900px]:block hidden imgBg relative">
          <div className="bg-img_bg absolute w-full h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
