const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/data', (req, res) => {
    res.json(req.body);
})

app.get('/greeting/:name', (req, res) => {
    res.json({ message: "Hello " + req.params.name });
})

app.listen(3000, () => {
    console.log('server run');
});
