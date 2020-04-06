const characters = require('../../characters.json')
let id = +characters[characters.length-1].id + 1

module.exports = {
  getCharacters: (req, res) => {
    if(req.query.id){
      const filtered = characters.filter(e => e.id === +req.query.id)
      return res.status(200).send(filtered)
    }
    res.status(200).send(characters)
  },

  newCharacter: (req, res) => {
    let {name, image, type} = req.body
    const newCharacter = {
      name,
      image,
      type,
      delete: true,
      id,
    }

    id++
    characters.push(newCharacter)
    res.status(200).send(characters)
  },

  removeCharacter: (req, res) => {
    const {id} = req.params
    
    const index = characters.findIndex(character => {
      return character.id === +id
    })

    if(index === -1){
      return res.status(404).send(`Character does not exist`)
    }

    characters.splice(index, 1)
    res.status(200).send(characters)
  }
}