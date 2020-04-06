import React from 'react'

class CharacterSelect extends React.Component {
  constructor() {
    super()
    this.state = {
      userInput: '',
      edit: false
    }

    this.toggleEdit = this.toggleEdit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.updateName = this.updateName.bind(this)
  }

  toggleEdit() {
    this.setState({edit: !this.state.edit})
  }

  handleChange(event) {
    this.setState({userInput: event})
  }

  updateName() {
    this.props.changeName(this.props.selectedCharacter.id, this.state.userInput)
    this.toggleEdit()
  }

  render() {
    return (
      <section className={`selected ${this.props.displayType === 'Character' ? 'hero' : 'villain'}`}>
      <img 
        className='selected-image'
        src={this.props.selectedCharacter.image}
        alt={this.props.selectedCharacter.name}
      />
      {this.state.edit ? (
        <section>
          <input onChange={event => this.handleChange(event.target.value)}/>
          <button onClick={this.toggleEdit}>Cancel</button>
          <button onClick={this.updateName}>Save</button>
        </section>
      ) : (<p className='name' onDoubleClick={this.toggleEdit}>{this.props.selectedCharacter.name}</p>)
      }
      </section>
    )
  }
}

export default CharacterSelect