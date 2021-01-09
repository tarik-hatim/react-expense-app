import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setEndDate, setStartDate } from '../actions/filters';


export class ExpenseListFilters extends React.Component{
   
    state = {
        calendarFocused : null
    }
   
    onTextChange = (e) =>{ 
        this.props.setTextFilter(e.target.value);
    };
    onSortByChange = (e) => {
        
        if(e.target.value === 'date'){
            this.props.sortByDate();

        }else if(e.target.value === 'amount'){
            this.props.sortByAmount();
        }
    }

    onDatesChange = ({startDate, endDate}) => {
        
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocused) =>{
        

        this.setState({ calendarFocused});
    };

    render(){
        return (

            <div>
                <input type="text" value={ this.props.filters.text } onChange={this.onTextChange} />
                <select value={this.props.filters.sortBy} onChange={this.onSortByChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                    
                    endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                    startDateId="start_date"
                    endDateId="end_date"
                    onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                    isOutsideRange={()=>{ false}}
                    numberOfMonths={1}
                    showClearDates={true}
                />
                
            </div>
        );
    }
}


const mapStateToProps = (state) => ( {
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);