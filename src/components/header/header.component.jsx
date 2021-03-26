import { Button } from 'antd';
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
          <Button size="large" onClick={() => console.log('Logging out')} className="btn-light">
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
