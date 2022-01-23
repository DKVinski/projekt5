const express = require('express')

const app = express()
const port = process.env.PORT || 8081

//static files
app.use(express.static('public'))

app.use(express.urlencoded({extended: true}));

app.listen(port, () => console.log(`Listening on port ${port}`))