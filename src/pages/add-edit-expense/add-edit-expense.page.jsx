import React from 'react';
import ExpenseForm from '../../components/expenses/expense-form/expense-form.component';

const AddEditExpense = () => {
  return (
    <div style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <h2 style={{ textAlign: 'center' }}>Add Edit Expense Page</h2>
      <ExpenseForm />
    </div>
  );
};

export default AddEditExpense;
