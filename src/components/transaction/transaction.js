import React from "react";

export default function transaction(props) {
  return (
    <div className="container" style={{ height: "50px" }}>
      <div className="card col-sm-3 col-md-5 mx-auto">
        <div className="card-body">
          <div style={{ textAlign: "left", float: "left", marginTop: "-7px" }}>
            {props.transaction.text}
          </div>
          <div
            style={{ textAlign: "right", float: "right", marginTop: "-7px" }}
          >
            {props.transaction.amount}
          </div>
        </div>
      </div>
    </div>
  );
}

// id={props.transaction.id}
