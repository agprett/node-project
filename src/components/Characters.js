import React from 'react'
import axios from 'axios'
import Display from './Display'
import CharacterSelect from './CharacterSelect'

class Characters extends React.Component {
  constructor() {
    super()
    this.state = {
      character: [],
      name: '',
      image: ''
    }

    this.selectChar = this.selectChar.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.createChar = this.createChar.bind(this)
  }

  selectChar(id) {
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
      type: "character",
    }
    this.props.newCharacter(newChar)
    this.setState({
    name: '',
    image: ''})
  }

  render() {
    const charList = this.props.charactersArr
      .filter(character => character.type === 'character')
      .map(character => {
        return (
          <Display
            key={character.id}
            character={character}
            selectChar={this.selectChar}
            deleteChar={this.props.deleteChar}
          />
        )
      }
    )
                            
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
      <section className='characters'>
        <section className='selector'>
          {charList}
        </section>
        <section className='create-own'>
          Create Your Own:
          <input placeholder='Name' name='name' value={this.state.name} onChange={event => this.handleChange(event.target.name, event.target.value)}/>
          <input placeholder='Image URL' name='image'value={this.state.image} onChange={event => this.handleChange(event.target.name, event.target.value)}/>
          <button onClick={() => this.createChar(this.state.name, this.state.image)} >Create</button>
        </section>
        <section className='selected-section'>
          Selected Character
          {selected}
        </section>
      </section>
    )
  }
}

export default Characters