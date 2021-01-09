import moment from 'moment';
export default [
    {
        id: '1',
        description: 'Gum',
        note: '',
        amount: 18000,
        createdAt: 0
    },
    {
        id: '2',
        description: 'Rent',
        note: '',
        amount: 50000,
        createdAt: moment(0).subtract('3', 'days').valueOf()
    },
    {
        id: '3',
        description: 'Car Credit',
        note: '',
        amount: 19000,
        createdAt: moment(0).add('4', 'days').valueOf()
    }
];