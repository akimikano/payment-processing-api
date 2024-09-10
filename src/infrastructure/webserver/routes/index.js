const terminalRouter = require('./terminalRoutes.js');

function routes(app, express) {
    app.use('/api/v1/terminals', terminalRouter(express));
}

module.exports = routes;
