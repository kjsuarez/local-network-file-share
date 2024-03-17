
const express = require('express')
var path = require('path');
const app = express()
const port = 3000
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: 'views'
  })
});

app.get('/poop', (req, res) => {
  res.download('files/poop.txt', 'poop.txt', function (err) {
    if (err) {
      console.log("failed")
      console.log(err)
    } else {
      console.log("it worked")
    }
  })
})

app.listen(port, '0.0.0.0',() => {
  console.log(`Party on port ${port}`)
})