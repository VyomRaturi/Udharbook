import React from 'react'
import ExpenseTable from './table';

const Transaction = () => {
  return (
    <div className="max-w-[78vw] h-[90.8vh] overflow-x-scroll p-8">
      <h1 className="title text-[36px] font-bold font-noto">Transactions</h1>
      <ExpenseTable />
    </div>
  );
}

export default Transaction