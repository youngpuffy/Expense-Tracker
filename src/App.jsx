import React, { useState } from 'react';
import ExpenseForm from '../src/components/ExpenseForm.jsx';
import ExpenseTable from '../src/components/ExpenseTable.jsx';
import SearchBar from '../src/components/SearchBar.jsx';
import './App.css'
function App() {
    const [expenses, setExpenses] = useState([ { id: 3, description: 'Gas', amount: 30, category: 'Transportation', date:'2025-04-07' },]);
    const [searchTerm, setSearchTerm] = useState('')

    const addExpense = (expense) => {
        setExpenses([...expenses, { ...expense, id: Date.now() }])
    }
    const filteredExpenses = expenses.filter((expense) =>
        expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        expense.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    const deleteExpense = (id) => {
        setExpenses(expenses.filter((expense) => expense.id !== id));
      };
    
      const sortExpenses = (sortBy) => {
        const sortedExpenses = [...filteredExpenses].sort((a, b) => {
          if (a[sortBy] < b[sortBy]) return -1;
          if (a[sortBy] > b[sortBy]) return 1;
          return 0;
        });
        setExpenses(sortedExpenses);
      };
    return (
        <>
            <div className='header'>
            <h2>Expense Tracker</h2>
            <p>Effortlessly taking control of your financial life.</p>
            </div>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div id="global">
                <div className='left-panel'>
            <ExpenseForm onAddExpense={addExpense} />
            </div>
            <div className='right-panel'>
            <ExpenseTable expenses={filteredExpenses} deleteExpense={deleteExpense} sortExpenses={sortExpenses}/>
            </div>
            </div>
            </>
    )
}
export default App;
