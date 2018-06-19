import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// add expense - water bill
store.dispatch(addExpense({ description: 'water bill', note: 'may', amount: 200, createdAt: 99000 }));
// add expense - gas bill
store.dispatch(addExpense({ description: 'gas bill', note: 'june', amount: 100, createdAt: 103000 }));
store.dispatch(addExpense({ description: 'rent' , amount: '109500'}));


// getVisibleExpenses - print visible to screen
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

