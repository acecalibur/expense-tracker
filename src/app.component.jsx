import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import Loader from './components/misc/loader/loader.component';
import AddEditExpense from './pages/add-edit-expense/add-edit-expense.page';
import Dashboard from './pages/dashboard/dashboard.page';
import Landing from './pages/landing/landing.page';
import NotFound from './pages/not-found/not-found.page';
import { asyncSelector } from './store/slices/async.slice';
import { startSetExpenses } from './store/slices/expenses.slice.js';

const App = () => {
  const dispatch = useDispatch();
  const { loading, initialized } = useSelector(asyncSelector);

  useEffect(() => {
    dispatch(startSetExpenses());
  }, [dispatch]);

  if (loading || (!loading && !initialized)) return <Loader />;

  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <Header />
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path={['/add-expense', '/manage-expense/:id']} component={AddEditExpense} />
              <Route path="*" component={NotFound} />
            </Switch>
          </>
        )}
      />
    </BrowserRouter>
  );
};

export default App;
