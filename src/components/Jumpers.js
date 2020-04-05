import React from 'react'
import axios from 'axios'
import Display from './Display'
import CharacterSelect from './CharacterSelect'

class Jumpers extends React.Component {
  constructor() {
    super()
    this.state = {
      character: [],
      name: '',
      image: ''
    }

    this.selectChar = this.selectChar.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  selectChar(id){
    axios.get(`api/characters/?id=${id}`).then(res => {
      this.setState({character: res.data})
    })
    .catch(() => alert(this.state.fail))
  }

  handleChange(name, value) {
    this.setState({[name]: value})
  }

  createChar(name, image) {
    const newChar = {
      name,
      image,
      type: 'jumper'
    }

    this.props.newCharacter(newChar)
  }

  render() {
    const charList = this.props.charactersArr
      .filter(character => character.type === 'jumper')
      .map(
        character => {
      return (
        <Display
          key={character.id}
          character={character}
          selectChar={this.selectChar}
          deleteChar={this.props.deleteChar}
        />
      )
    })

    const selected = this.state.character.map(character => {
      return (
        <CharacterSelect 
          key={character.id}
          character={character}
          changeName={this.props.changeName}
        />
      )
    })

    return (
      <div>
        {charList}
        Create Your own
        <input placeholder='Name' name='name' onChange={event => this.handleChange(event.target.name, event.target.value)}/>
        <input placeholder='Image' name='image' onChange={event => this.handleChange(event.target.name, event.target.value)}/>
        <button onClick={() => this.createChar(this.state.name, this.state.image)} >Create</button>
        {selected}
      </div>
    )
  }
}

export default Jumpers