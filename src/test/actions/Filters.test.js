import moment from 'moment';
import { setStartDate,  setEndDate, setTextFilter, sortByAmount, sortByDate} from  '../../actions/filters';


test('Should generate start date action object', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type : 'SET_START_DATE',
        startDate: moment(0)
        
    })
});

test('Sould generate end date action object', () => {
    const action = setEndDate(moment(0));
    
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});


test('Should set text filter action object', () => {
    const action = setTextFilter('hello');

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text : 'hello'
    })
});

test('Sould reset text action object', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',  
        text : ''
    })
})

test('Should generate sort by amoount action object', () => {
    const action = sortByAmount();

    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });

});

test('Should generate sort by date action object', () =>  {
    const action = sortByDate();

    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});