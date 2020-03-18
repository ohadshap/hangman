import React, { Component } from 'react';

class Letter extends Component {
    selectLetter = () => {
        this.props.selectLetter(this.props.letter)
      }
    
    render() {
        
    return <span onClick={this.selectLetter} className={this.props.status === undefined ? 'solution' : this.props.status ? 'clicked' : 'unclicked'}>{this.props.letter}</span>
    }
}
export default Letter