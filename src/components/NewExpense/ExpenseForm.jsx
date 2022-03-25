import React, { useState } from 'react'
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // Use Multiple States
    const [enteredTitle, SetEnteredTitle] = useState('');
    const [enteredAmount, SetEnteredAmount] = useState('');
    const [enteredDate, SetEnteredDate] = useState('');

    // Use One State
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (e) => {
        // 1.
        SetEnteredTitle(e.target.value);
        // 2.
        //setUserInput({ ...userInput, enteredTitle: e.target.value })
        // 3. 
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: e.target.value }
        // })
    };
    const amountChangeHandler = (e) => {
        // 1.
        SetEnteredAmount(e.target.value);
        // 2.
        //setUserInput({ ...userInput, enteredAmount: e.target.value })
        // 3. 
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: e.target.value }
        // })
    }
    const dateChangeHandler = (e) => {
        // 1.
        SetEnteredDate(e.target.value);
        // 2.
        //setUserInput({ ...userInput, enteredDate: e.target.value })
        // 3.
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: e.target.value }
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        }

        props.onSaveExpenseData(expenseData);
        SetEnteredTitle('');
        SetEnteredAmount('');
        SetEnteredDate('');

    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label >Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>

                <div className='new-expense__control'>
                    <label >Amount</label>
                    <input type="number" min={0.01} step={0.01} value={enteredAmount} onChange={amountChangeHandler} />

                </div>

                <div className='new-expense__control'>
                    <label >Date</label>
                    <input type="date" min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler} />

                </div>
            </div>

            <div className="new-expense__actions">
                <button type='button' onClick={props.onCancel}> Cancel</button>
                <button type='submit'>Add Submite</button>

            </div>
        </form>

    );
}

export default ExpenseForm