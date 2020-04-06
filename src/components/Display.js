import React from 'react'
  
function Display(props) {
  console.log(props)
  return (
    <div className={`character ${props.character.type === 'character' ? 'hero' : 'villain'}`}>
      <img
        className='char-list-img'
        src={props.character.image}
        alt={props.character.name}
        />
      {props.character.name}
      <button
        onClick={() => props.selectChar(props.character.id)}
      >
        Select
      </button>
      {props.character.delete ? (
        <button
          onClick={() => props.deleteChar(props.character.id)}
        >
          Delete
        </button> 
      ): (null)}
    </div>
  )
}

export default Display