import React from 'react';

function ExpenseTable ({ expenses, deleteExpense, sortExpenses }) {
  return(
     <table>
      <thead>
        <tr>
         <th onClick={() => sortExpenses('description')}>Description</th>
          <th onClick={() => sortExpenses('category')}>Category</th>
          <th onClick={() => sortExpenses('amount')}>Amount (ksh)</th>
          <th onClick={() => sortExpenses('date')}>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense)=> (
            <tr key={expense.id}>
              {/* <td>{expense.description.split ('')[0]}</td> */}
             <td>{expense.description}</td>
             <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
            <td>
            <button onClick ={()=> deleteExpense(expense.id)}>Delete</button>
            </td>
          </tr>
        ))}
        
      </tbody>
     </table>
  )
}
export default ExpenseTable;
