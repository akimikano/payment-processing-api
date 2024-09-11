const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/infrastructure/webserver/routes/index.js');
const exceptionHandler = require("./src/infrastructure/webserver/middleware/exceptionHandler");
const config = require("./src/config");
const {NotFound} = require("./src/infrastructure/webserver/exceptions");


const app = express()
app.use(bodyParser.json());
// app.use(exceptionHandler());


app.get('/', (req, res) => {
    // res.send('Hello World!')
    throw new NotFound
})

routes(app, express);

app.listen(config.port, config.host, async () => {
    console.log(`Listening on port http://${config.host}:${config.port}`)
})
