const terminalRouter = require('./terminalRoutes.js');
const paymentRouter = require("./paymentRoutes");

function routes(app, express) {
    app.use('/api/v1/terminals', terminalRouter(express));
    app.use('/api/v1/payments', paymentRouter(express));
}

module.exports = routes;
