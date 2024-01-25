const initialState = {
    expenses: []
}

export const ActionTypes = {
    SET_EXPENSES: 'SET_EXPENSES',
    Del_EXPENSES: 'DEL_EXP'
}

export const ActionCreators = {
    setExpenses: payload => ({ type: ActionTypes.SET_EXPENSES, payload }),
    delExpenses: payload => ({ type: ActionTypes.Del_EXPENSES, payload })
}

const ExpenseReducer = (state=initialState, action) => {

    switch (action.type) {
        case ActionTypes.SET_EXPENSES:
            return { ...state, expenses: [...action.payload] };
        default:
                return state;
    }
}

export default ExpenseReducer;
