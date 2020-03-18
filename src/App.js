import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Solution from './components/Solution';
import Score from './components/Score';
import Letters from './components/Letters';
import EndGame from './components/EndGame';

class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {
        word: "CALM",
        hint: "Your ideal mood when coding"
      },
      score: 100,
      gameStatus: false
    }
  }

  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  selectLetter = letter => {
    let newLetterStatus = {...this.state.letterStatus}
    newLetterStatus[letter] = true
    this.setState({
      letterStatus: newLetterStatus,
      score: this.state.solution.word.includes(letter) ? this.state.score + 5 : this.state.score - 20
    }, function() {
      this.checkScore()
      this.checkSuccess()
    })
  }

  checkScore = () => {
    if(this.state.score <= 0) {
      this.setState({
        gameStatus: true
      })
    }

  }

  checkSuccess = () => {
    let solutionLetters = this.state.solution.word
    let letters = solutionLetters.split("")
    for(let letter of letters) {
      if(!this.state.letterStatus[letter]) {
        return
      }
    }
    this.setState({
      gameStatus: true
    })
  }

  render() {
    return (
      <div className="App">
        {!this.state.gameStatus ?
          <div>
          <Score score={this.state.score}/>
          <Solution selectLetter={this.selectLetter}  letterStatus={this.state.letterStatus} solution={this.state.solution}/>
          <Letters selectLetter={this.selectLetter} letterStatus={this.state.letterStatus}/></div> :
          <EndGame score={this.state.score} word={this.state.solution.word}/>}
        </div>
       
        
    )
  }

}



export default App;