const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 5050;

app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.text({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/receiveNodeInfo', async function(req, res) {
    console.log("Showing new node added info");
    console.log(req.body);
});

app.post('/receiveZwaveNetwork', async function(req, res) {
    console.log("Z-Wave Network");
    console.log(req.body);
});

app.post('/receiveNodeEvents', async function(req, res) {
    console.log("Showing Node Events");
    console.log(req.body);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
