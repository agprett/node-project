const express = require('express')
const PORT = 6969

const charController = require('./controllers/charController')
const playerCharacters = require('./controllers/playerCharacters')

const app = express()

app.use(express.json())

// app.get('/api/player-selection', playerCharacters.getSelected)
app.post('/api/player', playerCharacters.addSelected)
app.put('/api/player/:id', playerCharacters.editSelected)

app.get('/api/characters', charController.getCharacters)
app.post('/api/characters', charController.newCharacter)
app.delete('/api/characters/:id', charController.removeCharacter)

app.listen(PORT, () => console.log(`Docked at port ${PORT}`))