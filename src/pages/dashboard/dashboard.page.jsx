import React from 'react';
import { useSelector } from 'react-redux';
import ExpenseInputFilters from '../../components/expenses/expense-input-filters/expense-input-filters.component';
import ExpenseList from '../../components/expenses/expense-list/expense-list.component';
import ExpenseSummary from '../../components/expenses/expense-summary/expense-summary.component';
import { selectVisibleExpenses } from '../../store/selectors';

const Dashboard = () => {
  const visibleExpenses = useSelector(selectVisibleExpenses);

  return (
    <main>
      <ExpenseSummary expenses={visibleExpenses} />
      <div className="container">
        <ExpenseInputFilters />
        <ExpenseList expenses={visibleExpenses} />
      </div>
    </main>
  );
};

export default Dashboard;
