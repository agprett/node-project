import React from 'react'
  
function Display(props) {
  return (
    <div className={`character ${props.character.type === 'character' ? 'hero' : 'villain'}`}>
      <img
        className='char-list-img'
        src={props.character.image}
        alt={props.character.name}
        />
      <p className='name'>{props.character.name}</p>
      <button
        onClick={() => props.selectChar(props.character.name, props.character.image, props.character.type)}
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