const express = require('express')
const PORT = 6969

const charController = require('./controllers/charController')

const app = express()

app.use(express.json())

app.get('/api/characters', charController.getCharacters)
app.post('/api/characters', charController.newCharacter)
app.put('/api/characters/:id', charController.changeName)
app.delete('/api/characters/:id', charController.removeCharacter)

app.listen(PORT, () => console.log(`Docked at port ${PORT}`))