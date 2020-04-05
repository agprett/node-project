import React from 'react';
import axios from 'axios'

import './App.css';

import Header from './components/Header'
import Characters from './components/Characters'
import Jumpers from './components/Jumpers'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      charactersArr: [],
      fail: 'Failed to communicate with server'
    }

    this.newCharacter = this.newCharacter.bind(this)
    this.changeName = this.changeName.bind(this)
    this.deleteChar = this.deleteChar.bind(this)
  }

  componentDidMount(){
    axios.get('api/characters').then(res => {
      this.setState({charactersArr: res.data})
    })
    .catch(() => alert(this.state.fail))
  }
  
  newCharacter(name, image, type){
    axios.post('/api/characters', name, image, type).then(res => {
      this.setState({charactersArr: res.data})
    })
    .catch(() => alert(this.state.fail))
  }
  
  changeName(id, newName){
    axios.put(`/api/characters/${id}`, {newName}).then(res => {
      this.setState({charactersArr: res.data})
    })
    .catch(() => alert(this.state.fail))
  }
  
  deleteChar(id){
    axios.delete(`/api/characters/${id}`).then(res => {
      this.setState({charactersArr: res.data})
    })
    .catch(() => alert(this.state.fail))
  }

  render() {
    return (
      <div className="App">
        <Header />
        Choose Your Character
        <Characters 
          charactersArr={this.state.charactersArr}
          newCharacter={this.newCharacter}
          deleteChar={this.deleteChar}
          changeName={this.changeName}
        />
        Choose Your Enemy
        <Jumpers
          charactersArr={this.state.charactersArr}
          newCharacter={this.newCharacter}
          deleteChar={this.deleteChar}
          changeName={this.changeName}
        />
      </div>
    );
  }
}

export default App;