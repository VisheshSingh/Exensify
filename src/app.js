import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const ExpensifyDashBoard = () => (
    <div>This is ExpensifyDashboard</div>
);

const AddExpense = () => (
    <div>This is Add expense component</div>
);

const EditExpense = () => (
    <div>This is Edit expense component</div>
);

const Help = () => (
    <div>This is Help page</div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpensifyDashBoard} exact={true}/>
            <Route path="/create" component={AddExpense}/>
            <Route path="/edit" component={EditExpense}/>
            <Route path="/help" component={Help}/>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));