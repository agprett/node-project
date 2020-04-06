import React from 'react'
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

    this.handleChange = this.handleChange.bind(this)
    this.createChar = this.createChar.bind(this)
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
    this.setState({
      name: '',
      image: ''})
  }

  render() {
    const charList = this.props.charactersArr
      .filter(character => character.type === 'jumper')
      .map(character => {
        return (
          <Display
            key={character.id}
            character={character}
            selectChar={this.props.selectChar}
            deleteChar={this.props.deleteChar}
          />
        )
      }
    )

    return (
      <section className='characters'>
        <section className='selector'>
          {charList}
        </section>
        <section className='create-own'>
          Create Your own
          <input placeholder='Name' name='name' onChange={event => this.handleChange(event.target.name, event.target.value)}/>
          <input placeholder='Image URL' name='image' onChange={event => this.handleChange(event.target.name, event.target.value)}/>
          <button onClick={() => this.createChar(this.state.name, this.state.image)} >Create</button>
        </section>
        <section className='selected-section'>
          Selected Obstacle
          <CharacterSelect 
            key={this.props.selectedJumper.id}
            selectedCharacter={this.props.selectedJumper}
            changeName={this.props.changeName}
            displayType='Jumper'
          />
        </section>
      </section>
    )
  }
}

export default Jumpers