import { format } from 'date-fns';
import React from 'react';

const ExpenseItem = ({ description, amount, date }) => {
  return (
    <div>
      <h2>{amount}</h2>
      <h3>
        {description}-{format(date, 'MM-dd-yyyy')}
      </h3>
    </div>
  );
};

export default ExpenseItem;
