import React from 'react'

const NavMenu = () => {
  return (
    <div className='bg-slate-700 w-[30%] max-w-[250px] h-[90vh]'>
      <div className="avatar w-full">
        <img src="src\public\boy.png" alt="Photo" className='w-[100px] mx-auto pt-4'/>
      </div>
      <div className="navigate p-4 gap-6">
        <div className='text-[24px] font-sans text-[#3eec6c] font-bold text-center my-8'>
          <a href="/about">About</a>
        </div>
        <div className='text-[24px] font-sans text-[#3bc7f2] font-bold text-center my-8'>
          <a href="/transaction">Transaction</a>
        </div>
        <div className='text-[24px] font-sans text-[#fd41fa] font-bold text-center my-8'>
          <a href="/friends">Friends</a>
        </div>
      </div>
    </div>
  )
}

export default NavMenu