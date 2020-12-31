import {createStore, combineReducers } from 'redux';
import expenseReducer from '../reducers/expense';
import filtersReducer from '../reducers/filter';

//create the store
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            filters: filtersReducer,
            
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};
