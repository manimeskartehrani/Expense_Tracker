import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [hidden, setHidden] = useState(false);

    const formVisibilityHandler = () => {
        setHidden(true)
    }
    const saveExpenseDataHandler = (enterdExpenseData) => {
        const expenseData = {
            ...enterdExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpenseData(expenseData);
        setHidden(false);
    }
    const hiddenFormHandler = () => {
        setHidden(false)
    }

    return (
        <div className='new-expense'>
            {!hidden && <button onClick={formVisibilityHandler}>Add New Expense</button>}
            {hidden && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hiddenFormHandler} />}

        </div>
    )
}

export default NewExpense