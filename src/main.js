import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Main() {
    const location = useLocation();
    const [remaining, setRemaining] = useState(location.state || 0);
    const [expenses, setExpenses] = useState([]);
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    function addExpense() {
        const expenseAmount = parseFloat(amount);
        if (isNaN(expenseAmount) || expenseAmount <= 0) {
            alert("Please enter a valid expense amount.");
            return;
        }
        if (remaining >= expenseAmount) {
            const newExpense = {
                name,
                amount: expenseAmount,
            };
            setRemaining(prevRemaining => prevRemaining - expenseAmount);
            setExpenses(prevExpenses => [...prevExpenses, newExpense]);
            setName("");
            setAmount("");
        } else {
            alert("Not enough balance.");
        }
    }

    return (
        <div className="p-6 bg-gray-100">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter expense name"
                className="border p-2 rounded mb-4 w-full"
            />
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter expense amount"
                className="border p-2 rounded mb-4 w-full"
            />
            <button
                onClick={addExpense}
                className="bg-blue-500 text-white p-2 rounded w-full"
            >
                Add Expense
            </button>
            <div className="mt-4">Remaining balance: ${remaining}</div>
            <ul className="mt-4">
                {expenses.map((exp, index) => (
                    <li key={index} className="border-b py-2">
                        {exp.name}: ${exp.amount.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Main;
