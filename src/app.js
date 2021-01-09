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
import './firebase/firebase';


//import ParamsExample from './components/ParamExample';

const store = configureStore();


const jsx = (
    <Provider store={store}>
        <Routes />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));