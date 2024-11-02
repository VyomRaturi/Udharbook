import React from 'react'

const Main = () => {
  return (
    <div>
       <main className="flex-grow bg-white py-8 bg-blue-950">
        <div className=" mx-auto px-4  flex flex-col bg-blue-950 w-10/12 h-[1000px] justify-center flex items-center rounded-xl gap-4 ">
          <h1 className="text-4xl font-bold text-center mb-4 text-white ">Manage Your Expenses</h1>


          <div className='flex gap-16'>
          <label for="category-input" className='text-white'>Category:
          </label>
            <input type="text" className='rounded-xl text-center' placeholder='Enter Category'/>
          </div>

          <div className='flex gap-16'>
          <label for="amount-input" className='text-white'>Amount:
          </label>
          <input type="number" className='rounded-xl text-center' placeholder="Enter Amount" />
          </div>

          <div className='flex justify-between gap-24'>
          <label for="date-input" className='text-white'>Date:
          </label>
          <input type="date" className='rounded-xl text-center w-44'  />
          </div>

         

          <div className='flex justify-between gap-8'>
          <label for="friend-input" className='text-white' >Number of Friends:
          </label>
          <input type="number" className='rounded-xl text-center w-52' placeholder="Enter Number of Friends" />
          </div>


          <div className='flex justify-between gap-10'>
          <button className='bg-cyan-500 rounded-md flex text-center justify-center w-36 gap-2 '>add </button>

          <button className='bg-green-600 rounded-md flex text-center w-36 justify-center'>Split</button>
          </div>

          <div className='flex flex-row gap-16'>
            <label htmlFor="per-person-amount" className='text-white'>Amount Per Person :  </label>
            <div className='bg-white rounded-xl w-52 text-center '>4000</div>
          </div>


          <div className='bg-blue-400 h-[990px] w-full rounded-t- '>
          <table className='bg-slate-200 h-full w-full rounded-t-sm border-cyan-700'>
        <thead className=''>
          <tr className='bg-amber-400  overflow-hidden'>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className=""></tbody>
        <tfoot>
          <td className=''>Total:</td>
          <td className="total-amount"></td>
          <td></td>
          <td></td>
        </tfoot>
      </table>

          </div>


          
          {/* Add more components or content here */}
        </div>
      </main>
    </div>
  )
}

export default Main
