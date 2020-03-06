import React, { Component } from 'react';

class Letter extends Component {
    render() {
        let abc = []
        for(let i = 0; i < 26; i++) {
            abc.push(String.fromCharCode(65 + i))
        }
        return (<div>
            {abc}
        </div>)
    }
}
export default Letter