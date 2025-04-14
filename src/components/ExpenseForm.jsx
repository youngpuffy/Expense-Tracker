import React, { useState } from 'react';

function ExpenseForm({onAddExpense}){ 
  const [formData, setFormData] = useState({
    description:'',
    category:'',
    amount:'',
    date:'',
  });

  const handleChange = (e)=>{ 
    setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  })}

  const handlesubmit =(e) =>{
    e.preventDefault();
    onAddExpense({...formData, amount: parseFloat(formData.amount)});
    setFormData({description:'',category:'',amount:'',date:''})
  }
  return( 
    <div id="form">
    <form onSubmit={handlesubmit}>
     
      <input 
      type ="text"
      name='description'
      placeholder='Description'
      value={formData.description}
      onChange={handleChange}
      required
      />
       <input 
      type ="text"
      name='category'
      placeholder='Expense Category'
      value={formData.category}
      onChange={handleChange}
      required
      />
      <input 
      type ="number"
      name='amount'
      placeholder='Amount'
      value={formData.amount}
      onChange={handleChange}
      required
      />
       <input 
      type ="date"
      name='date'
      placeholder='Date'
      value={formData.date}
      onChange={handleChange}
      required
      />
      <button type='submit'>Add Expense</button>
    </form>
    </div>
  )
}

export default ExpenseForm;