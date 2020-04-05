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
    this.props.changeName(this.props.character.id, this.state.userInput)
    this.toggleEdit()
  }

  render() {
    return (
      <div>
      <img 
        className='selected-image'
        src={this.props.character.image}
        alt={this.props.character.name}
      />
      {this.state.edit ? (
        <div>
          <input onChange={event => this.handleChange(event.target.value)}/>
          <button onClick={this.toggleEdit}>Cancel</button>
          <button onClick={this.updateName}>Save</button>
        </div>
      ) : (<p onDoubleClick={this.toggleEdit}>{this.props.character.name}</p>)
      }
      </div>
    )
  }
}

export default CharacterSelect