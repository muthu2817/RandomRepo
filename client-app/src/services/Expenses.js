
import { ActionCreators } from "../app/ExpenseReducer";
export const GetExpense = async(dispatch) => {
    try {
        //api call
        const expenses = [
            { id: 1, description: 'groceries', amount: 2000 },
            { id: 2, description: 'gas', amount: 600 },
            { id: 3, description: 'loan', amount: 2500 },]

          dispatch(ActionCreators.setExpenses(expenses))
    }
    catch {
        console.log("Error!");
    }
}

