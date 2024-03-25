
const express = require('express')
var path = require('path');
const app = express()
const port = 8080
app.use(express.static(path.join(__dirname, 'views')));

const fileRoutes = require('./routes/files.js');
app.use('/download', fileRoutes);

// view downloads

// expres defaults root to indexedDB.js???
// app.get('/', (req, res) => {
//   res.sendFile('kitchen_sink.html', { root: 'views' })
// });

app.get('/kitchen_sink', (req, res) => {
  res.sendFile('kitchen_sink.html', { root: 'views' })
});

app.get('/anime', (req, res) => {
  res.sendFile('anime.html', { root: 'views' })
});

app.get('/movies', (req, res) => {
  res.sendFile('movies.html', { root: 'views' })
});

app.get('/tng', (req, res) => {
  res.sendFile('tng.html', { root: 'views' })
});

app.get('/books', (req, res) => {
  res.sendFile('books.html', { root: 'views' })
});

app.get('/deadly_class', (req, res) => {
  res.sendFile('deadly_class.html', { root: 'views' })
});

app.get('/saga', (req, res) => {
  res.sendFile('saga.html', { root: 'views' })
});

app.get('/software', (req, res) => {
  res.sendFile('software.html', { root: 'views' })
});


app.listen(port, '0.0.0.0',() => {
  console.log(`Party on port ${port}`)
})