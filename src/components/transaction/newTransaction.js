import React from "react";

export default function newTransaction(props) {
  return (
    <div className="container">
      <div
        className="font-weight-bold text-primary"
        style={{
          fontSize: "22px",
          fontFamily: "Arial, Helvetica, sans-serif",
          marginTop: "15px",
        }}
      >
        <ins> Add New Transaction </ins>
      </div>

      <form>
        <label className="font-weight-bold" style={{ marginRight: "344px" }}>
          Text
        </label>
        <input
          className="form-control col-sm-3 col-md-5 mx-auto"
          type="text"
          placeholder="Enter text.."
          onChange={(e) => props.inputChange(e)}
          name="text"
          value={props.text}
        />
        <label className="font-weight-bold" style={{ marginRight: "320px" }}>
          Amount
        </label>
        <p style={{ marginRight: "120px" }}>
          (negative-expense, positive-income)
        </p>
        <input
          className="form-control col-sm-3 col-md-5 mx-auto"
          type="text"
          value={props.amount}
          placeholder="Enter Amount.."
          onChange={(e) => props.inputChange(e)}
          name="amount"
        />
        <button
          className="btn btn-primary col-sm-3 col-md-5 mx-auto"
          onClick={(e) => props.addTransaction(e)}
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}
