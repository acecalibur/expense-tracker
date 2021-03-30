import { format } from 'date-fns';
import PropTypes from 'prop-types';
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

ExpenseItem.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  date: PropTypes.oneOfType([PropTypes.number, PropTypes.instanceOf(Date)]).isRequired,
};

export default ExpenseItem;
