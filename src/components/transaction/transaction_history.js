import React, { Component } from "react";
import Transaction from "./transaction";

class TransactionList extends Component {
  render() {
    return (
      <div>
        <h2 className="text-primary">History</h2>
        {this.props.transaction.map((tx) => (
          <Transaction transaction={tx} key={tx.id} />
        ))}
      </div>
    );
  }
}

export default TransactionList;
