import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import ModalManager from './components/misc/modal/modal-manager.component';
import PrivateRoute from './components/router/private-route.component';
import PublicRoute from './components/router/public-route.component';
import AddEditExpense from './pages/add-edit-expense/add-edit-expense.page';
import Dashboard from './pages/dashboard/dashboard.page';
import Landing from './pages/landing/landing.page';
import NotFound from './pages/not-found/not-found.page';
import { startSetExpenses } from './store/slices/expenses.slice.js';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startSetExpenses());
  }, [dispatch]);

  return (
    <>
      <ModalManager />
      <PublicRoute exact path="/" component={Landing} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <Header />
            <Switch>
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path={['/add-expense', '/manage-expense/:id']} component={AddEditExpense} />
              <PrivateRoute path="*" component={NotFound} />
            </Switch>
          </>
        )}
      />
    </>
  );
};

export default App;
