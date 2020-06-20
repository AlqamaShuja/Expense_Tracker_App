import React, { Component } from "react";
import Balance from "./totalBalance";
import IncomeExpense from "./income_expense";
import TransactionList from "./transaction/transaction_history";
import NewTransaction from "./transaction/newTransaction";

class Main extends Component {
  state = {
    transaction: [
      { id: 1, text: "Cash", amount: 200 },
      { id: 2, text: "Buy Shirts", amount: -30 },
      { id: 3, text: "Camera", amount: -40 },
      { id: 4, text: "Book", amount: -50 },
    ],
    text: "",
    amount: "",
  };

  inputChange = (e) => {
    this.setState({
      ...this.state.transaction,
      [e.target.name]: e.target.value,
    });
  };

  addNewTransaction = (event) => {
    event.preventDefault();
    const newTx = [
      ...this.state.transaction,
      {
        id: this.state.transaction.length + 1,
        text: this.state.text,
        amount: parseFloat(this.state.amount),
      },
    ];

    this.setState({
      transaction: newTx,
      text: "",
      amount: "",
    });
  };

  income = () => {
    let total = 0;
    this.state.transaction.forEach((tx) => {
      if (tx.amount > 0) total = total + tx.amount;
    });

    // console.log(total);
    return total;
  };

  expense = () => {
    let total = 0;
    this.state.transaction.forEach((tx) => {
      if (tx.amount < 0) total = total + tx.amount;
    });

    // console.log(total);
    return total;
  };

  render() {
    return (
      <div>
        <div
          className="font-weight-bold"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          Expense Tracker App
        </div>
        <Balance balance={this.income() + this.expense()} />
        <IncomeExpense income={this.income()} expense={this.expense()} />
        <TransactionList transaction={this.state.transaction} />
        <NewTransaction
          inputChange={this.inputChange}
          addTransaction={this.addNewTransaction}
          text={this.state.text}
          amount={this.state.amount}
        />
      </div>
    );
  }
}

export default Main;
