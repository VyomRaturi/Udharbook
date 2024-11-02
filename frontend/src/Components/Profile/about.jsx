import React from 'react'
import LineChart from './chart';

const About = () => {
  return (
    <div className="w-full h-[90.8vh] overflow-y-scroll p-8">
      <h1 className="title text-[36px] font-bold font-noto">About</h1>
      <div className="totals grid grid-cols-2 gap-8 mt-4">
        <div className="total bg-greenGrad p-4 rounded-2xl font-semibold touched h-[120px] shadowed flex items-center">
          <div className="w-full type font-poppin">Total Income</div>
          <div className="w-full amount text-right text-3xl">₹45670</div>
        </div>
        <div className="assets bg-blueGrad p-4 rounded-2xl font-semibold touched h-[120px] shadowed shadow-white flex items-center">
          <div className="w-full type font-poppin">Assets</div>
          <div className="w-full amount text-right text-3xl">₹250000</div>
        </div>
      </div>
      <div className="boxOF grid grid-cols-3 gap-4 mt-6">
        <div className="expenditure bg-red-500 p-2 rounded-2xl font-semibold touched h-[200px]">
          <div className="icon flex justify-center w-full">
            <img
              src="src\public\loss.svg"
              alt="loss"
              className="w-[50px] my-4"
            />
          </div>
          <div className="type text-[18px]">Expenses</div>
          <div className="stat font-thin text-[14px]">Spend 45% more</div>
          <div className="w-full val text-center text-3xl my-3">₹25430</div>
        </div>
        <div className="lendings bg-blue-500 p-2 rounded-2xl font-semibold touched h-[200px]">
          <div className="icon flex justify-center w-full">
            <img
              src="src\public\lend.svg"
              alt="loss"
              className="w-[50px] my-4"
            />
          </div>
          <div className="type text-[18px]">Lendings</div>
          <div className="stat font-thin text-[14px]">Lended 20% expense</div>
          <div className="w-full val text-center text-3xl my-3">₹5402</div>
        </div>
        <div className="borrowings bg-yellow-500 p-2 rounded-2xl font-semibold touched h-[200px]">
          <div className="icon flex justify-center w-full">
            <img
              src="src\public\borrow.svg"
              alt="loss"
              className="w-[50px] my-4"
            />
          </div>
          <div className="type text-[18px]">Borrowing</div>
          <div className="stat font-thin text-[14px]">Borrowed 30% total</div>
          <div className="w-full val text-center text-3xl my-3">₹12304</div>
        </div>
      </div>
      <LineChart />
    </div>
  );
}

export default About