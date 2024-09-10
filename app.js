import express from 'express';
import routes from './src/infrastructure/webserver/routes/index.js';


const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

routes(app, express);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

export default app;
