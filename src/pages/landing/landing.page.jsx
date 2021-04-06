import { Button } from 'antd';
import cn from 'classnames';
import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../store/slices/modal.slice.js';
import styles from './landing.module.scss';

const Landing = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.box}>
      <div className={styles.imageBox}>
        <img src="/assets/img/landing.svg" alt="Company logo" />
      </div>
      <div className={styles.content}>
        <h1>Expense Tracker</h1>
        <span className={styles.description}>The simplest way to manage and keep track of your expenses!</span>
        <div>
          <Button
            onClick={() => dispatch(openModal({ modalType: 'SignUpForm' }))}
            className={cn('btn-primary', styles.auth)}
          >
            Sign Up
          </Button>
          <Button
            onClick={() => dispatch(openModal({ modalType: 'SignInForm' }))}
            className={cn('btn-primary', styles.auth)}
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
