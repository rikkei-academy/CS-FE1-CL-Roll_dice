import React, { Component } from "react";
import "./RollDice.css";
import Die from "./Die";

class RollDice extends Component {
  // Face numbers passes as default props

  constructor(props) {
    super(props);

    // States
  }

  render() {
    return (
      <div className='RollDice'>
        <div className='RollDice-container'>
          <Die face={die1} rolling={rolling} />
          <Die face={die2} rolling={rolling} />
        </div>
        <button className={handleBtn}></button>
      </div>
    );
  }
}

export default RollDice;
