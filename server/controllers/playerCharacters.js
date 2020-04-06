const playerCharacters = []
let id = 1

module.exports = {
  addSelected: (req, res) => {
    let {name, image, type} = req.body
    let newPlayer = {
      name,
      image,
      type,
      id
    }

    id++

    playerCharacters.push(newPlayer)

    const index = playerCharacters.findIndex(character => {
      return character.id === newPlayer.id
    })
  
    if(index === -1){
      return res.status(404).send(`Character does not exist`)
    }
  
    res.status(200).send(playerCharacters[index])
  },

  editSelected: (req, res) => {
    const {id} = req.params
    const {newName} = req.body
  
    const index = playerCharacters.findIndex(character => {
      return character.id === +id
    })
  
    if(index === -1){
      return res.status(404).send(`Character does not exist`)
    }
  
    playerCharacters[index].name = newName
    res.status(200).send(playerCharacters[index])
  },
}
