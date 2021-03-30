import { Button } from 'antd';
import cn from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.box}>
      <div className="container">
        <div className={styles.flex}>
          <Link to="/dashboard">
            <h1>Expense Tracker</h1>
          </Link>
          <Button onClick={() => console.log('Logging out')} className={cn('btn-light', styles.logout)}>
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
