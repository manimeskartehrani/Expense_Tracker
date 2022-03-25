import React, { useState } from 'react'

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

import './Expenses.css';




function Expenses(props) {
    const [yearFilter, setYearFilter] = useState('2020');

    const dataFilterHandler = (filteredYear) => {
        setYearFilter(filteredYear);
    }

    const expenseFiltered = props.expensesItems.filter(items => {
        return items.date.getFullYear().toString() === yearFilter;
    });



    return (

        <div>

            <Card className='expenses' >
                <ExpensesFilter selected={yearFilter} onDataFilter={dataFilterHandler} />
                <ExpensesChart expenses={expenseFiltered} />
                <ExpensesList filteredItems={expenseFiltered} />

                {/* <ExpenseItem

                    title={props.expensesItems[0].title}
                    amount={props.expensesItems[0].amount}
                    date={props.expensesItems[0].date}
                />
                <ExpenseItem
                    title={props.expensesItems[1].title}
                    amount={props.expensesItems[1].amount}
                    date={props.expensesItems[1].date}
                />
                <ExpenseItem
                    title={props.expensesItems[2].title}
                    amount={props.expensesItems[2].amount}
                    date={props.expensesItems[2].date}
                />
                <ExpenseItem
                    title={props.expensesItems[3].title}
                    amount={props.expensesItems[3].amount}
                    date={props.expensesItems[3].date}
                /> */}
            </Card>
        </div>
    )
}

export default Expenses