import cn from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './expense-summary.module.scss';

const ExpenseSummary = () => {
  return (
    <section className={styles.box}>
      <div className="container">
        <h2 className={styles.title}>Viewing X expenses totalling Y</h2>
        <Link to="/add-expense" className={cn('btn-info', styles.addExpense)}>
          Add Expense
        </Link>
      </div>
    </section>
  );
};

export default ExpenseSummary;
