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
      selectedCharacter: {},
      selectedJumper: {},
      fail: 'Failed to communicate with server'
    }

    this.newCharacter = this.newCharacter.bind(this)
    this.deleteChar = this.deleteChar.bind(this)
    this.selectChar = this.selectChar.bind(this)
    this.changeName = this.changeName.bind(this)
  }

  componentDidMount(){
    axios.get('api/characters').then(res => {
      this.setState({charactersArr: res.data})
    })
    .catch((e) => {
      alert(this.state.fail)
      console.log(e)
    })
  }
  
  newCharacter(name, image, type){
    axios.post('/api/characters', name, image, type).then(res => {
      this.setState({charactersArr: res.data})
    })
    .catch(() => alert(this.state.fail))
  }
  
  deleteChar(id){
    axios.delete(`/api/characters/${id}`).then(res => {
      this.setState({charactersArr: res.data})
    })
    .catch((e) => {
      alert(this.state.fail)
      console.log(e)
    })
  }

  selectChar(name, image, type){
    axios.post('/api/player', {name, image, type}).then(res => {
      if(res.data.type === 'character'){
        this.setState({selectedCharacter: res.data})
      } else {
        this.setState({selectedJumper: res.data})
      }
    })
    .catch((e) => {
      alert(this.state.fail)
      console.log(e)
    })
  }
  
  changeName(id, newName){
    axios.put(`/api/player/${id}`, {newName}).then(res => {
      if(res.data.type === 'character'){
        this.setState({selectedCharacter: res.data})
      } else {
        this.setState({selectedJumper: res.data})
      }
    })
    .catch((e) => {
      alert(this.state.fail)
      console.log(e)
    })
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
          selectedCharacter={this.state.selectedCharacter}
          selectChar={this.selectChar}
          changeName={this.changeName}
          />
        Choose Your Obstacle
        <Jumpers
          charactersArr={this.state.charactersArr}
          newCharacter={this.newCharacter}
          deleteChar={this.deleteChar}
          selectedJumper={this.state.selectedJumper}
          selectChar={this.selectChar}
          changeName={this.changeName}
        />
      </div>
    );
  }
}

export default App;