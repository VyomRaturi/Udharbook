import React from 'react'

const Header = () => {
  return (
    <div className="w-full min-h-[50px] p-2 flex justify-between bg-slate-700">
      <div className="name text-[30px]">
        Hello <span className="text-blue-400 touched font-bold">Admin</span>
      </div>
      <div className="imag h-full w-[50px] mr-2">
        <img src="src\public\boy.png" alt="Img" className='w-full h-full'/>
      </div>
    </div>
  );
}

export default Header