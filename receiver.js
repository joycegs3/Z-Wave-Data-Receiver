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

let nodeName = undefined;

app.post('/receiveNodeInfo', async function(req, res) {
    console.log("Showing new node added info");
    //let info = req.body.toString();
    console.log(req.body);
});

app.post('/receiveZwaveNetwork', async function(req, res) {
    console.log("Z-Wave Network");
    //let info = req.body.toString();
    console.log(req.body);
});

app.post('/receiveNodeEvents', async function(req, res) {
    console.log("Showing Node Events");
    //let info = req.body.toString();
    console.log(req.body);
});

// app.post('/nameNewNode', async function(req, res) {
//     console.log("GONNA NAME THE NEW NODE");
//     //let info = req.body.toString();
//     if (req.body.isNodeUnnamed == true) {
//         nodeName = "The Button - Joyce's Bedroom";
//     }

//     res.send({nodeName: nodeName});
// });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});