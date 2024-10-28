import React from "react";


const data = [
  {
    date: "2024-10-28",
    ExpenseAmount: 1320,
    typeOfPayment: "Expense",
    isContributed: true,
    ContributedWith: ["Mohan" , "Pradeep"],
    ContributionArray: [400, 380],
  },
  {
    date: "2024-10-25",
    ExpenseAmount: -370,
    typeOfPayment: "Borrowing",
    isContributed: true,
    ContributedWith: ["Pradeep"],
    ContributionArray: [130],
  },
  {
    date: "2024-10-22",
    ExpenseAmount: 2370,
    typeOfPayment: "Expense",
    isContributed: false,
    ContributedWith: [""],
    ContributionArray: [0],
  },
];

function ExpenseTable() {
  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Type of Payment</th>
          <th>Is Contributed</th>
          <th>Contributed With</th>
          <th>Contribution Array</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className={`${index%2 ? "odd" : "even"}`}>
            <td>{item.date}</td>
            <td>{item.ExpenseAmount}</td>
            <td>{item.typeOfPayment}</td>
            <td>{item.isContributed ? "Yes" : "No"}</td>
            <td>{item.ContributedWith.join(", ")}</td>
            <td>{item.ContributionArray.join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
