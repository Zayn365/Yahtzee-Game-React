import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numbVal : ['one','two','three','four','five','six']
  }

  handleClicker = () => {
    this.props.handleClick(this.props.idx)
  }

  render() {
    const classVal = `fas fa-dice-${this.props.numbVal[this.props.val - 1]} Die fa-5x `
    return (
      <i
        className={classVal}
        onClick={this.handleClicker}
        disabled={this.props.locked}
      />
    );
  }
}

export default Die;
