import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
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

const NotFoundPage = () => (
    <div>
        404! - <Link to="/">Go home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/edit">Edit</Link>
        <Link to="/help">Help</Link>
    </header>
);


const routes = (
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

ReactDOM.render(routes, document.getElementById('app'));