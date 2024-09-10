import terminalRouter from './terminalRoutes.js';

export default function routes(app, express) {
    app.use('/api/v1/terminals', terminalRouter(express));
}
