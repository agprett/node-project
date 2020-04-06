import React from 'react'

class Game extends React.Component {
  constructor() {
    super()
    this.state = {
      jumping: false
    }

    this.jumping = this.jumping.bind(this)
    this.notJumping = this.notJumping.bind(this)
  }

  jumping() {
    this.setState({jumping: true})
  }

  notJumping() {
    setTimeout((() => {this.setState({jumping: false})}), 1500)
  }

  render() {
    return (
      <section 
        onKeyDown={() => {
          if(this.state.jumping === false){
            this.jumping()
            this.notJumping()
          }
        }}
        tabIndex='0'
        className='game-background'
      >
        <img
          className={`runner ${this.state.jumping === true ? 'jumping' : null}`}
          src={this.props.selectedCharacter.image}
        />
        <img 
          className='jumper'
          src={this.props.selectedJumper.image}
        />
      </section>
    )
  }
}

export default Game