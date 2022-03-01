import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) =>{

    // choose your own name
    //value recived from form.js
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        // the name you put in app.js
        props.onAddExpense(expenseData);
    }

    return(
        <div className="new-expense">
            {/* choose your own name */}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;