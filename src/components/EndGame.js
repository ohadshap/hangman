import React, { Component } from 'react';

class EndGame extends Component {
    
    render() {
        
        return (<div>
            {this.props.score > 0 ? 
            <div><h4>CONGRATULATIONS MASTER</h4><div>your score is {this.props.score}</div><button>Reset</button></div>
            : <div><div>The secret word was {this.props.word}</div><button>Reset</button></div>}
        </div>)
    }
}
export default EndGame