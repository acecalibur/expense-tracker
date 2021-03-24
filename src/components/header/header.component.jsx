import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './header.module.scss';

const Header = () => {
  return (
    <header className={classes.box}>
      <div className="container">
        <div className={classes.flex}>
          <Link to="/dashboard">
            <h1>Expense Tracker</h1>
          </Link>
          <Button onClick={() => console.log('Logging out')} className={classes.logout}>
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
