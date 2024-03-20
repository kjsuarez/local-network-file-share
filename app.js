
const express = require('express')
var path = require('path');
const app = express()
const port = 3000
app.use(express.static(path.join(__dirname, 'views')));

const fileRoutes = require('./routes/files.js');
app.use('/download', fileRoutes);

// view downloads

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'views' })
});

app.get('/series', (req, res) => {
  res.sendFile('series.html', { root: 'views' })
});

app.get('/movies', (req, res) => {
  res.sendFile('movies.html', { root: 'views' })
});

app.get('/tng', (req, res) => {
  res.sendFile('tng.html', { root: 'views' })
});


app.listen(port, '0.0.0.0',() => {
  console.log(`Party on port ${port}`)
})