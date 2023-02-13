import React from "react";
import "./App.css";
import { connect } from "react-redux";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <div className="col">
        <div>
          <span>A:</span>
          <span>{props.a}</span>
          <br></br>
        </div>
        <button
          onClick={() => {
            console.log(props.updateA(props.b));
          }}
        >
          Update A
        </button>
      </div>
      <div className="col">
        <div>
          <span>B:</span>
          <span>{props.b}</span>
        </div>
        <button
          onClick={() => {
            props.updateB(props.a);
          }}
        >
          Update B
        </button>
      </div>
    </div>
  );
}

const mapDispachToProps = (dispach) => {
  return {
    updateA: (b) =>
      dispach({
        type: "UPDATE_A",
        b: b,
      }),
    updateB: (a) =>
      dispach({
        type: "UPDATE_B",
        a: a,
      }),
  };
};

const mapStateToProps = (state) => {
  return {
    a: state.rA.a,
    b: state.rB.b,
  };
};

export default connect(mapStateToProps, mapDispachToProps)(App);
