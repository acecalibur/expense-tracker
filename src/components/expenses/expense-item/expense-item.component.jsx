import { format } from 'date-fns';
import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseItem = ({ id, description, amount, date }) => {
  return (
    <Link to={`/manage-expense/${id}`}>
      <div>
        <h2>{amount}</h2>
        <h3>
          {description}-{format(date, 'MM-dd-yyyy')}
        </h3>
      </div>
    </Link>
  );
};

export default ExpenseItem;
