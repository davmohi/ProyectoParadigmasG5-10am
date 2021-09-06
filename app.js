// Imports
const express = require('express')
const app = express()
const port = process.env.PORT || 5000

// Static Files
app.use(express.static('public'));
// Specific folder example
// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))
// app.use('/img', express.static(__dirname + 'public/images'))

// Set View's
app.set('views', './public/html');

// Navigation
app.get('', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html')
})

app.get('/index.html', (req, res) => {
   res.sendFile(__dirname + '/public/html/index.html')
})

app.listen(port, () => console.info(`App listening on port ${port}`))