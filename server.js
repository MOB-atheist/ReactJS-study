var express = require('express');

const app = express()

app.use('/',express.static('website'))
app.use('/src',express.static('src'))
app.use('/',express.static('website/src'))

const port = 80

app.listen(port, () => console.log(`App listening on port ${port}!`))