import React from 'react'
import ExpenseItem from './ExpenseItem'

import './ExpensesList.css'

const ExpensesList = (props) => {


    if (props.filteredItems.length === 0) {
        return <h2 className='expenses-list__fallback' > Found no expenses.
        </h2>
    }

    return (
        <ul className='expenses-list'>
            {props.filteredItems.map(items => (<ExpenseItem key={items.id}
                title={items.title} amount={items.amount} date={items.date} />))}
        </ul>
    )
}

export default ExpensesList