import React, { Component } from 'react';
import Letter from './Letter';

class Solution extends Component {
    selectLetter = (letter) => {
        this.props.selectLetter(letter)
      }
    
    render() {
        let letters = this.props.solution.word.split("")
    return (
        <div>
            {letters.map(l => {
                return this.props.letterStatus[l] ?
                    <Letter selectLetter={this.selectLetter} letter={l}/> :
                    <Letter selectLetter={this.selectLetter} status={false} letter={'_ '}/>
            })}
            <div>{this.props.solution.hint}</div>
        </div>
    )
    }
}
export default Solution