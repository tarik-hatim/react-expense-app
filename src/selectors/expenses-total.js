
export default (expenses) => {
    return expenses.reduce((sum, actualValue) => sum + actualValue.amount,0);
};

