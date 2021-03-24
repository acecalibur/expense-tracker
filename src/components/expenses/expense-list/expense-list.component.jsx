import { Space } from 'antd';
import React from 'react';
import ExpenseItem from '../expense-item/expense-item.component';

const ExpenseList = ({ expenses }) => {
  return (
    <section>
      <div className="container">
        <Space direction="vertical">
          {expenses.map((expense) => (
            <ExpenseItem key={expense.id} {...expense} />
          ))}
        </Space>
      </div>
    </section>
  );
};

export default ExpenseList;
