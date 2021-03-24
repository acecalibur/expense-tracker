import { Space } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import ExpenseInputFilters from '../../components/expenses/expense-input-filters/expense-input-filters.component.jsx';
import ExpenseList from '../../components/expenses/expense-list/expense-list.component.jsx';
import { getVisibleExpenses } from '../../store/selectors.js';

const Dashboard = () => {
  const visibleExpenses = useSelector(getVisibleExpenses);

  return (
    <main>
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <ExpenseInputFilters />
        <ExpenseList expenses={visibleExpenses} />
      </Space>
    </main>
  );
};

export default Dashboard;
