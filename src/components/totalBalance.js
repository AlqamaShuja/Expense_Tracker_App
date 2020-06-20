import React from "react";

function totalBalance(props) {
  return (
    <div
      className="text-primary"
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <h3>
        Total Balance:{" "}
        <span className="font-weight-bold"> ${props.balance} </span>
      </h3>
    </div>
  );
}

export default totalBalance;
