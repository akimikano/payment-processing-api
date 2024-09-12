const terminalRouter = require('./terminalRoutes.js');
const paymentRouter = require("./paymentRoutes");
const cardRouter = require("./cardRoutes");




function routes(app, express) {
    app.use('/api/v1/terminals', terminalRouter(express));
    app.use('/api/v1/payments', paymentRouter(express));
    app.use('/api/v1/cards', cardRouter(express));
}

module.exports = routes;
