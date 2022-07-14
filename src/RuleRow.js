import React, { Component } from 'react';
import './RuleRow.css'


class RuleRow extends Component {
  render() {
    const { score , doScore , name , description } = this.props;
    // console.log(score , doScore , name , description)
    // console.log(description)
    return (
      <tr className={score === undefined ? 
      'RuleRow RuleRow-active' :
       'RuleRow-disabled'} onClick={score === undefined ? doScore : null}>
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{score === undefined ? description : score}</td>
      </tr>
    )
  }
}

export default RuleRow;