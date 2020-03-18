import React, { Component } from 'react';
import Letter from './Letter';

class Letters extends Component {
    selectLetter = (letter) => {
        this.props.selectLetter(letter)
      }
    
    render() {
        
        return (<div>
            <div>Available Letters</div>
            {Object.keys(this.props.letterStatus)
            .map(l => <Letter selectLetter={this.selectLetter} status={this.props.letterStatus[l]} letter={l}/>)}
            
        </div>)
    }
}
export default Letters