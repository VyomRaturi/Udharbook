import React from 'react'

const NavMenu = ({navChose , setNavChose}) => {
  return (
    <div className="w-[30%] max-w-[250px] h-[90.8vh] inline-block">
      <div className="avatar w-full">
        <img
          src="src\public\boy.png"
          alt="Photo"
          className="w-[100px] mx-auto pt-4"
        />
      </div>
      <div className="navigate p-4 gap-6">
        <div className="text-[24px] font-sans text-[#3eec6c] font-bold text-center my-8">
          <button href="/about" onClick={() => setNavChose(1)}>
            About
          </button>
        </div>
        <div className="text-[24px] font-sans text-[#3bc7f2] font-bold text-center my-8">
          <button href="/transaction" onClick={() => setNavChose(2)}>
            Transaction
          </button>
        </div>
        <div className="text-[24px] font-sans text-[#fd41fa] font-bold text-center my-8">
          <button href="/friends" onClick={() =>setNavChose(3)}>
            Friends
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavMenu