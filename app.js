const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/infrastructure/webserver/routes/index.js');
const {exceptionHandler, findException} = require("./src/infrastructure/webserver/middleware/exceptionHandler");
const config = require("./src/config");
const {NotFound} = require("./src/infrastructure/webserver/exceptions");
const {sequelize, BankAccountModel} = require("./src/infrastructure/database");
const {when} = require("@hapi/joi/lib/compile");
const e = require("express");


const app = express()
app.use(bodyParser.json());

function errorHandler(err, req, res, next) {
    console.error('----');
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
}


app.get('/', findException((req, res, next) => {
    // res.send('Hello World!')
    throw new NotFound()
}))

routes(app, express);

app.use(exceptionHandler())


app.listen(config.port, config.host, async () => {
    const expires = new Date().setDate(new Date().getDate() + 10)
    console.log(expires)
    await sequelize.sync()
    // const acc = await BankAccountModel.findOne()
    // console.log(acc)
    // console.log(Object.values(acc.dataValues))
    console.log(`Listening on port http://${config.host}:${config.port}`)
})
