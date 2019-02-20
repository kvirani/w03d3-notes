const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

const creatures = [
  {
    id: 0,
    name: 'Kymara (Dragon, Lion, Snake thing)',
    damage: 70,
    type: 'Flying',
  },
  {
    id: 1,
     name: 'Bigfoot',
    damage: 60,
    type: 'Ground',
  }
];

app.get('/creatures.json', (req, res) => {
  // JSON.stringify(obj)
  res.json(creatures);
});

// app.post('/creatures', (req, res) => {
//   console.log(req.body);
//   const creature = {
//     name: req.body.name,
//     type: req.body.type,
//     damage: req.body.damage
//   }
//   creatures.push(creature);
//   res.send(creature);
//   console.log(creatures);
// })

app.listen(8888, () => console.log("Server running on 8888"));