import React, { useState } from 'react';
import ExpenseForm from '../src/components/ExpenseForm.jsx';
import ExpenseTable from '../src/components/ExpenseTable.jsx';
import SearchBar from '../src/components/SearchBar.jsx';
import './App.css'
function App() {
    const [expenses, setExpenses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    const addExpense = (expense) => {
        setExpenses([...expenses, { ...expense, id: Date.now() }])
    }
    const filteredExpenses = expenses.filter((expense) =>
        (expense.name + '' + expense.description)
            .toLowerCase()
            .includes(searchTerm.toLowerCase)
    )
    return (
        <>
            <h2>Expense Tracker</h2>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div id="global">
            <ExpenseForm onAddExpense={addExpense} />
            <ExpenseTable expenses={filteredExpenses} />
            </div>
            </>
    )
}
export default App;