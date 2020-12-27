const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.get('/user', (req, res) => {
    res.json({ name: req.query.name, message: "Hello" });
})
app.post('/data/', (req, res) => {
    res.json({ name: req.body.name, message: req.body.massage });

})
app.get('/greeting/', (req, res) => {
    res.json({ message: "Hello" });
})

app.listen(3000, () => {
    console.log('server run');
});