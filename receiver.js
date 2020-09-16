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
    console.log("----------ESTOU NA RECEIVER-------------");
    //let info = req.body.toString();
    console.log(req.body);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});