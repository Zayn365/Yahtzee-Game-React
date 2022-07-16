import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numbVal : ['one','two','three','four','five','six'],
    val: 1
  }

  handleClicker = () => {
    this.props.handleClick(this.props.idx)
  }

  render() {
    const {numbVal , locked , val, rolling} = this.props;
    const classVal = `fas fa-dice-${numbVal[val - 1]} Die fa-5x ${locked ? 'Die-locked ' : ''} ${rolling ? 'Die-rolling' : ''}`
    return (
      <i
        className={classVal}
        // style={{ backgroundColor: this.props.locked ? "gray" : "black" }}
        onClick={this.handleClicker}
        disabled={locked}
      />
    );
  }
}

export default Die;
