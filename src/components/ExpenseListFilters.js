import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setEndDate, setStartDate } from '../actions/filters';


class ExpenseListFilters extends React.Component{
    constructor(props){
        super(props);
        console.log(props);

        let focusedInput = null;
        if (props.autoFocus) {
            focusedInput = START_DATE;
        } else if (props.autoFocusEndDate) {
            focusedInput = END_DATE;
        }

        this.state = {
            focusedInput : null
        
        }
    }

    onDatesChange = ({startDate, endDate}) => {
        
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }

    onFocusChange = (focusedInput) =>{

        this.setState({ focusedInput});
    }

    render(){
        return (

            <div>
                <input type="text" value={ this.props.filters.text } onChange={(e) =>{ 
                this.props.dispatch(setTextFilter(e.target.value))
                }} />
                <select value={this.props.filters.sortBy} onChange={(e) => {
                    console.log(e.target.value);
                    if(e.target.value === 'date'){
                        this.props.dispatch(sortByDate());
                    }else if(e.target.value === 'amount'){
                        this.props.dispatch(sortByAmount());
                    }
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                    
                    endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                    startDateId="start_date"
                    endDateId="end_date"
                    onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                    isOutsideRange={()=>{ false}}
                    numberOfMonths={1}
                    showClearDates={true}
                />
                
            </div>
        );
    }
}

// const ExpenseListFilters = (props) => (
//     <div>
//         <input type="text" value={ props.filters.text } onChange={(e) =>{
            
//             props.dispatch(setTextFilter(e.target.value))
//         }} />
//         <select value={props.filters.sortBy} onChange={(e) => {
//             console.log(e.target.value);
//             if(e.target.value === 'date'){
//                 props.dispatch(sortByDate());
//             }else if(e.target.value === 'amount'){
//                 props.dispatch(sortByAmount());
//             }
//         }}>
//             <option value="date">Date</option>
//             <option value="amount">Amount</option>
//         </select>
//         <select value={props.filters.startDate}></select>
//     </div>
// );

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);