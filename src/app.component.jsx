import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import AddEditExpense from './pages/add-edit-expense/add-edit-expense.page';
import Dashboard from './pages/dashboard/dashboard.page';
import Landing from './pages/landing/landing.page';
import NotFound from './pages/not-found/not-found.page';

const App = () => {
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
              <Route exact path={['/add-expense', '/edit-expense/:id']} component={AddEditExpense} />
              <Route path="*" component={NotFound} />
            </Switch>
          </>
        )}
      />
    </BrowserRouter>
  );
};

export default App;
