import React from 'react'
import ReactDOM from 'react-dom';
import Routes from './routes/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';


//import ParamsExample from './components/ParamExample';

const store = configureStore();
console.log(store.getState());
store.dispatch(addExpense({description : 'Water bill', amount:  44000}));
store.dispatch(addExpense({description : 'Note bill', amount:  1500, createdAt: 1700}));
store.dispatch(addExpense({description : 'Gas bill', amount: 4350}));
// store.dispatch(setTextFilter('water'));

store.subscribe(()=>{
    console.log(store.getState());
})

const state = store.getState();
const expenses = getVisibleExpenses(state.expenses, state.filters);
console.log(expenses);

const jsx = (
    <Provider store={store}>
        <Routes />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));