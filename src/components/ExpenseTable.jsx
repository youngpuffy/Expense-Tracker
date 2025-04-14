import React from 'react';

function ExpenseTable ({ expenses }) {
  return(
    <div id="table">
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Category</th>
          <th>Amount (ksh)</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {expenses.length > 0?(
          expenses.map((expense)=> (
            <tr key={expense.id}>
             <td>{expense.description}</td>
             <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
            </tr>
          ))
        ):(
          <tr>
            <td>No expense found</td>
          </tr>
        )}
        
      </tbody>
    </table>
    </div>
  )
}
export default ExpenseTable;