const express = require('express');

const app = express();
app.set('port', process.env.PORT || 3005);
app.set('port', process.env.PORT || 3005);

app.get('/', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const response = { "response": "This is GET method." };
    console.log(response);
    res.end(JSON.stringify(response));
});

const server = app.listen(app.get("port"), function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Node.js API app listening at http://%s:%s", host, port);
});