import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';
//ADD_EXPENSE
const addExpense = ({note ='', description = '', amount = 0, createdAt=0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        amount,
        createdAt
    }
});
//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
//EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});


const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) =>{
    
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {...expense, ...action.updates}
                }else{
                    return expense;
                }
            })
        default:
            return state;
    }
};


//Filters Reducer
// text => '', sortBy => date, startDate => undefined , endDate => undefined

const filtersReducerDefaultState = {
    text : '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {...state, text: action.text };
        case 'SORT_BY_DATE':
            return {...state, sortBy : 'date'};
        case 'SORT_BY_AMOUNT':
            return {...state, sortBy: 'amount'};
        case 'SET_START_DATE':
            return {...state, startDate: action.startDate};
        case 'SET_END_DATE':
            return {...state, endDate: action.endDate};    
        default:
            return state;
    }
}

const getVisibleExpenses = (expenses, {startDate, sortBy, endDate, text}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
    
    
};
//create the store

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
);
store.subscribe(() => {
    const state = store.getState();
    console.log(getVisibleExpenses(state.expenses, state.filters));
});

const expenseOne = store.dispatch(addExpense({description:'Rent', amount:150, createdAt: -2750}));
const expenseTwo = store.dispatch(addExpense({description:'Clothes', amount:320, createdAt: -1000}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 541}));

 //store.dispatch(setTextFilter('clo'));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(120));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));

const demoState = {
    expenses : [
        {
            id: 'shshqh500',
            description: 'Juanary rent',
            note: 'this was the last payment for this address',
            amount: 54500,
            createdAt: 0
        }
    ],
    filters:{
        text: 'rent',
        sortBy: 'amount', //or date
        startDate: undefined,
        endDate: undefined
    }
};