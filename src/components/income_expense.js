import React from "react";

function income_expense(props) {
  return (
    <div className="container col-sm-3 col-md-5">
      <div className="card-deck">
        <div className="card" style={{ height: "60px" }}>
          <div className="card-body">
            <h5 className="card-title text-success" style={{ margin: "-13px" }}>
              Income
            </h5>
            <p
              className="card-text font-weight-bold"
              style={{ margin: "10px" }}
            >
              ${props.income}
            </p>
          </div>
        </div>

        <div className="card" style={{ height: "60px" }}>
          <div className="card-body">
            <h5 className="card-title text-danger" style={{ margin: "-13px" }}>
              Expense
            </h5>
            <p
              className="card-text font-weight-bold"
              style={{ marginTop: "10px" }}
            >
              ${props.expense * -1}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default income_expense;
