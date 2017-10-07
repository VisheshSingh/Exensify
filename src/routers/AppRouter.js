import React from 'react';
import ExpensifyDashBoard from '../components/ExpensifyDashBoard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import Help from '../components/Help';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpensifyDashBoard} exact={true}/>
                <Route path="/create" component={AddExpense}/>
                <Route path="/edit" component={EditExpense}/>
                <Route path="/help" component={Help}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>  
    </BrowserRouter>
);

export default AppRouter;