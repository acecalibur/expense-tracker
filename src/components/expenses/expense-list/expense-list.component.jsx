import { Space } from 'antd';
import PropTypes from 'prop-types';
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

ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      date: PropTypes.oneOfType([PropTypes.number, PropTypes.instanceOf(Date)]).isRequired,
      note: PropTypes.string,
    }),
  ),
};

export default ExpenseList;
