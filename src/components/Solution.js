import React, { Component } from 'react';

class Solution extends Component {
    render() {
        let blanks = ['_  ', '_  ', '_  ', '_  ']
        let hint = 'bla bla bla'
        return (<div>
            {blanks.map(b => <span>{b}</span>)}
        <div>{hint}</div>
        </div>)
    }
}
export default Solution